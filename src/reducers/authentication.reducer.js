import { userConstants } from '../constants/user.constants';
 
let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { signedIn: true, user } : {};
 
export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        user: action.user,
        signingIn: true
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        signedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}
