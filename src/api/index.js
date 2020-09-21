
import { BASE_URL } from '../constants/index'

const handleResponse = async (response) => {
    const status = response.status
    const body = await response.json()
    return { status, body }
}

export const loginRequest = async (data = {}) => {
    const url = `${BASE_URL}/api/v1/login`
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    const result = await handleResponse(response);
    return result// parses JSON response into native JavaScript objects
}

export const signUpRequest = async (data = {}) => {
    const url = `${BASE_URL}/api/v1/users`
    const userScoptRequest = { "user": data }
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userScoptRequest) // body data type must match "Content-Type" header
    });
    const result = await handleResponse(response);
    return result// parses JSON response into native JavaScript objects

}