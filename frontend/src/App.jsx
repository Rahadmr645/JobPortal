import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import DashBoard from './pages/DashBoard'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import JobList from './components/JobList.jsx'
import JobsRegister from './features/jobs/JobsRegister.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={
       <Home /> 
        } />
        <Route path='/dashBoard' element={
          <ProtectedRoute><DashBoard /></ProtectedRoute>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='jobsRegister' element={<JobsRegister />} />
      </Routes>
    </div>
  )
}

export default App
