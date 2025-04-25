import React, { useEffect, useState } from 'react'
import SwipeCard from './SwipeCard'
import axios from 'axios';
import { API_URL } from '../config/config';
import { useDispatch, useSelector } from 'react-redux';
import { setFeedData } from '../app/slice/feedSlice';

const Feed = () => {
    const dispatch = useDispatch();
    const { feedData } = useSelector((state) => state.feed);
    const [loading, setLoading] = useState(false);

    const fetchFeedData = async () => {
        setLoading(true);

        try {
            const apiEndPoint = `${API_URL}user/feed`;
            const res = await axios.get(apiEndPoint, { withCredentials: true });

            if (res.status === 200) {
                const newUsers = res?.data?.allUser || [];
                dispatch(setFeedData(newUsers));
            }
        } catch (error) {
            console.error("Error: ", error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchFeedData();
    }, [])


    return (
        <SwipeCard cards={feedData} loading={loading} />
    )
}

export default Feed