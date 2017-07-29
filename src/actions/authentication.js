import {LOGIN,TOKEN} from './types';

export function loginAction(email,token){
	return{
      type: LOGIN,
      token: token,
      email: email
    }
}

export function tokenAction(token){
	return{
		type: TOKEN,
		token: token
	}
}

export function logoutAction(){
	return{
		type: LOGOUT
	}
}