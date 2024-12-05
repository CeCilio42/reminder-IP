import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useAuth0 } from '@auth0/auth0-react';

function Topbar({ searchTerm, handleSearchInput, logout }) {
  return (
    <div className="topbar">
      <ul className="topbar-menu">
        <li><Link to="/">Reminders</Link></li>
        <li><Link to="/company">Company</Link></li>
      </ul>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => handleSearchInput(e.target.value)}
        />
        <span className="search-bar" onClick={() => handleSearchInput(searchTerm)}>
        </span>
      </div>
      <button id="logout-btn" className='logout-btn' onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
    </div>
  );
}

export default Topbar;
