// Home.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
    const user = useSelector((state) => state.auth.user);
    return (
        <div className="relative flex items-center justify-center flex-col text-white text-center h-screen">
            <div className='absolute inset-0 bg-black opacity-70' />
            <div className='relative'>
                <h1 className="text-5xl md:text-7xl font-light mb-6">Welcome to DevTinder</h1>
                <p className="text-lg md:text-2xl mx-auto mb-8 max-w-xl">
                    Find and connect with developers around the world based on skills.
                </p>
                {user ? (
                    <Link to="/feed" className="px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700 rounded-full transition duration-300">
                        Explore Feed Page
                    </Link>
                ) : (
                    <Link to="/signup" className="px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700 rounded-full transition duration-300">
                        Create account
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Home;