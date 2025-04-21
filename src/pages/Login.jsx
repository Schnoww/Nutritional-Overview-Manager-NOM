// SignUpPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

//need to change it to 'app' instead of SignUpPage to get it working
import {auth} from '../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Student1,  Student2 } from '../config/accountMan';

// const userHandler = () => {
//     Student1('student1@unh.newhaven.edu', 'Student*123');
//     Student2('athlete@unh.newhaven.edu', 'Footballis#1');
// }

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
     const handleSubmit = async (e) => {
         e.preventDefault()
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            console.log("User Logged In", userCredential.user)
            navigate('/dining')
        } catch (error) {
            console.log("Incorrect credentials")
        }
    };
    
    return (
        <div className="bg-indigo-400 flex h-screen w-screen items-center justify-center px-4 sm:px-6 lg:px-8">
            <form className='bg-white p-6 rounded-lg shadow-md w-full max-w-sm'
            onSubmit={handleSubmit}>
                <h1 className='text-black text-2xl font-semibold mb-4'>Login</h1>
                
                <label htmlFor="email" className='text-black block mb-2'>
                    Email:
                    <input 
                        type="email" 
                        id="email"
                        onChange={(e) => setEmail(e.target.value)} 
                        className='mt-1 block w-full border border-gray-300 rounded-md p-2' 
                        required 
                    />
                </label>

                <label htmlFor="password" className='text-black block mb-2'>
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
                    Login
                </button>

                <p className='mt-4 text-center'>
                </p>
            </form>
        </div>
    );
}

export default Login