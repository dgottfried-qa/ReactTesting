import React from 'react';
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="Login">
      <header className="Login-header">

      </header>
      <div>
        <h1>Login</h1>
        <div>
          <label>Username</label>
          <input type="text" placeholder="Enter username"></input>
        </div>
        <div>
          <label>Password</label>
          <input type="password" placeholder="Enter password"></input>
        </div>
        <div>
          <Link to="/logged-in">
            <input type="submit" placeholder="Submit"></input>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
