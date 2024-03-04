import { apiClient } from "./ApiClient";

export const executeJwtAuthenticationService
    = (email, password) => apiClient.post(`/api/auth/login`, { email, password })

export const executeRegisterUserService
    = (user) => apiClient.post(`/api/auth/signup`, user)

export const executeCheckEmailService
    = (email) => apiClient.post(`/api/members/member`, email)

export const executeUserDetailsService
    = (email) => apiClient.get(`/api/members/member/details/${email}`)

export const executeLetterSaveService
    = (email, letter) => apiClient.post(`/api/letters/create/${email}`, letter)
