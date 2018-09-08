import { authHeader, URL } from '../helpers/auth_header';
import handleResponse from '../helpers/responseHandler';

export const orderService = {
    getAllOrders,
    createOrder,
    updateOrder,
    deleteOrder
};

function getAllOrders() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${URL}/orders`, requestOptions)
        .then(handleResponse)
        .catch(error => {
            throw(error);
        });
    };

function createOrder(mealId, catererId) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({
            meal_id : mealId,
            caterer_id : catererId
        })
    };
    return fetch(`${URL}/orders/`, requestOptions)
        .then(handleResponse)
        .catch(error => {
            throw(error);
        });
    };

function updateOrder(id, order) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader()
    };
 
    return fetch(`${URL}/orders/${id}`, requestOptions).then(response => {
        return response.json();
    }).catch(error => {
            throw(error);
        });
    };

function deleteOrder(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };
    return fetch(`${URL}/orders/${id}`, requestOptions).then(response => {
        return response.json();
    }).catch(error => {
            throw(error);
        });
    };
