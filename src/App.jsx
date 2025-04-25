import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './components/Body'

const Login = lazy(() => import('./components/Login'))
const Signup = lazy(() => import('./components/Signup'))
const Profile = lazy(() => import('./components/Profile'))
const Feed = lazy(() => import('./components/Feed'))
const Connection = lazy(() => import('./components/Connection'))
const Request = lazy(() => import('./components/Request'))
const Subscription = lazy(() => import('./components/Subscription'))
const EditProfile = lazy(() => import('./components/EditProfile'))
const Home = lazy(() => import('./components/Home'))

const App = () => {

  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Body />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/profile/edit' element={<EditProfile />} />
            <Route path='/connection' element={<Connection />} />
            <Route path='/request' element={<Request />} />
            <Route path='/subscription' element={<Subscription />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App