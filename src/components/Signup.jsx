import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'
import { EnvelopeIcon, LinkIcon, LockClosedIcon, UserCircleIcon } from '@heroicons/react/16/solid'
import Select from 'react-select';


const genders = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'others', title: 'Others' },
]

const Signup = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  // Your skills list
  const skillsList = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js",
    "Angular", "Node.js", "Express", "MongoDB", "GraphQL", "MySQL", "PostgreSQL",
    "Python", "Django", "Flask", "Java", "Spring Boot", "C#", ".NET", "Git", "GitHub",
    "Tailwind CSS", "Redux", "Zustand", "Docker", "Firebase"
  ];

  // Format the skills list for React Select
  const formattedSkills = skillsList.map((skill) => ({
    value: skill,
    label: skill
  }));

  const handleChange = (selectedOption) => {
    setSelectedSkills(selectedOption);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 px-3 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md">
        <div className='flex justify-center'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1000 1000"
            width="30"
            height="30"
            preserveAspectRatio="xMidYMid meet"
            style={{
              width: '15%',
              height: '15%',
              transform: 'translate3d(0px, 0px, 0px)',
              contentVisibility: 'visible',
            }}
            id="Tinder"
          >
            <defs>
              <clipPath id="__lottie_element_3">
                <rect width="1000" height="1000" x="0" y="0" />
              </clipPath>
              <linearGradient
                id="__lottie_element_9"
                spreadMethod="pad"
                gradientUnits="userSpaceOnUse"
                x1="-542.2219848632812"
                y1="485.77801513671875"
                x2="553.3330078125"
                y2="-471.1109924316406"
              >
                <stop offset="0%" stopColor="rgb(251,38,124)" />
                <stop offset="50%" stopColor="rgb(252,79,103)" />
                <stop offset="100%" stopColor="rgb(253,119,82)" />
              </linearGradient>
            </defs>
            <g clipPath="url(#__lottie_element_3)">
              <g
                transform="matrix(0.6000000238418579,0,0,0.6000000238418579,305.8999938964844,311.8999938964844)"
                opacity="1"
                style={{ display: 'block' }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,353.5,323.5)">
                  <path
                    fill="url(#__lottie_element_9)"
                    fillOpacity="1"
                    d="M467,-287 C467,-287 467,287 467,287 C467,386.3420104980469 386.3420104980469,467 287,467 C287,467 -287,467 -287,467 C-386.3420104980469,467 -467,386.3420104980469 -467,287 C-467,287 -467,-287 -467,-287 C-467,-386.3420104980469 -386.3420104980469,-467 -287,-467 C-287,-467 287,-467 287,-467 C386.3420104980469,-467 467,-386.3420104980469 467,-287z"
                  />
                  <path
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    fillOpacity="0"
                    strokeMiterlimit="4"
                    stroke="rgb(149,86,237)"
                    strokeOpacity="1"
                    strokeWidth="0"
                    d="M467,-287 C467,-287 467,287 467,287 C467,386.3420104980469 386.3420104980469,467 287,467 C287,467 -287,467 -287,467 C-386.3420104980469,467 -467,386.3420104980469 -467,287 C-467,287 -467,-287 -467,-287 C-467,-386.3420104980469 -386.3420104980469,-467 -287,-467 C-287,-467 287,-467 287,-467 C386.3420104980469,-467 467,-386.3420104980469 467,-287z"
                  />
                </g>
              </g>
              <g
                transform="matrix(39,0,0,39,512.8190307617188,521.911376953125)"
                opacity="1"
                style={{ display: 'block' }}
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d="M-1.5670000314712524,-0.8830000162124634 C0.1770000010728836,-1.4839999675750732 0.4740000069141388,-3.049999952316284 0.25099998712539673,-4.488999843597412 C0.25099998712539673,-4.540999889373779 0.29600000381469727,-4.578000068664551 0.3400000035762787,-4.563000202178955 C2.009000062942505,-3.746999979019165 3.88700008392334,-1.965999960899353 3.88700008392334,0.7049999833106995 C3.88700008392334,2.753000020980835 2.2990000247955322,4.563000202178955 -0.008999999612569809,4.563000202178955 C-2.055999994277954,4.656000137329102 -3.7899999618530273,3.072000026702881 -3.882999897003174,1.024999976158142 C-3.944000005722046,-0.3310000002384186 -3.260999917984009,-1.6109999418258667 -2.1010000705718994,-2.315000057220459 C-2.056999921798706,-2.3450000286102295 -1.996999979019165,-2.315000057220459 -1.996999979019165,-2.263000011444092 C-1.975000023841858,-1.9880000352859497 -1.899999976158142,-1.2979999780654907 -1.5959999561309814,-0.8830000162124634 C-1.5959999561309814,-0.8830000162124634 -1.5670000314712524,-0.8830000162124634 -1.5670000314712524,-0.8830000162124634z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <h2 className="text-center text-2xl/9 font-semibold tracking-tight text-gray-900">
          Create an account
        </h2>
      </div>

      <div className="mt-5 mx-auto w-full max-w-3xl">
        <div className="bg-white px-6 py-12 shadow rounded-lg sm:px-12">
          <form action="#" method="POST" className="space-y-6">
            <div className='grid grid-cols-1'>
              <div className='grid max-[500px]:grid-cols-1 grid-cols-2 gap-5'>
                <div className=''>
                  <label htmlFor="firstName" className="block text-sm/6 font-medium text-gray-900">
                    First Name
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      autoComplete="firstName"
                      placeholder="your first name"
                      className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
                    />
                    <UserCircleIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
                    />
                  </div>
                </div>
                <div className=''>
                  <label htmlFor="lastName" className="block text-sm/6 font-medium text-gray-900">
                    Last Name
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      autoComplete="lastName"
                      placeholder="your last name"
                      className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
                    />
                    <UserCircleIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
                    />
                  </div>
                </div>
              </div>
              <div className='mt-3 grid max-[500px]:grid-cols-1 grid-cols-2 gap-5'>
                <div className=''>
                  <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                    Email
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
                    />
                    <EnvelopeIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
                    />
                  </div>
                </div>
                <div className=''>
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                    Password
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="✸✸✸✸✸✸✸✸"
                      className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
                    />
                    <LockClosedIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
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
                          defaultChecked={gender.id === 'male'}
                          id={gender.id}
                          name="gender"
                          type="radio"
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
                      className="block w-full appearance-none rounded-md bg-white py-1.5 pl-4 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      defaultValue=""
                    >
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
                  <div className="mt-2 grid grid-cols-1">
                    <input
                      id="profileUrl"
                      name="profileUrl"
                      type="text"
                      placeholder="https://img-example.com"
                      className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
                    />
                    <LinkIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
                    />
                  </div>
                </div>
              </div>
              <div className='mt-3 flex justify-baseline gap-5'>
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-900 mb-1">Skills</label>
                  <Select
                    isMulti
                    options={formattedSkills}
                    value={selectedSkills}
                    onChange={handleChange}
                    getOptionLabel={(e) => <span className="text-sm text-gray-900">{e.label}</span>}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
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
                      placeholder='Tell us your story... or just drop a cool quote!'
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      defaultValue={''}
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
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup