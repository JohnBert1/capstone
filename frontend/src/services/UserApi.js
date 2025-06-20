import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

const userApi = {
    register: async (userData) => {
        try {
            const response = await apiClient.post(`/users/register`, userData);
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },
    
    login: async (credentials) => {
        try {
            const response = await apiClient.post(`/users/login`, credentials);
            
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },
    
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },
    
    getCurrentUser: () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },
    
    isLoggedIn: () => {
        return !!localStorage.getItem('token');
    },
    
    getAuthHeader: () => {
        const token = localStorage.getItem('token');
        return token ? { Authorization: `Bearer ${token}` } : {};
    }
};

export default userApi;