import axios from "axios"


const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})

function getErrorPayload(err) {
    const message = err?.response?.data?.message || err?.message || "Request failed"
    return { success: false, error: message }
}

export async function register({ username, email, password }) {
    try {
        const response = await api.post('/api/auth/register', {
            username,
            email,
            password
        })

        return { success: true, ...response.data }
    } catch (err) {
        console.error(err)
        return getErrorPayload(err)
    }
}

export async function login({ email, password }) {
    try {
        const response = await api.post('/api/auth/login', {
            email,
            password
        })

        return { success: true, ...response.data }
    } catch (err) {
        console.error(err)
        return getErrorPayload(err)
    }
}

export async function logout() {
    try {
        const response = await api.get('/api/auth/logout')
        return { success: true, ...response.data }
    } catch (err) {
        console.error(err)
        return getErrorPayload(err)
    }
}

export async function getMe() {
    try {
        const response = await api.get('/api/auth/get-me')
        return { success: true, ...response.data }
    } catch (err) {
        console.error(err)
        return getErrorPayload(err)
    }
}
