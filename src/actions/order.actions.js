import { orderConstants } from '../constants/order.constants';
import { alertActions } from './alert.actions';
import { orderService } from '../services/order.service';

export const orderActions = {
    loadAllOrders,
    createOrder,
    deleteOrder,
};

function loadAllOrders() {
    return dispatch => {
 
        orderService.getAllOrders()
            .then(
                response => {
                    dispatch(loadOrdersSuccess(response))
                },
                error => {
                    dispatch(loadOrdersFailure(error.toString()));
                }
            );
    };
 
    function loadOrdersSuccess(orders) { return { type: orderConstants.LOAD_ORDERS_SUCCESS, orders } }
    function loadOrdersFailure(error) { return { type: orderConstants.LOAD_ORDERS_FAILURE, error } }
}

function createOrder(mealId){
    return dispatch => {
        orderService.createOrder(mealId)
            .then(
                order => {
                    dispatch(createOrderSuccess(order)),
                    dispatch(alertActions.success('Order successfully created'))
                },
                error => {
                    dispatch(createOrderFailure(error.toString())),
                    dispatch(alertActions.failure(error.toString()))
                }
            );
    };
 
    function createOrderSuccess(order) { return { type: orderConstants.CREATE_ORDER_SUCCESS, order } }
    function createOrderFailure(order, error) { return { type: orderConstants.CREATE_ORDER_FAILURE, error } }

}

function deleteOrder(id){
    return dispatch => {
        orderService.deleteOrder(id)
            .then(
                message => {
                    dispatch(deleteOrderSuccess(id)),
                    dispatch(alertActions.success('Order successfully deleted'))
                },
                error => {
                    dispatch(deleteOrderFailure(id, error.toString())),
                    dispatch(alertActions.failure(error.toString()))
                }
            );
    };
 
    function deleteOrderSuccess(id) { return { type: orderConstants.DELETE_ORDER_SUCCESS, id } }
    function deleteOrderFailure(id, error) { return { type: orderConstants.DELETE_ORDER_FAILURE, id, error } }
}
