import React, { useEffect } from 'react'
import SwipeCard from './SwipeCard'
import axios from 'axios';
import { API_URL } from '../config/config';
import { useDispatch, useSelector } from 'react-redux';
import { setFeedData } from '../app/slice/feedSlice';

const Feed = () => {
    const dispatch = useDispatch();
    const { feedData } = useSelector((state) => state.feed);

    const fetchFeedData = async () => {
        if (feedData) return;

        try {
            const res = await axios.get(`${API_URL}user/feed`, { withCredentials: true })

            if (res.status === 200) {
                dispatch(setFeedData(res?.data?.allUser));
            }
        } catch (error) {
            console.error("Error: ", error.response.data.message);
        }
    }

    useEffect(() => {
        fetchFeedData();
    }, [])

    return (
        <SwipeCard cards={feedData} />
    )
}

export default Feed