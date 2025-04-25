import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { API_URL } from '../config/config'
import { useDispatch, useSelector } from 'react-redux'
import { setRequestData } from '../app/slice/requestSlice'
import { Link } from 'react-router-dom'

const Request = () => {
  const dispatch = useDispatch();
  const request = useSelector((state) => state.request.requestData);
  const [loading, setLoading] = useState(false);

  const fetchRequests = async () => {
   
    setLoading(true);

    try {
      const apiEndPoint = `${API_URL}user/requests/received`;
      const res = await axios.get(apiEndPoint, {
        withCredentials: true
      });

      if (res.status === 200) {
        dispatch(setRequestData(res?.data?.requestData));
      }
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setLoading(false);
    }
  }

  const handleRequest = async (id, status) => {
    try {
      const apiEndPoint = `${API_URL}request/review/${status}/${id}`;

      const res = await axios.post(apiEndPoint, {}, {
        withCredentials: true
      })

      if (res.status === 201) {
        toast.success(res.data.message);

        const updatedRequests = request.filter(req => req._id !== id);
        dispatch(setRequestData(updatedRequests));
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
      console.error("Error: ", error)
    }
  }

  useEffect(() => {
    fetchRequests();
  }, [])

  if (loading) {
    return (
      <div className='mt-12 bg-white px-6 shadow rounded-lg sm:px-12 animate-pulse py-12 max-w-3xl mx-auto'>
        <div className='mb-3 space-y-2'>
          <div className='w-32 bg-purple-100 h-8 rounded-3xl'></div>
          <div className='w-full h-5 bg-purple-100 rounded-3xl'></div>
        </div>
        <div className="bg-purple-100 rounded-3xl w-full py-2 px-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-purple-200"></div>
              <div className="flex flex-col gap-2">
                <div className="h-4 w-32 bg-purple-200 rounded"></div>
                <div className="h-3 w-24 bg-purple-200 rounded"></div>
              </div>
            </div>
            <div className="flex gap-4 max-[500px]:flex-col max-[500px]:gap-2">
              <div className="h-8 w-20 bg-purple-200 rounded-full"></div>
              <div className="h-8 w-20 bg-purple-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  if (request.length === 0) {
    return (
      <div className='flex min-h-full flex-1 flex-col pt-5 pb-10 sm:py-12 px-3 sm:px-6 lg:px-8'>
        <div className='mx-auto w-full max-w-3xl'>
          <div className='bg-white shadow rounded-lg p-5 sm:p-12'>
            <div className="mx-auto w-full">
              <h2 className="text-xl/9 font-semibold tracking-tight text-gray-900">No Requests Found</h2>
              <p className="text-sm/6 text-gray-600">
                You haven’t received any connection requests yet. Once someone finds your profile interesting, their request will appear here.
              </p>
            </div>
          </div>
          <div className='mt-10 flex justify-center'>
            <Link to="/feed" className="px-4 py-2 text-white bg-black hover:bg-white hover:border hover:border-gray-300 active:scale-95 hover:text-black rounded-xl transition duration-300">
              Explore Feed Page
            </Link>
          </div>
        </div>
      </div>
    )
  }


  return (
    <div className='flex min-h-full flex-1 flex-col justify-center items-center py-12 px-3 sm:px-6 lg:px-8'>
      <div className='mx-auto w-full max-w-3xl'>
        <div className='h-[80vh] bg-white px-6 py-12 shadow rounded-lg sm:px-12 overflow-hidden'>
          <div className="mx-auto w-full max-w-2xl">
            <h2 className="text-xl/9 font-semibold tracking-tight text-gray-900">Requests</h2>
            <p className="text-sm/6 text-gray-600">
              These are the connection requests you've received from other developers.
            </p>
          </div>
          <div className='mt-5 h-[65vh] overflow-y-auto'>
            {request?.map((req, index) => (
              <div key={index} className="mt-3 bg-purple-100 rounded-3xl w-full py-3 px-3">
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <img className='h-12 w-12 rounded-full object-cover' src={req?.fromUserId?.profileUrl} alt="ProfilePhoto" />
                    <div><span className='font-semibold tracking-tight max-md:flex max-md:flex-col max-md:leading-none'>{req?.fromUserId?.firstName} {req?.fromUserId?.lastName}</span> <span className='text-sm'>sent you a request.</span></div>
                  </div>
                  <div className="flex max-[500px]:flex-col max-[500px]:gap-2 gap-4">
                    <button onClick={() => handleRequest(req?._id, "accepted")} className="px-4 py-1 rounded-full max-sm:text-xs text-sm bg-green-600 text-white font-medium shadow-sm hover:bg-green-700 active:scale-90 transition-all duration-150">Accept</button>
                    <button onClick={() => handleRequest(req?._id, "rejected")} className="px-5 py-1 rounded-full max-sm:text-xs text-sm bg-white text-black font-medium shadow-sm active:scale-90 transition-all duration-150">Reject</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Request