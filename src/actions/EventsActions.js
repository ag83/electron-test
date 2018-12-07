import {
    EVENTS_REQUEST,
    EVENTS_ERROR,
    EVENTS_SUCCESS,
    EVENTS_RANDOM
} from "../reducers/EventReducer";
import { api, defaultEventsNumber } from "../constants";

function eventsSuccess(res) {
    return {
        type: EVENTS_SUCCESS,
        payload: res
    }
}

function eventsError(error) {
    return {
        type: EVENTS_ERROR,
        payload: error
    }
}

export function getRandomEvents(number) {
    return {
        type: EVENTS_RANDOM,
        payload: number? number : defaultEventsNumber
    }
}

export function getEvents() {
	return (dispatch) => {
        const today = new Date();
		dispatch({type: EVENTS_REQUEST});
		fetch(
			`${api}/feed/onthisday/events/${today.getMonth() + 1}/${today.getDate()}`,
			{
				method: "GET",
				crossDomain: true,
			}
		)
			.then((response) => response.json())
			.then((res) => {
                console.log(res);
                dispatch(eventsSuccess(res));
                dispatch(getRandomEvents());
			})
			.catch((err) => dispatch(eventsError(err.toString())));
	};
}