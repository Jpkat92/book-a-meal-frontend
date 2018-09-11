import { userConstants } from '../constants/user.constants';
import { alertActions } from './alert.actions';
import { history } from '../helpers/history';
import { userService } from '../services/user.service';

export const userActions = {
    signin,
    register,
    signout
};
 
function signin(email, password) {
    return dispatch => {
        dispatch(request({ email, password }));
        userService.signin(email, password)
            .then(
                user => { 
                    dispatch(success(user.data));
                    if (typeof user !== "undefined"){
                        localStorage.setItem('user', JSON.stringify(user.data));
                        user.isAdmin ? history.push('/dashboard') : history.push('/')
                    }
                    dispatch(alertActions.success('You have successfully signed in'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
 
    function request(user) { return { type: userConstants.SIGNIN_REQUEST, user } }
    function success(user) { return { type: userConstants.SIGNIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.SIGNIN_FAILURE, error } }
}
 
function register(user) {
    return dispatch => {
        dispatch(request(user));
        userService.register(user)
            .then(
                message => { 
                    dispatch(success(message));
                    history.push('/signin');
                    dispatch(alertActions.success('User has been registered'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
 
    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function signout() {
    userService.signout();
    return { type: userConstants.SIGNOUT };
}
