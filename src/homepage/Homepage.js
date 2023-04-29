import logo from './logo.svg';
import './Homepage.css';
import React from 'react';
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="Homepage">
      <header className="Homepage-header">
        <img src={logo} className="Homepage-logo" alt="logo" data-testid="homepage-logo"/>
        <p>
          Edit <code>src/Homepage.js</code> and save to reload.
        </p>
        <a
          className="Homepage-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="homepage-link"
        >
          Learn React
        </a>
        <div>
          <Link to="/login">
            <input type="button" value="Login" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Homepage;
