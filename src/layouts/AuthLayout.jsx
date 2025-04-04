import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            {children}
        </div>
    );
};

export default AuthLayout;
