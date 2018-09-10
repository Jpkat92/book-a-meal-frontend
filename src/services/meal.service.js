import { authHeader, URL } from '../helpers/auth_header';
import handleResponse from '../helpers/responseHandler'

export const mealService = {
    getAllMeals,
    createMeal,
    updateMeal,
    deleteMeal
};

function getAllMeals() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
 
    return fetch(`${URL}/meals`, requestOptions)
        .then(handleResponse)
    };

function createMeal(meal) {
    const requestConfig = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(meal)
    };
 
    return fetch(`${URL}/meals`, requestConfig)
    .then(handleResponse)
};

function updateMeal(id, name, price) {
    const requestConfig = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify({name,price})
    };
    return fetch(`${URL}/meals/${id}`, requestConfig).then(handleResponse)
    };

function deleteMeal(id) {
    const requestConfig = {
        method: 'DELETE',
        headers: authHeader()
    };
    
    return fetch(`${URL}/meals/${id}`, requestConfig).then(handleResponse)
    };
