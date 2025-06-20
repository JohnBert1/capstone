import {useState, useEffect} from 'react'

import { LuUser } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import {useNavigate} from 'react-router-dom';
function LoginPage() {
    const navigate = useNavigate();

    //Handle show and hide password
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    const loginOptions = ["Admin Login", "Staff Login", "Volunteer Login", "Member Login"];
    return (
        <div className="w-screen h-screen flex justify-center items-center rounded-xl">
            {/* loginform */}

            <div className="p-5">
                <div className="flex flex-col mb-10 justify-center items-center">
                    <p>Welcome to</p>
                    <a href className="text-2xl font-bold">LampKonek</a>
                </div>
                <div className='p-3 pr-8 pl-8 rounded-xl shadow-[0px_0px_40px_0px_#000000]'>
                     <div>
                    <h1 className="text-center text-xl font-bold">Login</h1>
                    <p className="text-center p-1">Enter your credentials to access your account</p>
                    <p className="flex flex-row w-full justify-center items-center p-1 gap-1"><LuUser size={20}/>Role-base-access:</p>
                    <p className="text-center p-1">Use email with admin/staff/volunteer/member prefix for different roles</p>
                </div>
                <div className="mt-5">
                    <form>
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className='text-xl'>Email</label>
                            <div className="flex mt-1 items-center border border-black pl-3 pr-2 gap-1 rounded-lg"> 
                                <FaRegEnvelope size={25}/>
                                <input type="text" name="email" placeholder="name@example.com" className="ml-3 w-full text-xl pt-3 pb-3 focus:outline-none" />
                            </div>
                        </div>
                        {/* Password */}
                        <div className="mt-3">
                            <label htmlFor="password" className='text-xl'>Password</label>
                            <div className="flex mt-1 flex-row items-center border border-black pl-3 pr-2 rounded-lg gap-1">
                                <FiLock size={25}/>
                                <input 
                                 type={showPassword ? "text" : "password"}
                                 name="email"
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)}
                                 placeholder="Password" 
                                 className="ml-3 w-full text-xl  pt-3 pb-3 focus:outline-none" />

                                 {password && (
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
                                <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlForfor="default-checkbox" className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                            <p className="p-1 hover:underline">Forgot password?</p>
                        </div>
                        <div onClick={() => navigate("/dashboard")} className="flex justify-center items-center bg-gray-900 text-white rounded-md px-4 py-2 gap-2 hover:bg-gray-700">
                            <FiLogIn size={20}/>
                            <button type="button" >Sign in</button>
                        </div>

                        <div className="mt-2">
                            <p className="text-center text-gray-400">QUICK LOGIN OPTIONS</p>
                            <div className="flex justify-center align-center gap-2 mt-4">
                                {loginOptions.map((option, index) => (
                                    <button key={index} className="px-3 py-2 text-black border rounded-md hover:bg-gray-300">
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="w-full mt-3">
                            <p className="text-center">Don't have an account? <b className="hover:underline">Contact your admistration</b></p>
                        </div>
                    </form>
                </div>
               
                </div>
            </div>
        </div>
    )
}

export default LoginPage