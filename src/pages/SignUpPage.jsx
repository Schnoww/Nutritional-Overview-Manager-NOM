// SignUpPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

//need to change it to 'app' instead of SignUpPage to get it working
// import {auth} from '../firebase'
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
        <div className="bg-indigo-400 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
            <form className='bg-white p-6 rounded-lg shadow-md w-full max-w-sm'
            onSubmit={handleSubmit}>
                <h1 className='text-2xl font-semibold mb-4'>Sign Up</h1>
                
                <label htmlFor="email" className='block mb-2'>
                    Email:
                    <input 
                        type="email" 
                        id="email"
                        onChange={(e) => setEmail(e.target.value)} 
                        className='mt-1 block w-full border border-gray-300 rounded-md p-2' 
                        required 
                    />
                </label>

                <label htmlFor="password" className='block mb-2'>
                    Password:
                    <input 
                        type="password" 
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className='mt-1 block w-full border border-gray-300 rounded-md p-2' 
                        required 
                    />
                </label>

                <button 
                    type="submit" 
                    className='w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200'
                >
                    Sign Up
                </button>

                <p className='mt-4 text-center'>
                    Already registered? 
                    <Link to="/login" className='text-blue-500 hover:underline'> Login</Link>
                </p>
            </form>
        </div>
    );
};

export default SignUpPage;
