export function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        return { 'Authorization': 'JWT ' + user.token,
                 'Content-Type': 'application/json',
                };
    } else {
        return {};
    }
}

export const URL = 'https://bookamealapi.herokuapp.com/api/v1'
