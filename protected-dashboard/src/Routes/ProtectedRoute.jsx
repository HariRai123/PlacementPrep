import React from 'react'
import { Navigate } from 'react-router'
function ProtectedRoute({children}) {
    const token= localStorage.getItem("token");
    if(!token)
    {    
    return <Navigate to="/"/>;
    }
    return children
}

export default ProtectedRoute
