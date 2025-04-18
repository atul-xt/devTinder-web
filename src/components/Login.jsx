import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
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
          Login in to your account
        </h2>
      </div>

      <div className="mt-10 mx-auto w-full max-w-[480px] max-sm:px-3">
        <div className="bg-white px-6 py-12 shadow rounded-lg sm:px-12">
          <form action="#" method="POST" className="space-y-6">
            <div>
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
            <div>
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
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <div className="flex h-6 shrink-0 items-center">
                  <div className="group grid size-4 grid-cols-1">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                    />
                    <svg
                      fill="none"
                      viewBox="0 0 14 14"
                      className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-[:checked]:opacity-100"
                      />
                      <path
                        d="M3 7H11"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                      />
                    </svg>
                  </div>
                </div>
                <label htmlFor="remember-me" className="block text-sm/6 text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm/6">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
          <div>
            <div className="relative mt-10">
              <div aria-hidden="true" className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm/6 font-medium">
                <span className="bg-white px-6 text-gray-900">Or continue with</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <a
                href="#"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                  <path
                    d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                    fill="#34A853"
                  />
                </svg>
                <span className="text-sm/6 font-semibold">Google</span>
              </a>
              <a
                href="#"
                className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
              >
                <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5 fill-[#24292F]">
                  <path
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  />
                </svg>
                <span className="text-sm/6 font-semibold">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Not a member?{' '}
          <Link to="/signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login