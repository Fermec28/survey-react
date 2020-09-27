
import { surveyActions } from '../Actions/index';
import { initialState } from '../constants/index'

export function surveyReducer(state, action) {
    switch (action.type) {
        case surveyActions.SET_USER:
            return action.value;
        case surveyActions.RESET:
            return initialState;
        default:
            return state;
    }
}