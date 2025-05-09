import React, { lazy } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProfileInfo = lazy(() => import('./ProfileInfo'));

const Profile = () => {
    const { user } = useSelector((state) => state.auth);

    if (!user) {
        return (
            <div className="bg-white px-6 my-20 shadow rounded-lg sm:px-12 animate-pulse max-w-lg mx-auto">
                <div className="flex flex-col items-center justify-center px-6 py-12 rounded-lg sm:px-12">
                    <div className="w-32 h-32 bg-gray-300 rounded-full mb-3 animate-shimmer bg-[length:200%_100%] bg-shimmer"></div>
                    <div className="w-40 h-5 bg-gray-300 rounded mb-2 animate-shimmer bg-[length:200%_100%] bg-shimmer"></div>
                    <div className="flex gap-3">
                        <div className="w-20 h-4 bg-gray-300 rounded animate-shimmer bg-[length:200%_100%] bg-shimmer"></div>
                        <div className="w-4 h-4 bg-gray-300 rounded-full animate-shimmer bg-[length:200%_100%] bg-shimmer"></div>
                        <div className="w-20 h-4 bg-gray-300 rounded animate-shimmer bg-[length:200%_100%] bg-shimmer"></div>
                    </div>
                    <div className="mt-5 w-full bg-purple-100 rounded-3xl py-4 px-5">
                        <div className="w-1/3 h-4 bg-gray-300 rounded mb-2 animate-shimmer bg-[length:200%_100%] bg-shimmer"></div>
                        <div className="w-full h-3 bg-gray-300 rounded animate-shimmer bg-[length:200%_100%] bg-shimmer"></div>
                    </div>
                    <div className="mt-5 w-full bg-indigo-200 rounded-3xl py-4 px-5">
                        <div className="w-1/3 h-4 bg-gray-300 rounded mb-2 animate-shimmer bg-[length:200%_100%] bg-shimmer"></div>
                        <div className="flex gap-2 flex-wrap">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="w-16 h-6 bg-gray-300 rounded animate-shimmer bg-[length:200%_100%] bg-shimmer"></div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-10 w-28 h-8 bg-indigo-400 rounded-md animate-shimmer bg-[length:200%_100%] bg-shimmer"></div>
                </div>
            </div>
        )
    }

    return (
        <div className='flex min-h-full flex-1 flex-col justify-center pt-5 pb-10 sm:py-12 px-3 sm:px-6 lg:px-8'>
            <div className='max-w-lg w-full mx-auto'>
                <div className='flex justify-start mb-3'>
                    <Link to="/feed" className='flex items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block animate-bounce-x size-5">
                            <path fill-rule="evenodd" d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z" clip-rule="evenodd" />
                        </svg>
                        Back</Link>
                </div>
                <ProfileInfo user={user} isEdit={true} />
            </div>
        </div>
    )
}

export default Profile