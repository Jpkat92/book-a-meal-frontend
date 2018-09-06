import configureStore from 'redux-mock-store';
import { alertConstants } from '../../src/constants/alert.constants'
import { alertActions } from '../../src/actions/alert.actions';

const mockStore = configureStore();
const store = mockStore();

describe('alert actions', () => {
    beforeEach(() => { 
      store.clearActions();
    });
    describe('alert success', () => {
        test('Dispatches a success message alert', () => {
          const expectedActions = [
            {
              'message': "Registration successful",
              'type': alertConstants.SUCCESS,
            },
          ];
      
          store.dispatch(alertActions.success("Registration successful"));
          expect(store.getActions()).toEqual(expectedActions);
        });
      });

      describe('alert error', () => {
        test('Dispatches an error message alert', () => {
          const expectedActions = [
            {
              'message': "Registration failed",
              'type': alertConstants.ERROR,
            },
          ];
      
          store.dispatch(alertActions.error("Registration failed"));
          expect(store.getActions()).toEqual(expectedActions);
        });
      });

      describe('alert clear', () => {
        test('Clears alert message', () => {
          const expectedActions = [
            {
              'type': alertConstants.CLEAR,
            },
          ];
      
          store.dispatch(alertActions.clear());
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
});
