import { userService } from '../../src/services/user.service'
import mockAxios from 'jest-mock-axios';
import { URL } from '../../src/helpers/auth_header'


describe('testing registration, authentication and logging out', () => {

    let response = {
        "data" : {},
        "config": {},
        "headers": {},
        "status": 200,
        "statusText": "OK",
    }

    afterEach(() => {
        mockAxios.reset();
    });

    it('test user completes registration', () => {
        const user = {"firstName": "John",
            "lastName": "Doe",
            "username": "JohnDoe",
            "email": "johndoe@example.com",
            "password": "@1JohnDoe",
            "isCaterer": true
        }
        
        const requestBody = JSON.stringify(
                {
                    first_name: user.firstName,
                last_name: user.lastName,
                user_name: user.userName,
                email: user.email,
                password: user.password,
                is_caterer: user.isCaterer
                }
            )

        const config= {
            mode : "no-cors",
            headers: { 
                'Content-Type': 'text/plain'
                }
        }

        response.data = {
            "message": "User of email johndoe@example.com has been created"
        }

        let catchFn = jest.fn(),
            thenFn = jest.fn();

        userService.register(user)
            .then(thenFn)
            .catch(catchFn);

        expect(mockAxios.post).toHaveBeenCalledWith(`${URL}/auth/register`, requestBody, config);
        mockAxios.mockResponse(response)

        expect(thenFn).toHaveBeenCalledWith(response);
        expect(catchFn).not.toHaveBeenCalled();
    })

    it('test user logins successfully', () => {
        const user = {
            "email": "johndoe@example.com",
            "password": "@1JohnDoe"
        }
        
        const requestBody = JSON.stringify({
            "email": user.email, 
            "password": user.password
        })

        const config= {
            mode : "no-cors",
            headers: { 
                'Content-Type': 'application/json'
                }
        }

        response.data = {
                "email": "johndoe@example.com",
                "firstName": "John",
                "isAdmin": true,
                "message": "Successfully logged in",
                "token": "fake-jwt-token",
                "userId": 5
            }

        let catchFn = jest.fn(),
            thenFn = jest.fn();

        userService.signin(user.email, user.password)
            .then(thenFn)
            .catch(catchFn);

        expect(mockAxios.post).toHaveBeenCalledWith(`${URL}/auth/login/`, requestBody, config);
        mockAxios.mockResponse(response)

        expect(thenFn).toHaveBeenCalledWith(response);
        expect(catchFn).not.toHaveBeenCalled();
    })


})
