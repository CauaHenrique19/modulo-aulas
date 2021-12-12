import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PrivateRoute from './Components/PrivateRoute'

import Home from './Pages/Home/'
import Login from './Pages/Login'
import Modules from './Pages/Admin/Modules'

const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin/modules" element={<PrivateRoute />}>
                    <Route path="/admin/modules" element={<Modules />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent