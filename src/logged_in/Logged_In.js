import React from 'react';
import { Link } from "react-router-dom";

function LoggedIn() {
  return (
    <div className="Logged_In">
      <div>
        <p>You are logged in!</p>
      </div>
      <div>
        <Link to="/">
          <input type="button" value="Home" />
        </Link>
      </div>
    </div>
  );
}

export default LoggedIn;
