import {Types} from '../actions';

const INITIAL_STATE = {};

export default (state=INITIAL_STATE, action) => {
	console.log("reducer");
	console.log(action);
    switch (action.type) {
        case Types.LOGIN:
            return {...state, loggedIn: Boolean(action.token), token: action.token,tokenValid: Boolean(action.token), user: action.user};
        case Types.TOKEN:
            return {...state, loggedIn: Boolean(action.token), token: action.token, user: action.user};
        case Types.LOGOUT:
            return {...state, loggedIn: false, token: undefined, tokenValid:false, user: undefined}
        default:
            return state;
    }
}
