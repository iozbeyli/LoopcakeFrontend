import {LOGIN} from './types';

export function loginAction({email,token}){

  return function(dispatch){
    dispatch({
      type: LOGIN,
      token: token,
      email: email
    })
  }

}
