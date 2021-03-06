import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PrivateRoute from './Components/PrivateRoute'

import Home from './Pages/Home/'
import Login from './Pages/Login'
import Modules from './Pages/Admin/Modules'
import Classes from './Pages/Admin/Classes'
import Admins from './Pages/Admin/Admins'

const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin/modules" element={<PrivateRoute />}>
                    <Route path="/admin/modules" element={<Modules />} />
                </Route>
                <Route path="/admin/classes" element={<PrivateRoute />}>
                    <Route path="/admin/classes" element={<Classes />} />
                </Route>
                <Route path="/admin/admins" element={<PrivateRoute />}>
                    <Route path="/admin/admins" element={<Admins />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent