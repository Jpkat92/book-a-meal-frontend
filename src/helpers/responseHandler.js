import { userService } from '../services/user.service'

export default function handleResponse(response) {
    return response.json().then(response => {
        const data = response;
        if (!response.ok) {
            if (response.status === 401) {
                userService.signout();
                window.location.reload(true);
            }
 
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        console.log(data);
        return data;
    });
}
