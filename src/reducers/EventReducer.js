export const EVENTS_REQUEST = "EVENTS_REQUEST";
export const EVENTS_ERROR = "EVENTS_ERROR";
export const EVENTS_SUCCESS = "EVENTS_SUCCESS";
export const EVENTS_RANDOM = "EVENTS_RANDOM";

const initialState = {
    loading: false,
    notViewedEvents: null,
    eventsRandom: null,
    viewedEvents: [],
    eventsError: null
};

export default function events(state = initialState, action) {
    switch (action.type) {
        case 'EVENTS_REQUEST':
            return { ...state, loading: true }
        case 'EVENTS_ERROR':
            return { ...state, loading: false, eventsError: action.payload }
        case 'EVENTS_SUCCESS':
            return  { ...state, loading: false, notViewedEvents: action.payload }
        case 'EVENTS_RANDOM':
            let randomEvents = getRandomEvents(state, action.payload);
            return { ...state, ...randomEvents }
        default:
            return state
    }
}

function getRandomEvents(state, number) {
    
}