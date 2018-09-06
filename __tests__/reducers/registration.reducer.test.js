import { registration } from '../../src/reducers/registration.reducer';
import { userConstants } from '../../src/constants/user.constants';

describe('initial_state', () => {
    test('is correct', () => {
      const action = { type: 'fake_action' };
      const initialState = {};
  
      expect(registration(undefined, action)).toEqual(initialState);
    });
  });

describe('registration request', () => {
    test('captures registering request state', () => {
        const action = { type: userConstants.REGISTER_REQUEST, registering: true };
        const expectedState = { registering: true };
    
        expect(registration(undefined, action)).toEqual(expectedState);
      });
});

describe('registration success', () => {
    test('user signs in successfully', () => {
        const action = { type: userConstants.REGISTER_SUCCESS };
        const expectedState = { };
    
        expect(registration(undefined, action)).toEqual(expectedState);
      });
});

describe('registration fails', () => {
    test('user fails to register', () => {
        const action = { type: userConstants.REGISTER_FAILURE };
        const expectedState = { };
    
        expect(registration(undefined, action)).toEqual(expectedState);
      });
});
