import {Types} from '../actions';

const INITIAL_STATE = {};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.LOGIN:
            return {...state, loggedIn: Boolean(action.token), token: action.token,tokenValid: Boolean(action.token),userMail: action.userMail};
        default:
            return state;
    }
}
