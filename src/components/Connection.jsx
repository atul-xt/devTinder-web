import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../config/config'
import { useDispatch, useSelector } from 'react-redux'
import { setConnectionData } from '../app/slice/connectionSlice'
import { Link } from 'react-router-dom'
import ProfileInfo from './ProfileInfo'
import { MousePointerClick } from 'lucide-react'

const Connection = () => {
  const dispatch = useDispatch();
  const connection = useSelector((state) => state.connection.connectionData);
  const [loading, setLoading] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [userData, setUserData] = useState([]);

  const fetchConnections = async () => {
    if (connection) return;
    setLoading(true);
    try {
      const apiEndPoint = `${API_URL}user/connections`;
      const res = await axios.get(apiEndPoint, {
        withCredentials: true
      });

      console.log(res);
      if (res.status === 200) {
        dispatch(setConnectionData(res?.data?.data));
      }
    } catch (error) {
      console.error("Error: ", error)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchConnections();
  }, [])

  if (loading)
    return (
      <div className='px-3'>
        <div className='mt-5 bg-white px-6 shadow rounded-lg sm:px-12 animate-pulse py-12 max-w-3xl mx-auto'>
          <div className='mb-3 space-y-2 '>
            <div className='w-32 bg-gray-200 h-8 rounded-3xl'></div>
            <div className='w-full h-5 bg-gray-200 rounded-3xl'></div>
          </div>
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-3xl w-full py-2 px-2 mb-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                  <div className="flex flex-col gap-2">
                    <div className="h-4 w-32 bg-gray-200 rounded"></div>
                    <div className="h-3 w-24 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="flex gap-4 max-[500px]:flex-col max-[500px]:gap-2">
                  <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
                  <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    )

  return (
    <div className='flex min-h-full flex-1 flex-col justify-center items-center pt-5 pb-10 sm:py-12 px-3 sm:px-6 lg:px-8'>
      <div className='mx-auto w-full max-w-3xl'>
        <div className='bg-white shadow rounded-lg p-5 sm:p-12'>
          <div className="mx-auto w-full max-w-2xl">
            <h2 className="text-xl/9 font-semibold tracking-tight text-gray-900">
              {connection ? "Connections" : "No Connections Found"}
            </h2>
            <p className="text-sm/6 text-gray-600">
              {connection ? "Here are the developers you've successfully connected with." : "You haven’t made any connections yet. Once you and another developer show interest in each other, they’ll appear here."}
            </p>
          </div>
          <div className='mt-5'>
            {connection?.map((item, index) => (
              <div key={index} className="mt-3 bg-gray-100 rounded-3xl w-full py-3 px-3">
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <img className='h-12 w-12 rounded-full object-cover' src={item?.profileUrl} alt="ProfilePhoto" />
                    <div>
                      <h2 className='font-semibold tracking-tight max-md:flex max-md:flex-col max-md:leading-none'>{item?.firstName} {item?.lastName}</h2>
                      <span className='text-sm font-light leading-none max-sm:text-xs'>{item?.age} years old</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    {/* Accept Button */}
                    <button
                      onClick={() => {
                        setUserData(item);
                        setOpenInfo(true);
                      }}
                      className="px-4 py-1 flex gap-1 items-center rounded-full max-sm:text-xs text-sm bg-black text-white font-medium shadow-sm hover:bg-white hover:border hover:border-gray-300 hover:text-black active:scale-90 transition-all duration-150"
                    >
                      <MousePointerClick size={18} />
                      Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {!connection && (
        <div className='mt-10'>
          <Link to="/feed" className="px-4 py-2 text-white bg-black hover:bg-white hover:border hover:border-gray-300 active:scale-95 hover:text-black rounded-xl transition duration-300">
            Explore Feed Page
          </Link>
        </div>
      )}
      {openInfo && (
        <div className='absolute inset-0 z-10 h-screen backdrop-blur-md bg-black/10 w-full flex items-center justify-center px-3'>
          <div className='max-w-xl'>
            <ProfileInfo user={userData} close={true} setOpenInfo={setOpenInfo} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Connection