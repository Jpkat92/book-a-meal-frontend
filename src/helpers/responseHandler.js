import { userService } from '../services/user.service'

export default function handleResponse(response) {
    return response.json().then(json => {
        const data = json;
        if (!response.ok){
            if (response.status === 401) {
                userService.signout();
                window.location.reload(true);
            }
            const error = (data && data.error);
            return Promise.reject(error);
        }
        return data;
    });
}
