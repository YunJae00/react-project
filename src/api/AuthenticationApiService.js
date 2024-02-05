import { apiClient } from "./ApiClient";

export const executeJwtAuthenticationService
    = (username, password) => apiClient.post('/api/auth/login', { username, password })

export const executeRegisterUserService
    = (user) => apiClient.post(`/api/auth/register`, user)

export const executeCheckUsernameService
    = (username) => apiClient.get(`/api/auth/checkUsername/${username}`)

