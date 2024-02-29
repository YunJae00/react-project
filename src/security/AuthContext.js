// AuthProvider.js

import { createContext, useContext, useEffect, useState } from "react";
import { executeJwtAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUsername = localStorage.getItem("username");
        if (storedToken && storedUsername) {
            setToken(storedToken);
            setUsername(storedUsername);
            setAuthenticated(true);
            apiClient.interceptors.request.use((config) => {
                config.headers.Authorization = storedToken;
                return config;
            });
        }
    }, []);

    async function login(username, password) {
        try {
            const response = await executeJwtAuthenticationService(username, password);

            if (response.status === 200) {
                const jwtToken = 'Bearer ' + response.data.accessToken;
                setUsername(username);
                setAuthenticated(true);
                setToken(jwtToken);
                localStorage.setItem("isLoggedIn", "1");
                localStorage.setItem("token", jwtToken);
                localStorage.setItem("username", username);
                apiClient.interceptors.request.use((config) => {
                    console.log('intercepting and adding a token');
                    config.headers.Authorization = jwtToken;
                    return config;
                });
                return true;
            } else {
                logout();
                return false;
            }
        } catch (error) {
            logout();
            return false;
        }
    }

    function logout() {
        setAuthenticated(false);
        setUsername(null);
        setToken(null);
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("token");
        localStorage.removeItem("username");
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, username, login, logout, token }}>
            {children}
        </AuthContext.Provider>
    );
}
