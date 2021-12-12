import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router'
import { Context } from '../../Context/context'

const PrivateRoute = () => {
    const { token, user } = useContext(Context)
    return token && user ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute