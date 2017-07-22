import {LOGIN} from './types';

export function loginAction({email,token}){
	return{
      type: LOGIN,
      token: token,
      email: email
    }
}
