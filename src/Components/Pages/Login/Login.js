import React from "react";
import "./Login.css";
import { useState } from "react";

function Login() {
  const [tel, settel] = useState('');
  const [password,setpassword] = useState('');

const handleLogin = (event) => {
  event.preventDefault();
};
function handleMobileChange(event){
settel(event.target.value)
}
  return (
    <>
      <div className="login-container">
      <h2 className="login">Login</h2>
        <input
        type="text"
        name="mobile"
        placeholder="mobile number" 
        onChange={handleMobileChange} />
        <input type="password" 
        placeholder="password" />
        <button onClick={handleLogin} type="submit">Login</button>
      </div>
    </>
  );
}

export default Login;