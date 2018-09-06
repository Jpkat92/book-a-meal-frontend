import { authHeader, URL } from '../helpers/auth_header';

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
    debugger;
    return fetch(`${URL}/orders`, requestOptions)
        .then(response => {
            return response.json();
        })
        .catch(error => {
            throw(error);
        });
    };

function createOrder(mealId) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({
            meal_id : mealId
        })
    };
    debugger;
    return fetch(`${URL}/orders/`, requestOptions).then(response => {
        return response.json();
    }).catch(error => {
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
    debugger;
    return fetch(`${URL}/orders/${id}`, requestOptions).then(response => {
        return response.json();
    }).catch(error => {
            throw(error);
        });
    };
