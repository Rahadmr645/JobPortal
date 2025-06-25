import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import DashBoard from './pages/DashBoard' 
import ProtectedRoute from "./components/ProtectedRoute"
const App = () => {
  return (
    <div>



      {/* router section */}
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/dashBoard' element={<DashBoard />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App