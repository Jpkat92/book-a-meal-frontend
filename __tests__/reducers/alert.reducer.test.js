import { alert } from '../../src/reducers/alert.reducer';
import { alertConstants } from '../../src/constants/alert.constants';

describe('initial_state', () => {
    test('is correct', () => {
      const action = { type: 'fake_action' };
      const initialState = {};
  
      expect(alert(undefined, action)).toEqual(initialState);
    });
  });

describe('alert success', () => {
    test('returns success message', () => {
        const action = { type: alertConstants.SUCCESS, message: "Meal added" };
        const expectedState = { message: "Meal added", type: 'alert-success' };
    
        expect(alert(undefined, action)).toEqual(expectedState);
      });
});

describe('alert error', () => {
    test('returns error message', () => {
        const action = { type: alertConstants.ERROR, message: "Login failed" };
        const expectedState = { message: "Login failed", type: 'alert-danger' };
    
        expect(alert(undefined, action)).toEqual(expectedState);
      });
});

describe('alert clear', () => {
    test('clears alert message', () => {
        const action = {type: alertConstants.CLEAR};
        const expectedState = {};
    
        expect(alert(undefined, action)).toEqual(expectedState);
      });
});
