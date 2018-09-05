import { authHeader, URL } from '../helpers/auth_header';

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
 
    return fetch(`${URL}/menu`, requestOptions).then(response => {
        return response.json();
    }).catch(error => {
            console.log(error);
            throw(error);
        });
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
    debugger;
    return fetch(`${URL}/menu`, requestOptions).then(response => {
        return response.json();
    }).catch(error => {
            throw(error);
        });
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
    debugger;
    return fetch(`${URL}/menu/${day}`, requestOptions).then(response => {
        return response.json();
    }).catch(error => {
            throw(error);
        });
    };
