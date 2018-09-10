import axios from 'axios';
import { URL } from '../helpers/auth_header'

export const userService = {
    signin,
    register,
    signout
};

function signin(email, password) {
    const data = JSON.stringify({ email, password })
    const requestConfig = {
        mode : "no-cors",
        headers: { 
                'Content-Type': 'application/json'
                }
        };
    return axios.post(`${URL}/auth/login/`, data, requestConfig)
}

function register(user) {
    const data = JSON.stringify(
        {
            first_name: user.firstName,
            last_name: user.lastName,
            user_name: user.userName,
            email: user.email,
            password: user.password,
            is_caterer: user.isCaterer
       }
    )
    const requestConfig= {
        mode : "no-cors",
        headers: { 
            'Content-Type': 'text/plain'
            }
    };
    return axios.post(`${URL}/auth/register`, data, requestConfig);
}

function signout() {
    localStorage.removeItem('user');
}
