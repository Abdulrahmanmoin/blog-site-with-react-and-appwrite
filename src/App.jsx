import React, { useState, useEffect } from 'react'
import authService from "./appwrite/auth"
import './App.css'
import { login, logout } from './store/authSlice'
import { useDispatch } from 'react-redux'
import { Footer, Header } from './components'
import { Outlet } from "react-router-dom"


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData })) 
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ?
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
    : <div>Loading...</div>
}

export default App