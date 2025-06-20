import { useState, useCallback } from 'react';
import userApi from '../services/userApi';

const useLoginApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const login = useCallback(async (credentials) => {
        setLoading(true);
        setError(null);
        
        try {
            const response = await userApi.login(credentials);
            setLoading(false);
            return response;
        } catch (err) {
            setError(err.message || 'Login failed. Please try again.');
            setLoading(false);
            throw err;
        }
    }, []);
    
    const quickLogin = useCallback(async (role) => {
        const email = `${role.toLowerCase()}@lampkonek.com`;
        const password = 'password123'; 
        
        return login({ email, password });
    }, [login]);
    
    return { login, quickLogin, loading, error };
};

export default useLoginApi;