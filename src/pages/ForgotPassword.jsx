import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('A password reset link has been sent to your email.');
    } catch (err) {
      setError('An error occurred while trying to reset the password.');
      console.error('Password Reset Error:', err);
    }
  };

  return (
    <div className="bg-blue-100 flex flex-col h-screen w-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-blue-600 text-5xl font-bold mb-5 text-center">NOM</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
        <div className="text-2xl font-semibold mb-4 text-black text-center">Forgot Password</div>
        <div className="mb-4 text-center text-gray-500">
          Enter your email address and we'll send you a link to reset your password.
        </div>
        <form onSubmit={handleReset} className="space-y-4">
          <label htmlFor="email" className="text-black block">
            <input
              type="email"
              id="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 placeholder-gray-500"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Reset Password
          </button>
        </form>

        {message && <div className="mt-4 text-green-600 text-center">{message}</div>}
        {error && <div className="mt-4 text-red-600 text-center">{error}</div>}

        <div className="mt-6 text-center">
          <Link to="/auth/login" className="text-blue-500 text-sm hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
