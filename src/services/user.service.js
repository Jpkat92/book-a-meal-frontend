 export const userService = {
    signin,
    register,
};

const URL = 'https://bookamealapi.herokuapp.com/api/v1'

function signin(email, password) {
    console.log(email)
    console.log(password)
    const requestOptions = {
        method: 'POST',
        mode: 'no-cors',
        headers: { 
                'Content-Type': 'application/json'
                },
        body: JSON.stringify({ email, password })
    };
 
    return fetch(`${URL}/auth/login/`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user.access_token) { 
                localStorage.setItem('user', JSON.stringify(user));
            }
 
            return user;
        });
}
function register(user) {
    const requestOptions = {
        method: 'POST',
        mode: 'no-cors',
        headers: { 
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(user)
    };
 
    return fetch(`${URL}/auth/register`, requestOptions).then(handleResponse);
}

function logout() {
    localStorage.removeItem('user');
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
