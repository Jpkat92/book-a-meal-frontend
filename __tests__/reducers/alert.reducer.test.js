import { alert } from '../../src/reducers/alert.reducer';
import { alertConstants } from '../../src/constants/alert.constants';

const alertAction = (actionType, msg) => {
  if (typeof msg === 'undefined'){
    return {type: actionType}
  }
  return {type: actionType, message: msg}
}

const state = (msg, actionType) => {
  return { message: msg, type: actionType}
}

describe('initial_state', () => {
    test('is correct', () => {
      const action = alertAction('fake_action');
      const initialState = {};
  
      expect(alert(undefined, action)).toEqual(initialState);
    });
  });

describe('alert success', () => {
    test('returns success message', () => {
        const action = alertAction(alertConstants.SUCCESS, "Meal added");
        const expectedState = state("Meal added", "alert-success");
    
        expect(alert(undefined, action)).toEqual(expectedState);
      });
});

describe('alert error', () => {
    test('returns error message', () => {
        const action = alertAction(alertConstants.ERROR, "Login failed");
        const expectedState = state("Login failed", "alert-danger");
    
        expect(alert(undefined, action)).toEqual(expectedState);
      });
});

describe('alert clear', () => {
    test('clears alert message', () => {
        const action = alertAction(alertConstants.CLEAR);
        const expectedState = {};
    
        expect(alert(undefined, action)).toEqual(expectedState);
      });
});
