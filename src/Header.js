import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Header = () => {
  return (
    <div className="header">
      <h1>FLIGHT TICKET</h1>
      <nav>
        <Link to="/">Seat Generate</Link> <br />
        <Link to="/flightsearch">Flight Search</Link> <br />
        <Link to="/flightaddlist">Flight Add List</Link>
      </nav>
    </div>
  )
}

export default Header;
