import { authHeader, URL } from '../helpers/auth_header';
import handleResponse from '../helpers/responseHandler';

export const menuService = {
    getMenu,
    createMenu,
    updateMenu
};

function getMenu() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
 
    return fetch(`${URL}/menu`, requestOptions)
        .then(handleResponse)
    };

function createMenu(day, meals) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({
            day, 
            meal_ids: meals
        })
    };
    
    return fetch(`${URL}/menu`, requestOptions)
        .then(handleResponse)
    
    };


function updateMenu(day, meals) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify({
            day, 
            meal_ids: meals
        })
    };
    return fetch(`${URL}/menu/${day}`, requestOptions)
        .then(handleResponse)
    };
