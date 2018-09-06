import { authentication } from '../../src/reducers/authentication.reducer';
import { userConstants } from '../../src/constants/user.constants';

describe('initial_state', () => {
    test('is correct', () => {
      const action = { type: 'fake_action' };
      const initialState = {};
  
      expect(authentication(undefined, action)).toEqual(initialState);
    });
  });

describe('sign in request', () => {
    test('captures sigining in request state', () => {
        const action = { type: userConstants.SIGNIN_REQUEST, user: {} };
        const expectedState = { user: action.user, signingIn: true };
    
        expect(authentication(undefined, action)).toEqual(expectedState);
      });
});

describe('sign in success', () => {
    test('a user signs in successfully', () => {
        const action = { 
            type: userConstants.SIGNIN_SUCCESS, 
            user: {
                email: "bob@example.com",
                firstName: "Bob",
                isAdmin: true,
                message: "Successfully logged in",
                token: "fake-token",
                userId: 3,
            } 
        };
        const expectedState = { user: action.user, signedIn: true };
    
        expect(authentication(undefined, action)).toEqual(expectedState);
      });
});

describe('sign in failure', () => {
    test('a user fails to sign in', () => {
        const action = { 
            type: userConstants.SIGNIN_FAILURE, 
            error : "Login failed"
        };
        const expectedState = {};
    
        expect(authentication(undefined, action)).toEqual(expectedState);
      });
});

describe('sign out', () => {
    test('a user signs out', () => {
        const action = { 
            type: userConstants.SIGNOUT,
        };
        const expectedState = {};
    
        expect(authentication(undefined, action)).toEqual(expectedState);
      });
});
