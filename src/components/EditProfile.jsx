import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from "react";
import Select from 'react-select';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom'
import { API_URL } from '../config/config';
import { ArrowLeft } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { skillsList, genders } from '../utils/data';
import { setUser } from '../app/slice/authSlice';


const EditProfile = () => {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        age: '',
        profileUrl: '',
        skills: [],
        about: ''
    });

    useEffect(() => {
        if (user) {
            setFormData({
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                gender: user.gender || '',
                age: user.age || '',
                profileUrl: user.profileUrl || '',
                skills: user.skills || [],
                about: user.about || ''
            });
        }
    }, [user]);

    const formattedSkills = skillsList.map((skill) => ({
        value: skill,
        label: skill
    }));

    const handleChange = (selectedOption) => {
        const valuesArray = selectedOption.map((option) => option.value);
        setFormData((prev) => ({
            ...prev,
            skills: valuesArray,
        }));
    };

    const handleChangeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const updateProfileData = async (e) => {
        e.preventDefault();
        setLoader(true);

        try {
            const res = await axios.patch(`${API_URL}profile/edit`, formData, {
                withCredentials: true
            });

            if (res.status === 200) {
                toast.success(res.data.message);
                dispatch(setUser(res.data?.data));

                setTimeout(() => {
                    navigate("/profile")
                }, 1000);
            }
        } catch (error) {
            toast.error(error.response.data.message);
            console.error("Error: ", error)
        } finally {
            setLoader(false);
        }
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center pt-5 pb-10 sm:py-12 px-3 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-3xl">
                <div className='flex justify-start mb-3'>
                    <Link to="/profile" className='flex items-center gap-3'> <ArrowLeft className='inline-block animate-bounce-x' size={18} /> Back</Link>
                </div>
                <div className="bg-white p-5 sm:p-12 shadow rounded-lg">
                    <div className="mx-auto w-full max-w-2xl">
                        <h2 className="text-xl/9 font-semibold tracking-tight text-gray-900">
                            Edit Your Profile
                        </h2>
                        <p className="text-sm/6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
                    </div>
                    <form onSubmit={updateProfileData} className="mt-10 space-y-6">
                        <div className='grid grid-cols-1'>
                            <div className='grid max-[500px]:grid-cols-1 grid-cols-2 gap-5'>
                                <div className=''>
                                    <label htmlFor="firstName" className="block text-sm/6 font-medium text-gray-900">
                                        First Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            required
                                            autoComplete="firstName"
                                            placeholder="your first name"
                                            value={formData.firstName}
                                            onChange={handleChangeInput}
                                            className="block w-full rounded-md bg-white py-1.5 pl-3 pr-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div className=''>
                                    <label htmlFor="lastName" className="block text-sm/6 font-medium text-gray-900">
                                        Last Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            required
                                            autoComplete="lastName"
                                            placeholder="your last name"
                                            value={formData.lastName}
                                            onChange={handleChangeInput}
                                            className="block w-full rounded-md bg-white py-1.5 pl-3 pr-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-3 grid max-[500px]:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-5'>
                                <div className='max-sm:w-fit'>
                                    <label htmlFor="gender" className="block text-sm/6 font-medium text-gray-900">
                                        Gender
                                    </label>
                                    <div className="mt-2 space-y-0 flex items-center space-x-2.5">
                                        {genders.map((gender) => (
                                            <div key={gender.id} className="flex items-center">
                                                <input
                                                    checked={formData.gender === gender.id}
                                                    id={gender.id}
                                                    name="gender"
                                                    type="radio"
                                                    value={gender.id}
                                                    onChange={handleChangeInput}
                                                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                                />
                                                <label htmlFor={gender.id} className="ml-2 block text-sm/6 font-medium text-gray-900">
                                                    {gender.title}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="md:w-42 md:ml-auto max-[500px]:col-span-2">
                                    <label htmlFor="age" className="block text-sm/6 font-medium text-gray-900">
                                        Age
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="age"
                                            name="age"
                                            value={formData.age}
                                            onChange={handleChangeInput}
                                            className="block w-full appearance-none rounded-md bg-white py-1.5 pl-4 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                            <option value="" disabled>
                                                Select your age
                                            </option>
                                            {Array.from({ length: 71 }, (_, i) => 10 + i).map((age) => (
                                                <option key={age} value={age}>
                                                    {age}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className='max-md:col-span-2 w-full'>
                                    <label htmlFor="profileUrl" className="block text-sm/6 font-medium text-gray-900">
                                        Profile Url
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="profileUrl"
                                            name="profileUrl"
                                            type="text"
                                            placeholder="https://img-example.com"
                                            value={formData.profileUrl}
                                            onChange={handleChangeInput}
                                            className="block w-full rounded-md bg-white py-1.5 pl-3 pr-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-3 flex justify-baseline gap-5'>
                                <div className="w-full">
                                    <label className="block text-sm font-medium text-gray-900 mb-1">Skills</label>
                                    {formData.skills && (
                                        <Select
                                            isMulti
                                            options={formattedSkills}
                                            value={formattedSkills.filter(skill => formData.skills.includes(skill.value))}
                                            onChange={handleChange}
                                            getOptionLabel={(e) => <span className="text-sm text-gray-900">{e.label}</span>}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className='mt-3 flex justify-between gap-5'>
                                <div className='w-full'>
                                    <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                                        About
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows={4}
                                            value={formData.about}
                                            onChange={handleChangeInput}
                                            placeholder='Tell us your story... or just drop a cool quote!'
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {loader ? <span className="loading loading-infinity loading-xl"></span> : "Save Changes"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProfile