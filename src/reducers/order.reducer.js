import { orderConstants } from '../constants/order.constants';
import initialState from './initialState';

export function orders(state = initialState.orders, action) {  
    switch(action.type) {
        case orderConstants.LOAD_ORDERS_SUCCESS:
            return action.orders
        case orderConstants.LOAD_ORDERS_FAILURE:
            return state
        case orderConstants.CREATE_ORDER_SUCCESS:
            return [...state, Object.assign({}, action.order)]
        case orderConstants.CREATE_ORDER_FAILURE:
            return state
        case orderConstants.UPDATE_ORDER_SUCCESS:
            return [
                ...state.filter(order => order.id !== action.order.id),
                Object.assign({}, action.order)
            ];
        case orderConstants.UPDATE_ORDER_FAILURE:
            return state
        case orderConstants.DELETE_ORDER_SUCCESS:
        return [
            ...state.filter(order => order.id !== action.id)
          ];
        default: 
            return state;
    }
  }
