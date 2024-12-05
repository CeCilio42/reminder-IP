import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../App.css';
import { handleFetchSavedReminders } from '../reminder-functions/fetch-reminders';

const itemsPerPage = 4;

function Saved() {
  const { user, getAccessTokenSilently } = useAuth0();
  const [reminders, setReminders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchReminders = async () => {
      try {
        const token = await getAccessTokenSilently();
        const userId = user.sub; 
        const reminders = await handleFetchSavedReminders(userId);
        setReminders(reminders);
      } catch (error) {
        console.error('Error fetching reminders:', error);
      }
    };

    fetchReminders();
  }, [getAccessTokenSilently, user]);

  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) => {
      if (direction === 'next') {
        return prevPage + 1;
      } else if (direction === 'prev') {
        return prevPage - 1;
      }
      return prevPage;
    });
  };

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedReminders = reminders.slice(start, end);

  return (
    <div className="container">
      <div className="reminder-block">
        <ul className="reminder-list">
          {paginatedReminders.map((reminder) => (
            <li key={reminder.id}>
              <div className="saved-post-it">
                <h2>{reminder.title}</h2>
                <p>{reminder.description}</p>
                <p>Date: {reminder.date}</p>
                <p>Time: {reminder.start_time}</p>
                <button className="menu-btn">Menu</button>
                <div className="menu">
                  <ul>
                    <li><a href="#">Edit</a></li>
                    <li><a href="#">Delete</a></li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="pagination">
          <button
            id="prev-btn"
            onClick={() => handlePageChange('prev')}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span id="page-info">
            Page {currentPage} of {Math.ceil(reminders.length / itemsPerPage)}
          </span>
          <button
            id="next-btn"
            onClick={() => handlePageChange('next')}
            disabled={currentPage === Math.ceil(reminders.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Saved;
