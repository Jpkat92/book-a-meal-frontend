import { orders } from '../../src/reducers/order.reducer';
import { orderConstants } from '../../src/constants/order.constants';

describe('initial_state', () => {
    test('is correct', () => {
      const action = { type: 'fake_action' };
      const initialState = [];
  
      expect(orders(undefined, action)).toEqual(initialState);
    });
  });

describe('Loading orders request', () => {
    test('it returns loading order status', () => {
        const action = {
            type: orderConstants.LOAD_ORDERS_REQUEST
        };
        const expectedState =  [];
    
        expect(orders(undefined, action)).toEqual(expectedState);
      });
});

describe('Load orders successful', () => {
    test('it returns orders', () => {
        const action = {
            type: orderConstants.LOAD_ORDERS_SUCCESS,
            orders: [
                {
                    "date_submitted": "2018-09-04T20:26:06.093561+00:00",
                    "id": 5,
                    "meal": {
                        "id": 8,
                        "name": "Biryani Rice",
                        "price": 10
                    },
                    "user": {
                        "firstName": "Paul",
                        "id": 2,
                        "lastName": "Kayongo"
                    }
                }
            ] 
        };
        const expectedState =  action.orders;
    
        expect(orders(undefined, action)).toEqual(expectedState);
      });
});

describe('Load orders failure', () => {
    test('fails to return orders', () => {
        const action = { 
            type: orderConstants.LOAD_ORDERS_FAILURE, 
            error : "Failed to fetch orders"
        };
        const expectedState = [];
    
        expect(orders(undefined, action)).toEqual(expectedState);
      });
});

describe('Create a order', () => {
    test('it returns orders with new order', () => {
        const initial_state = [
            {
                "date_submitted": "2018-09-04T20:26:06.093561+00:00",
                "id": 5,
                "meal": {
                    "id": 8,
                    "name": "Biryani Rice",
                    "price": 10
                },
                "user": {
                    "firstName": "Paul",
                    "id": 2,
                    "lastName": "Kayongo"
                }
            },
            {
                "date_submitted": "2018-09-04T20:27:46.538044+00:00",
                "id": 6,
                "meal": {
                    "id": 9,
                    "name": "Chicken Curry",
                    "price": 18
                },
                "user": {
                    "firstName": "Paul",
                    "id": 2,
                    "lastName": "Kayongo"
                }
            }
        ]
        const action = {
            type: orderConstants.CREATE_ORDER_SUCCESS,
            order: 
            {
                "date_submitted": "2018-09-04T20:27:46.620932+00:00",
                "id": 7,
                "meal": {
                    "id": 7,
                    "name": "Chicken Tikka",
                    "price": 15
                },
                "user": {
                    "firstName": "Paul",
                    "id": 2,
                    "lastName": "Kayongo"
                }
            }
        };
        const expectedState =  [
                    ...initial_state,
                    Object.assign({}, action.order)
                ];
    
        expect(orders(initial_state, action)).toEqual(expectedState);
      });
});

describe('Create order failure', () => {
    test('fails to create a order', () => {
        const action = { 
            type: orderConstants.CREATE_ORDER_FAILURE, 
            error : "Failed to create order"
        };
        const expectedState = [];
    
        expect(orders(undefined, action)).toEqual(expectedState);
      });
});

describe('Update order success', () => {
    test('it returns orders with an updated order', () => {
        const initial_state = [
            {
                "date_submitted": "2018-09-04T20:27:46.620932+00:00",
                "id": 7,
                "meal": {
                    "id": 7,
                    "name": "Chicken Tikka",
                    "price": 15
                },
                "user": {
                    "firstName": "Paul",
                    "id": 2,
                    "lastName": "Kayongo"
                }
            }
        ]
        const action = {
            type: orderConstants.UPDATE_ORDER_SUCCESS,
            order: 
            {
                "date_submitted": "2018-09-04T20:27:46.620932+00:00",
                "id": 7,
                "meal": {
                    "id": 8,
                    "name": "Biryani Rice",
                    "price": 10
                },
                "user": {
                    "firstName": "Paul",
                    "id": 2,
                    "lastName": "Kayongo"
                }
            }
        };
        const expectedState =  [
                    ...initial_state.filter(
                        order => order.id !== action.order.id),
                    Object.assign({}, action.order)
                ];
    
        expect(orders(initial_state, action)).toEqual(expectedState);
      });
});

describe('Update order failure', () => {
    test('it fails to update a order', () => {
        const initial_state = [
            {
                "date_submitted": "2018-09-04T20:26:06.093561+00:00",
                "id": 5,
                "meal": {
                    "id": 8,
                    "name": "Biryani Rice",
                    "price": 10
                },
                "user": {
                    "firstName": "Paul",
                    "id": 2,
                    "lastName": "Kayongo"
                }
            }
        ]
        const action = {
            type: orderConstants.UPDATE_ORDER_FAILURE,
            error : "Failed to update a order"
        };
        const expectedState =  initial_state;
    
        expect(orders(initial_state, action)).toEqual(expectedState);
      });
});

describe('Delete order success', () => {
    test('it returns orders without deleted order', () => {
        const initial_state = [
            {
                "date_submitted": "2018-09-04T20:26:06.093561+00:00",
                "id": 5,
                "meal": {
                    "id": 8,
                    "name": "Biryani Rice",
                    "price": 10
                },
                "user": {
                    "firstName": "Paul",
                    "id": 2,
                    "lastName": "Kayongo"
                }
            }
        ];
        const action = {
            type: orderConstants.DELETE_ORDER_SUCCESS,
            id: 5
        };
        const expectedState =  [
                    ...initial_state.filter(
                        order => order.id !== action.id)
                ];
    
        expect(orders(initial_state, action)).toEqual(expectedState);
      });
});

describe('Delete order failure', () => {
    test('it fails to delete a order', () => {
        const initial_state = [
            {
                "date_submitted": "2018-09-04T20:26:06.093561+00:00",
                "id": 5,
                "meal": {
                    "id": 8,
                    "name": "Biryani Rice",
                    "price": 10
                },
                "user": {
                    "firstName": "Paul",
                    "id": 2,
                    "lastName": "Kayongo"
                }
            }
        ]
        const action = {
            type: orderConstants.DELETE_order_FAILURE,
            error : "Failed to delete a order"
        };
        const expectedState =  initial_state;
    
        expect(orders(initial_state, action)).toEqual(expectedState);
      });
});
