import { UPDATE_TIME } from "../actions/actionTypes";
const initialState = {
    minutes: 25,
    seconds: 0,
}

export const timeReducer = (state= initialState, action)=> {
    switch (action.type) {
        case UPDATE_TIME:
            return {...state, minutes: action.minutes, seconds: action.seconds}
        default:
            return state;
    }
}