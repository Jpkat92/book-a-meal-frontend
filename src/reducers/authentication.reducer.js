import { userConstants } from '../constants/user.constants';
let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { signedIn: true, user } : {};
 
export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.SIGNIN_REQUEST:
      return {
        ...state,
        user: action.user,
        signingIn: true
      };
    case userConstants.SIGNIN_SUCCESS:
      return {
        ...state,
        signedIn: true,
        user: action.user
      };
    case userConstants.SIGNIN_FAILURE:
      return {};
    case userConstants.SIGNOUT:
      return {};
    default:
      return state
  }
}
