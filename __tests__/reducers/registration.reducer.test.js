import { registration } from '../../src/reducers/registration.reducer';
import { userConstants } from '../../src/constants/user.constants';

const registrationAction = (actionType, registerStatus) => {
  if (typeof registerStatus === 'undefined'){
    return {type: actionType}
  }
  return {type: actionType, registering: registerStatus}
}

describe('initial_state', () => {
    test('is correct', () => {
      const action = registrationAction('fake_action');
      const initialState = {};
  
      expect(registration(undefined, action)).toEqual(initialState);
    });
  });

describe('registration request', () => {
    test('captures registering request state', () => {
        const action = registrationAction(userConstants.REGISTER_REQUEST,true );
        const expectedState = { registering: true };
    
        expect(registration(undefined, action)).toEqual(expectedState);
      });
});

describe('registration success', () => {
    test('user signs in successfully', () => {
        const action = registrationAction(userConstants.REGISTER_SUCCESS);
        const expectedState = { };
    
        expect(registration(undefined, action)).toEqual(expectedState);
      });
});

describe('registration fails', () => {
    test('user fails to register', () => {
        const action = registrationAction(userConstants.REGISTER_FAILURE);
        const expectedState = { };
    
        expect(registration(undefined, action)).toEqual(expectedState);
      });
});
