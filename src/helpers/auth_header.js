export function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        return { 'Authorization': 'JWT ' + user.token,
                 'Content-Type': 'application/json',
                 'Access-Control-Allow-Origin':'*',
                 'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE',
                 'Access-Control-Allow-Headers': 'Origin, Content-Type, Authorization'
                };
    } else {
        return {};
    }
}

export const URL = 'https://bookamealapi.herokuapp.com/api/v1'
