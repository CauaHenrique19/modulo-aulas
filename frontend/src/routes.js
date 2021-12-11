import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/'

const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent