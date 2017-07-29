import {Types} from '../actions';

const INITIAL_STATE = {};

export default (state=INITIAL_STATE, action) => {
	console.log("reducer");
	console.log(action);
    switch (action.type) {
        case Types.LOGIN:
            return {...state, loggedIn: Boolean(action.token), token: action.token,tokenValid: Boolean(action.token),userMail: action.email};
        case Types.TOKEN:
            return {...state, loggedIn: Boolean(action.token), token: action.token};
        case Types.LOGOUT:
            return {...state, loggedIn: false, token: undefined, tokenValid:false, userMail: undefined}
        default:
            return state;
    }
}
