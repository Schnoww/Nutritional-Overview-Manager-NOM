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

    const handleSignUpRedirect = () => {
        navigate('/signup'); // Assuming "/signup" is the route to SignUpPage.jsx
    };
    
return (
    <div className="bg-blue-100 flex flex-col h-screen w-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-blue-600 text-5xl font-bold mb-5 text-center">
            NOM
        </h1>
        <h2 className="text-black text-2xl text-center mb-8">
            Providing the info you need for what you want to eat.
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
            <form className="space-y-4" onSubmit={handleSubmit}>
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

                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Log In
                </button>
            
                <div className="text-center">
                    <Link to="/forgot-password" className="text-blue-500 text-sm hover:underline">
                        Forgotten password?
                    </Link>
                </div>
                <hr className="my-4" />
                <div className="text-center">
                    <button 
                        type="button"
                        onClick={handleSignUpRedirect}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md transition duration-200">
                        Create New Account
                    </button>
                </div>
            </form>
        </div>
    </div>
);
}

export default Login;