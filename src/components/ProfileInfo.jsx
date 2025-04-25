import React from 'react'
import { Link } from 'react-router-dom';
import { iconMap } from '../utils/skillsIcon';

const ProfileInfo = (data) => {
    const { user, isEdit, setOpenInfo } = data;
    return (
        <div className="relative bg-white shadow rounded-lg py-10 px-6 sm:p-12">
            {setOpenInfo && (
                <div onClick={() => setOpenInfo(false)} className='absolute right-8 top-8'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6 hover:scale-120 transition duration-200 ease-in-out hover:text-black hover:bg-gray-200 text-gray-600 rounded-full">
                        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                    </svg>
                </div>
            )}
            <div className='flex flex-col items-center justify-center'>
                <img className='w-32 h-32 border border-gray-300 rounded-full object-cover p-1' src={user?.profileUrl} alt="ProfilePhoto" />
                <span className='font-semibold text-xl sm:text-2xl'>{user?.firstName + " " + user?.lastName}</span>
                <div className="flex items-center gap-3 text-muted-foreground mt-1 font-light">
                    <span>{user?.age} years old</span>
                    <span>•</span>
                    <span>
                        {user?.gender ? user.gender[0].toUpperCase() + user.gender.slice(1) : ""}
                    </span>
                </div>
                <div className='w-full sm:min-w-sm'>
                    <div className="mt-5 bg-gray-100 rounded-3xl py-4 px-5">
                        <div className="flex gap-1 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                                <path fillRule="evenodd" d="M1 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6Zm4 1.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2 3a4 4 0 0 0-3.665 2.395.75.75 0 0 0 .416 1A8.98 8.98 0 0 0 7 14.5a8.98 8.98 0 0 0 3.249-.604.75.75 0 0 0 .416-1.001A4.001 4.001 0 0 0 7 10.5Zm5-3.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm0 6.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm.75-4a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold">About me </span>
                        </div>
                        <h2 className="pl-5 mt-1 font-medium text-sm">{user?.about}</h2>
                    </div>
                    <div className="mt-5 bg-gray-100 rounded-3xl py-4 px-5 max-h-56 overflow-y-auto">
                        <div className="flex gap-1 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                                <path d="M13.024 9.25c.47 0 .827-.433.637-.863a4 4 0 0 0-4.094-2.364c-.468.05-.665.576-.43.984l1.08 1.868a.75.75 0 0 0 .649.375h2.158ZM7.84 7.758c-.236-.408-.79-.5-1.068-.12A3.982 3.982 0 0 0 6 10c0 .884.287 1.7.772 2.363.278.38.832.287 1.068-.12l1.078-1.868a.75.75 0 0 0 0-.75L7.839 7.758ZM9.138 12.993c-.235.408-.039.934.43.984a4 4 0 0 0 4.094-2.364c.19-.43-.168-.863-.638-.863h-2.158a.75.75 0 0 0-.65.375l-1.078 1.868Z" />
                                <path fillRule="evenodd" d="m14.13 4.347.644-1.117a.75.75 0 0 0-1.299-.75l-.644 1.116a6.954 6.954 0 0 0-2.081-.556V1.75a.75.75 0 0 0-1.5 0v1.29a6.954 6.954 0 0 0-2.081.556L6.525 2.48a.75.75 0 1 0-1.3.75l.645 1.117A7.04 7.04 0 0 0 4.347 5.87L3.23 5.225a.75.75 0 1 0-.75 1.3l1.116.644A6.954 6.954 0 0 0 3.04 9.25H1.75a.75.75 0 0 0 0 1.5h1.29c.078.733.27 1.433.556 2.081l-1.116.645a.75.75 0 1 0 .75 1.298l1.117-.644a7.04 7.04 0 0 0 1.523 1.523l-.645 1.117a.75.75 0 1 0 1.3.75l.644-1.116a6.954 6.954 0 0 0 2.081.556v1.29a.75.75 0 0 0 1.5 0v-1.29a6.954 6.954 0 0 0 2.081-.556l.645 1.116a.75.75 0 0 0 1.299-.75l-.645-1.117a7.042 7.042 0 0 0 1.523-1.523l1.117.644a.75.75 0 0 0 .75-1.298l-1.116-.645a6.954 6.954 0 0 0 .556-2.081h1.29a.75.75 0 0 0 0-1.5h-1.29a6.954 6.954 0 0 0-.556-2.081l1.116-.644a.75.75 0 0 0-.75-1.3l-1.117.645a7.04 7.04 0 0 0-1.524-1.523ZM10 4.5a5.475 5.475 0 0 0-2.781.754A5.527 5.527 0 0 0 5.22 7.277 5.475 5.475 0 0 0 4.5 10a5.475 5.475 0 0 0 .752 2.777 5.527 5.527 0 0 0 2.028 2.004c.802.458 1.73.719 2.72.719a5.474 5.474 0 0 0 2.78-.753 5.527 5.527 0 0 0 2.001-2.027c.458-.802.719-1.73.719-2.72a5.475 5.475 0 0 0-.753-2.78 5.528 5.528 0 0 0-2.028-2.002A5.475 5.475 0 0 0 10 4.5Z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold">Skills </span>
                        </div>
                        <div className="mt-2 flex gap-2 flex-wrap">
                            {user?.skills.map((skill, index) => {
                                const IconComponent = iconMap[skill.toLowerCase()];
                                return (
                                    <span key={index} className="flex items-center gap-2 bg-white text-black p-1 rounded-sm">
                                        <span className="font-semibold text-xs">{skill.charAt(0).toUpperCase() + skill.slice(1)}</span>
                                        {IconComponent && <IconComponent />}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
                {setOpenInfo && (<span className='mt-5 text-sm bg-gray-200 rounded-3xl py-0.5 animate-bounce px-3 text-black'>Chatting Functionality will be soon...!</span>)}
                {isEdit && (
                    <div className='mt-5'>
                        <Link to="/profile/edit">
                            <button className="flex items-center gap-1 px-4 py-2 text-xs sm:text-sm rounded-md bg-black text-white font-medium shadow-sm hover:bg-white hover:border hover:border-gray-300 hover:text-black active:scale-90 transition-all duration-150">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4 sm:size-5">
                                    <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                                    <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                                </svg>
                                Edit Profile
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProfileInfo