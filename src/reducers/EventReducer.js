export const EVENTS_REQUEST = "EVENTS_REQUEST";
export const EVENTS_ERROR = "EVENTS_ERROR";
export const EVENTS_SUCCESS = "EVENTS_SUCCESS";
export const EVENTS_RANDOM = "EVENTS_RANDOM";

const initialState = {
    loading: false,
    events: null,
    eventsRandom: null,
    eventsError: null
};

export default function events(state = initialState, action) {
    switch (action.type) {
        case 'EVENTS_REQUEST':
            return { ...state, loading: true }
        case 'EVENTS_ERROR':
            return { ...state, loading: false, eventsError: action.payload }
        case 'EVENTS_SUCCESS':
            return  { ...state, loading: false, events: action.payload }
        case 'EVENTS_RANDOM':
            let randomEvents = getRandomEvents(state.events, action.payload);
            return { ...state, ...randomEvents }
        default:
            return state
    }
}

function getRandomEvents(evt, number) {
    const events = [...evt]
    let notViewedEvents = events.filter((event) => {return !event.viewed});
    if (notViewedEvents.length === 0 && events.length > 0) {
        events.forEach((event) => { event.viewed = false});
        notViewedEvents = [...events];
    }
    let randomEvents = [];
    for(let i=0; i<number; i++) {
        const randomIndex = Math.floor(Math.random()*notViewedEvents.length);
        const randomEvent = notViewedEvents[randomIndex];
        randomEvents.push(randomEvent);
        notViewedEvents.splice(randomIndex, 1);
        let viewedEventIndex = events.findIndex((evt) => {return evt.id === randomEvent.id});
        events[viewedEventIndex].viewed = true;
        if(notViewedEvents.length === 0 ) {
            events.forEach((event) => { event.viewed = false});
            const filteredId = randomEvents.map((evt) => {return evt.id});
            notViewedEvents = events.filter((evt) => !filteredId.includes(evt.id));
        }
    }

    return {
        events: events,
        eventsRandom: randomEvents
    }

}