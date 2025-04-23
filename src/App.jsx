import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './components/Body'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import Feed from './components/Feed'
import Connection from './components/Connection'
import Request from './components/Request'
import Subscription from './components/Subscription'

const App = () => {

  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Body />}>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/profile' element={<Profile />} />
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