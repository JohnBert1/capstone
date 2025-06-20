import { createContext, useContext, useState, useEffect } from 'react';
import userApi from '../services/userApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const initAuth = () => {
            const currentUser = userApi.getCurrentUser();
            setUser(currentUser);
            setLoading(false);
        };
        
        initAuth();
    }, []);
    
    const login = async (credentials) => {
        const response = await userApi.login(credentials);
        setUser(response);
        return response;
    };
    
    const logout = () => {
        userApi.logout();
        setUser(null);
    };
    
    return (
        <AuthContext.Provider value={{ user, loading, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);