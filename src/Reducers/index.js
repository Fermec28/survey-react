
import { sruveyActions } from '../Actions/index';
import { initialState } from '../constants/index'

export function surveyReducer(state, action) {
    switch (action.type) {
        case sruveyActions.SET_USER:
            return action.value;
        case sruveyActions.RESET:
            return initialState;
        default:
            return state;
    }
}