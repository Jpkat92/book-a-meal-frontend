import { authHeader } from '../helpers/auth_header';

const URL = 'https://bookamealapi.herokuapp.com/api/v1'

function getAllOrders() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
 
    return fetch(`${URL}/orders`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
            }
 
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
 
        return data;
    });
}
