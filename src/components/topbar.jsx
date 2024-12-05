import React from 'react';
import { Link } from 'react-router-dom';
import '../output.css';
import { useAuth0 } from '@auth0/auth0-react';

function Topbar({ searchTerm, handleSearchInput }) {
  return (
    <nav className="navbar bg-[#161622] border-b-2 border-[rgb(88,88,88)]">
      <div className="navbar-start">
        <div className="dropdown-container">
          <div className="dropdown">
            <label className="btn btn-ghost flex cursor-pointer px-0" tabIndex="0">
              <svg className="h-6 w-6 text-content2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <div className="dropdown-menu dropdown-menu-bottom-right bg-[#161622]">
              <Link to="/" className="dropdown-item text-sm hover:bg-[#575757]">My Reminders</Link>
              <Link to="/company" className="dropdown-item text-sm hover:bg-[#575757]">Company Reminders</Link>
              <Link to="/saved" className="dropdown-item text-sm hover:bg-[#575757]">Saved Reminders</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-center">
        <div className="relative flex items-center">
          <input
            type="text"
            className="input bg-[#333] border-[#333] text-white w-[400px] rounded-[20px] pl-10"
            placeholder="Search reminders..."
            value={searchTerm}
            onChange={(e) => handleSearchInput(e.target.value)}
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <svg className="h-5 w-5 text-content3" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <div className="flex items-center gap-4">
          <div className="popover">
            <label className="btn btn-solid-primary flex items-center gap-2" tabIndex="0">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Information
            </label>
            <div className="popover-content popover-bottom-left bg-[#161622]" tabIndex="0">
              <div className="popover-arrow"></div>
              <div className="p-4 text-sm text-white">
                Welcome to your reminder dashboard! Here you can manage all your reminders.
              </div>
            </div>
          </div>

          <div className="relative">
            <button className="btn btn-ghost p-2">
              <div className="relative">
                <svg className="h-6 w-6 text-content2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[rgb(0,153,255)] text-xs text-white">
                  3
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
