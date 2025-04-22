// SignUpPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

//need to change it to 'app' instead of SignUpPage to get it working
import {auth} from '../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUpPage = () => {
    const [email, setEmail] = useState('')
    const [password ,setPassword] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            createUserWithEmailAndPassword(auth, email, password)
            console.log("Account has been Created")
        } catch {
            console.log(Error)
        }
    }
    
    return (
        // <div className="bg-indigo-400 flex h-screen w-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        //     <form className='bg-white p-6 rounded-lg shadow-md w-full max-w-sm'
        //     onSubmit={handleSubmit}>
        //         <h1 className='text-2xl font-semibold mb-4'>Sign Up</h1>
                
        //         <label htmlFor="email" className='block mb-2'>
        //             Email:
        //             <input 
        //                 type="email" 
        //                 id="email"
        //                 onChange={(e) => setEmail(e.target.value)} 
        //                 className='mt-1 block w-full border border-gray-300 rounded-md p-2' 
        //                 required 
        //             />
        //         </label>

        //         <label htmlFor="password" className='block mb-2'>
        //             Password:
        //             <input 
        //                 type="password" 
        //                 id="password"
        //                 onChange={(e) => setPassword(e.target.value)}
        //                 className='mt-1 block w-full border border-gray-300 rounded-md p-2' 
        //                 required 
        //             />
        //         </label>

        //         <button 
        //             type="submit" 
        //             className='w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200'
        //         >
        //             Sign Up
        //         </button>

        //         <p className='mt-4 text-center'>
        //             Already registered? 
        //             <Link to="/login" className='text-blue-500 hover:underline'> Login</Link>
        //         </p>
        //     </form>
        // </div>
            <div className="bg-blue-100 flex flex-col h-screen w-screen items-center justify-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-blue-600 text-5xl font-bold mb-10 text-center">
                    NOM
                </h1>
                <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
                    <div className="text-2xl font-semibold mb-4 text-black text-center">Create New Account</div>
                    <div className="mb-4 text-center text-gray-500">It's quick and easy.</div>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex gap-4">
                            <label htmlFor="firstName" className="text-black block mb-2 flex-1">
                                <input 
                                type="text" 
                                id="firstName"
                                placeholder="First name"
                                onChange={(e) => setEmail(e.target.value)} 
                                className="mt-1 block border border-gray-300 rounded-md p-3 placeholder-gray-500 w-full" 
                                required 
                                />
                            </label>
                            <label htmlFor="lastName" className="text-black block mb-2 flex-1">
                                <input 
                                type="text" 
                                id="lastName"
                                placeholder="Last name"
                                onChange={(e) => setEmail(e.target.value)} 
                                className="mt-1 block border border-gray-300 rounded-md p-3 placeholder-gray-500 w-full" 
                                required 
                                />
                            </label>
                        </div>

                        <div className="flex gap-4">
                            


                        </div>


                        <label htmlFor="email" className="text-black block mb-2">
                            <input 
                                type="email" 
                                id="email"
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)} 
                                className="mt-1 block w-full border border-gray-300 rounded-md p-3 placeholder-gray-500" 
                                required 
                            />
                        </label>
        
                        <label htmlFor="password" className="text-black block mb-2">
                            <input 
                                type="password" 
                                id="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-3 placeholder-gray-500" 
                                required 
                            />
                        </label>

                        <div className="text-center">
                            <button 
                                type="button" 
                                className="w-1/3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md transition duration-200">
                                Sign Up
                            </button>
                        </div>
                    
                        <div className="text-center">
                            <Link to="/auth/login" className="text-blue-500 text-sm hover:underline">
                                Already have an account?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default SignUpPage;
