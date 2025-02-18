import React from "react";
import "./Login.css";

function Login() {
  return (
    <>
      <div className="container">
      <h2 className="login">Login</h2>
        <form>
        <input type="email"
        name="email"
        placeholder="Email ID" />
        <input
        type="tel"
        name="mobile"
        placeholder="mobile numer" />
        <input type="password"
        placeholder="password" />
        <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;