import {post} from './communicationController';
import {API_URL} from '../database';
function Login(formData,respFunc){

    let handleResponse = (err,resp) => {
        console.log(resp.body.data.token);
        respFunc(err,resp);
    };

    console.log(API_URL);
    post(API_URL+"/user/login",formData,handleResponse);
};

function Register(formData,respFunc){
    let handleResponse = (err,resp) => {
        console.log(resp.body.data.token);
        respFunc(err,resp);
    };
    post(API_URL+"/user/register",formData,handleResponse);

};

module.exports = {
    Login,
    Register
};