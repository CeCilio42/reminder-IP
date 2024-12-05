import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoute from '../src/tokens/ProtectedRoute';
import logo from './logo.svg';
import Sidebar from './components/sidebar';
import Topbar from './components/topbar';

import Home from './pages/home';
import Create from './pages/create';
import Profile from './pages/profile';
import Login from '../src/pages/login';
import Company from './pages/company';
import { handleFetchReminders } from './reminder-functions/fetch-reminders';


import '../src/tailwind.css';
import Saved from './pages/saved';

function App() {
  const { isAuthenticated, logout } = useAuth0();
  const { user, getAccessTokenSilently } = useAuth0();
  const [reminders, setReminders] = useState([]);
  const [filteredReminders, setFilteredReminders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchReminders = async () => {
      try {
        const token = await getAccessTokenSilently();
        const userId = user.sub; // Assuming user.sub contains the user ID
        const reminders = await handleFetchReminders(userId);
        setReminders(reminders);
        setFilteredReminders(reminders);
      } catch (error) {
        console.error('Error fetching reminders:', error);
      }
    };

    fetchReminders();
  }, [getAccessTokenSilently, user]);

  const handleSearchInput = (input) => {
    setSearchTerm(input);
    setFilteredReminders(
      reminders.filter((reminder) =>
        reminder.title.toLowerCase().includes(input.toLowerCase())
      )
    );
  };

  return (
    <div>
      {isAuthenticated ? (
        <Router>
          <div className="app">
            <Sidebar />
            <div className="main-content">
              <Topbar 
              handleSearchInput={handleSearchInput}
              logout={logout} />
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/create" element={<ProtectedRoute component={Create} />} />
                <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
                <Route path="/" element={<ProtectedRoute component={Home} reminders={filteredReminders} />} />
                <Route path='/company' element={<ProtectedRoute component={Company}/>} />
                <Route path='/saved' element={<ProtectedRoute component={Saved}/>} />
              </Routes>
            </div>
          </div>
        </Router>
      ) : (
        <Login/>
      )}
    </div>
  );
}

export default App;
