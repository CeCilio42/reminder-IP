import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import '../App.css';
import ReminderLogo from '../images/ReminderLogoPng.png'
import HomeLogo from '../images/icons8-home-100.png'
import CreateLogo from '../images/icons8-create-100.png'
import SavedLogo from '../images/icons8-save-100.png'

import { useAuth0 } from '@auth0/auth0-react';


function Sidebar() {

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
        <div className="sidebar">
            <div className="logo">
                <img src={ReminderLogo} alt="Logo" />
            </div>
            <nav>
                <ul className="sidebar-menu">
                    <li><Link to="/"><img src={HomeLogo} className="menu-icon" alt="Home" />Home</Link></li>
                    <li><Link to="/create"><img src={CreateLogo} className="menu-icon" alt="Create" />Create</Link></li>
                    <li><Link to="/saved"><img src={SavedLogo} className="menu-icon" alt="Saved" />Saved</Link></li>
                </ul>
            </nav>
            <div className="user-profile">
                <img src={user.picture} alt="Profile Picture" className="profile-pic" />
                <Link to="/profile" className="username">{user.name}</Link>
            </div>
        </div>
    );
}

export default Sidebar;
