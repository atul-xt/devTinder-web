import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { API_URL } from '../config/config';
import { toast } from 'react-toastify';
import { removeUser } from '../app/slice/authSlice';
import { removeConnectionData } from '../app/slice/connectionSlice';
import { removeFeedData } from '../app/slice/feedSlice';
import { removeRequestData } from '../app/slice/requestSlice';

const menuItems = [
    { label: 'Feed', path: '/feed', badge: 'New' },
    { label: 'Connection', path: '/connection' },
    { label: 'Request', path: '/request' },
    { label: 'Subscription', path: '/subscription' },
    { label: 'Profile', path: '/profile' },
    { label: 'Logout', path: '/', isLogout: true }
];


const Navbar = () => {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const res = await axios.post(`${API_URL}logout`, {}, { withCredentials: true });
            if (res.status === 200) {
                toast.success(res.data?.message)
                dispatch(removeUser());
                dispatch(removeConnectionData());
                dispatch(removeFeedData());
                dispatch(removeRequestData());
                navigate("/login");
            }
        } catch (error) {
            console.error("Logout error: ", error)
        }
    }

    return (
        <div className="sticky top-0 z-50 navbar bg-gray-100 shadow-sm w-full" >
            <div className='max-w-7xl mx-auto w-full flex items-center px-10 max-sm:px-3'>
                <div className="flex-1">
                    <Link to="/" className='flex w-fit cursor-pointer'>
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            className="fill-current">
                            <path
                                d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                        </svg>
                        <span className='font-bold text-2xl'>DevTinder.</span>
                    </Link>
                </div>
                {user ? (
                    <div className="flex items-center gap-2">
                        <span className='font-semibold max-[500px]:text-sm max-[380px]:hidden'>Welcome, {user.firstName}</span>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt={user.firstName}
                                        src={user.profileUrl} />
                                </div>
                            </div>
                            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {menuItems.map(({ label, path, badge, isLogout }, index) => (
                                    <li key={index}>
                                        <Link
                                            to={path}
                                            onClick={(e) => {
                                                e.currentTarget.blur();
                                                if (isLogout) handleLogout();
                                            }}
                                            className={badge ? 'justify-between' : ''}
                                        >
                                            {label}
                                            {badge && <span className="badge">{badge}</span>}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-1 justify-end items-center">
                        <Link
                            to="/login"
                            className="group text-sm/6 font-semibold text-gray-900 flex items-center gap-1"
                        >
                            Log in
                            <span
                                aria-hidden="true"
                                className="inline-block text-xl animate-bounce-x"
                            >
                                &rarr;
                            </span>
                        </Link>
                    </div>

                )}
            </div>
        </div>
    )
}

export default Navbar