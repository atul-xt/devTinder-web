import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { API_URL } from '../config/config'
import { setUser } from '../app/slice/authSlice'

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const user = useSelector((state) => state.auth.user);
    const isHomeRoute = location.pathname === '/';

    const fetchUser = async () => {
        if (user) return;

        try {
            const res = await axios.get(`${API_URL}profile/view`, {
                withCredentials: true
            });

            if (res.status === 200) {
                dispatch(setUser(res.data));
            }

        } catch (error) {
            if (error?.response?.status === 401) {
                navigate("/login");
            }
            console.error("Fetching error: ", error.response.data.message);
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <div
            className={`min-h-screen flex flex-col ${isHomeRoute ? 'bg-[url("/assets/devTinder-BG.webp")] bg-cover bg-center' : ''
                }`}
        >
            <Navbar />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Body