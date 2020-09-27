
import { BASE_URL } from '../constants/index'

const getJwtToken = (token) => `Bearer ${token}`

const handleResponse = async (response) => {
    const { status } = response
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
    const userScopeRequest = { "user": data }
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userScopeRequest) // body data type must match "Content-Type" header
    });
    const result = await handleResponse(response);
    return result// parses JSON response into native JavaScript objects

}


export const getSurveys = async (token) => {
    const url = `${BASE_URL}/api/v1/surveys`
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getJwtToken(token)
        },
    });
    const result = await handleResponse(response);
    return result
}

export const deleteSurvey = async ({ headers, id }) => {
    const url = `${BASE_URL}/api/v1/surveys/${id}`
    const { token } = headers;
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getJwtToken(token)
        },
    });
    const result = await handleResponse(response);
    return result
}