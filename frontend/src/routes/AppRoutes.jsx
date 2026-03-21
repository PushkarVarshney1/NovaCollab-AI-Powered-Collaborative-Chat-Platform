import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Home from '../screens/Home'
import Project from '../screens/Project'
import LandingPage from '../screens/Landingpage'
import UserAuth from '../auth/UserAuth'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<UserAuth><Home /></UserAuth>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/project" element={<UserAuth><Project /></UserAuth>} />
        </Routes>
    )
}

export default AppRoutes

