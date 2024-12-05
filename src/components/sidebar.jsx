import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../output.css';
import ReminderLogo from '../images/ReminderLogoPng.png'
import { useAuth0 } from '@auth0/auth0-react';

function Sidebar({logout}) {
  const { user, getAccessTokenSilently } = useAuth0();
  
  useEffect(() => {
    const fetchReminders = async () => {
      try {
        const token = await getAccessTokenSilently();
        const userId = user.sub;
      } catch (error) {
        console.error('Error fetching reminders:', error);
      }
    };

    fetchReminders();
  }, [getAccessTokenSilently, user]);

  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-64 transform bg-gray-2 transition-transform duration-200 ease-in-out">
      <div className="flex h-full flex-col">
        {/* Logo and Title */}
        <div className="flex items-center gap-2 px-6 py-5">
          <img src={ReminderLogo} alt="Reminder Logo" className="h-8 w-8" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-content1">Reminder</span>
            <span className="text-xs text-content2">Personal Assistant</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          <Link to="/" className="group flex items-center rounded-lg px-3 py-2 text-content1 hover:bg-gray-4">
            <svg className="h-5 w-5 text-content2 group-hover:text-content1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="ml-3">Home</span>
          </Link>

          <Link to="/company" className="group flex items-center rounded-lg px-3 py-2 text-content1 hover:bg-gray-4">
            <svg className="h-5 w-5 text-content2 group-hover:text-content1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
            <span className="ml-3">Company</span>
          </Link>

          <Link to="/calender" className="group flex items-center rounded-lg px-3 py-2 text-content1 hover:bg-gray-4">
            <svg className="h-5 w-5 text-content2 group-hover:text-content1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <span className="ml-3">Calendar</span>
          </Link>

          <Link to="/saved" className="group flex items-center rounded-lg px-3 py-2 text-content1 hover:bg-gray-4">
            <svg className="h-5 w-5 text-content2 group-hover:text-content1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
            <span className="ml-3">Saved</span>
          </Link>

          <Link to="/create" className="mt-6 flex items-center justify-center rounded-lg bg-blue-4 px-4 py-2 text-blue-11 hover:bg-blue-5">
            <svg className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add Reminder
          </Link>
        </nav>

        {/* User Profile */}
        <div className="border-t border-gray-6 p-4">
          <div className="flex items-center">
            <img src={user.picture} alt={user.name} className="h-10 w-10 rounded-full" />
            <div className="ml-3">
			<Link to="/profile" className="group flex items-center rounded-lg px-3 py-2 text-content1 hover:bg-gray-4">
            <span className="ml-3">{user.name}</span>
          </Link>
              <button 
                onClick={logout}
                className="text-xs text-content2 hover:text-content1"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
