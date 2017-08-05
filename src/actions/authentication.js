import {LOGIN,TOKEN} from './types';

export function loginAction(user,token){
	return{
      type: LOGIN,
      token: token,
      user: user
    }
}

export function tokenAction(user,token){
	return{
		type: TOKEN,
		token: token,
		user: user
	}
}

export function logoutAction(){
	return{
		type: LOGOUT
	}
}