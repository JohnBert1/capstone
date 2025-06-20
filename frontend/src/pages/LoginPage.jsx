import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useLoginApi from '../hooks/useLoginApi';

import { LuUser } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";

function LoginPage() {
    const navigate = useNavigate();
    const { login, quickLogin, loading, error } = useLoginApi();
    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState('');
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoginError('');
        
        try {
            const response = await login({
                email: formData.email,
                password: formData.password
            });
            
            if (formData.rememberMe) {
                localStorage.setItem('rememberedEmail', formData.email);
            } else {
                localStorage.removeItem('rememberedEmail');
            }
            
            navigate('/dashboard');
            
        } catch (err) {
            setLoginError(err.message || 'Login failed. Please check your credentials.');
        }
    };
    
    const handleQuickLogin = async (role) => {
        try {
            const roleType = role.split(' ')[0].toLowerCase(); 
            await quickLogin(roleType);
            navigate('/dashboard');
        } catch (err) {
            setLoginError(`Quick login failed: ${err.message}`);
        }
    };
    
    useEffect(() => {
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        if (rememberedEmail) {
            setFormData(prev => ({
                ...prev,
                email: rememberedEmail,
                rememberMe: true
            }));
        }
    }, []);
    
    useEffect(() => {
        if (error) {
            setLoginError(error);
        }
    }, [error]);
    
    const loginOptions = ["Admin", "Staff", "Volunteer", "Member"];

    return (
        <div className="w-screen h-screen flex justify-center items-center rounded-xl">
            <div className="p-5">
                <div className="flex flex-col mb-10 justify-center items-center">
                    <p>Welcome to</p>
                    <a href="/" className="text-2xl font-bold">LampKonek</a>
                </div>
                <div className='p-3 pr-8 pl-8 rounded-xl shadow-[0px_0px_40px_0px_#000000]'>
                    <div>
                        <h1 className="text-center text-xl font-bold">Login</h1>
                        <p className="text-center p-1">Enter your credentials to access your account</p>
                        <p className="flex flex-row w-full justify-center items-center p-1 gap-1">
                            <LuUser size={20}/>Role-based access:
                        </p>
                        <p className="text-center p-1">Use email with admin/staff/volunteer/member prefix for different roles</p>
                    </div>
                    <div className="mt-5">
                        {loginError && (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
                                <p>{loginError}</p>
                            </div>
                        )}
                        
                        <form onSubmit={handleSubmit}>
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className='text-xl'>Email</label>
                                <div className="flex mt-1 items-center border border-black pl-3 pr-2 gap-1 rounded-lg"> 
                                    <FaRegEnvelope size={25}/>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="name@example.com" 
                                        className="ml-3 w-full text-xl pt-3 pb-3 focus:outline-none" 
                                        required
                                    />
                                </div>
                            </div>
                            {/* Password */}
                            <div className="mt-3">
                                <label htmlFor="password" className='text-xl'>Password</label>
                                <div className="flex mt-1 flex-row items-center border border-black pl-3 pr-2 rounded-lg gap-1">
                                    <FiLock size={25}/>
                                    <input 
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Password" 
                                        className="ml-3 w-full text-xl pt-3 pb-3 focus:outline-none" 
                                        required
                                    />
                                    {formData.password && (
                                        showPassword ? (
                                            <IoEyeOutline
                                                size={30}
                                                className="cursor-pointer"
                                                onClick={() => setShowPassword(false)}
                                            />
                                        ) : (
                                            <IoEyeOffOutline
                                                size={30}
                                                className="cursor-pointer"
                                                onClick={() => setShowPassword(true)}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                            <div className="flex justify-between p-2">
                                <div className="flex items-center">
                                    <input 
                                        id="rememberMe" 
                                        name="rememberMe"
                                        type="checkbox" 
                                        checked={formData.rememberMe}
                                        onChange={handleChange}
                                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                                    />
                                    <label htmlFor="rememberMe" className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                </div>
                                <p className="p-1 hover:underline cursor-pointer">Forgot password?</p>
                            </div>
                            <button 
                                type="submit" 
                                disabled={loading}
                                className="flex justify-center items-center bg-gray-900 text-white rounded-md px-4 py-2 gap-2 hover:bg-gray-700 w-full"
                            >
                                <FiLogIn size={20}/>
                                {loading ? 'Signing in...' : 'Sign in'}
                            </button>

                            <div className="mt-2">
                                <p className="text-center text-gray-400">QUICK LOGIN OPTIONS</p>
                                <div className="flex justify-center align-center gap-2 mt-4">
                                    {loginOptions.map((role, index) => (
                                        <button 
                                            key={index} 
                                            type="button"
                                            onClick={() => handleQuickLogin(role)}
                                            className="px-3 py-2 text-black border rounded-md hover:bg-gray-300"
                                        >
                                            {role} Login
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full mt-3">
                                <p className="text-center">Don't have an account? <b className="hover:underline cursor-pointer">Contact your administration</b></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;