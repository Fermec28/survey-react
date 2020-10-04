
import { BASE_URL } from '../constants/index'

const getJwtToken = (token) => `Bearer ${token}`

const handleResponse = async (response) => {
    const { status } = response
    const body = status !== 204 ? await response.json() : {}
    return { status, body }
}

export const loginRequest = async (data = {}) => {
    const url = `${BASE_URL}/api/v1/login`
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const result = await handleResponse(response);
    return result
}

export const signUpRequest = async (data = {}) => {
    const url = `${BASE_URL}/api/v1/users`
    const userScopeRequest = { "user": data }
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userScopeRequest)
    });
    const result = await handleResponse(response);
    return result

}


export const getSurveys = async (token) => {
    const url = `${BASE_URL}/api/v1/surveys`
    const response = await fetch(url, {
        method: 'GET',
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
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getJwtToken(token)
        },
    });
    const result = await handleResponse(response);
    return result
}

export const createSurvey = async ({ headers, survey }) => {
    const url = `${BASE_URL}/api/v1/surveys/`
    const { token } = headers;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getJwtToken(token)
        },
        body: JSON.stringify({ survey: survey })
    });
    const result = await handleResponse(response);
    return result

}
export const getSurvey = async (params) => {
    const { headers, id } = params
    const url = `${BASE_URL}/api/v1/surveys/${id}`
    const { token } = headers || {};
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getJwtToken(token)
        }
    });
    const result = await handleResponse(response);
    return result

}

export const deleteQuestion = async ({ headers, surveyId, id }) => {
    const url = `${BASE_URL}/api/v1/surveys/${surveyId}/questions/${id}`
    const { token } = headers;
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getJwtToken(token)
        },
    });
    const result = await handleResponse(response);
    return result
}

export const createQuestion = async ({ headers, surveyId, question }) => {
    const url = `${BASE_URL}/api/v1/surveys/${surveyId}/questions`
    const { token } = headers;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getJwtToken(token)
        },
        body: JSON.stringify({ question: question })
    });
    const result = await handleResponse(response);
    return result
}

export const getOptions = async ({ headers, questionId }) => {
    const url = `${BASE_URL}/api/v1/questions/${questionId}/options`
    const { token } = headers || {};
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getJwtToken(token)
        }
    });
    const result = await handleResponse(response);
    return result
}


export const createOption = async ({ headers, questionId, option }) => {
    const url = `${BASE_URL}/api/v1/questions/${questionId}/options`
    const { token } = headers;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getJwtToken(token)
        },
        body: JSON.stringify({ option: option })
    });
    const result = await handleResponse(response);
    return result
}

export const deleteOption = async ({ headers, questionId, id }) => {
    const url = `${BASE_URL}/api/v1/questions/${questionId}/options/${id}`
    const { token } = headers;
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getJwtToken(token)
        },
    });
    const result = await handleResponse(response);
    return result
}


export const createAnswer = async (optionId) => {
    const url = `${BASE_URL}/api/v1/options/${optionId}/responses`
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const result = await handleResponse(response);
    return result
}