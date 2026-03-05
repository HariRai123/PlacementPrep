import React from 'react'
import { useNavigate } from 'react-router';
function Dashboard() {
    const navigate =useNavigate()
 const handleLogout=()=>{
    localStorage.removeItem("token");
    navigate("/")
 }
    return (
    <div>
      <h2>Dashboard</h2>
      <p>You are Logged in!</p>
      <button onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default Dashboard
