import React from "react";
import { useNavigate } from "react-router";
function Login() {
  const navigate = useNavigate();
    const handleLogin=()=>{
        const fakeJWT="123456abcdef";
        localStorage.setItem("token",fakeJWT);
        navigate("/dashboard")
    }
  return (
    <div>
      <h2>Login page</h2>
    <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
