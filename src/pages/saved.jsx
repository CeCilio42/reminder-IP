import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../App.css';
import ReminderModal from '../modal/reminder-modal';
import { handleFetchSavedReminders } from '../reminder-functions/fetch-reminders';

const itemsPerPage = 4;

function Saved() {
  const { user, getAccessTokenSilently } = useAuth0();
  const [reminders, setReminders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedReminder, setSelectedReminder] = useState(null);
  const [showModal, setShowModal] = useState(false);


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

  const handleOpenModal = (reminder) => {
    setSelectedReminder(reminder);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedReminder(null);
  };


  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedReminders = reminders.slice(start, end);

  return (
    <div className='p-4'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
      {paginatedReminders.map((reminder, index) => (
        <div key={index} className="card">
          <div className="card-body">
            <h2 className="card-header">{reminder.title}</h2>
            <p className="text-content2">{reminder.description}</p>
            <p>{reminder.date} at {reminder.time}</p>
            <div className="card-footer">
              <button
                className="btn-secondary btn"
                onClick={() => handleOpenModal(reminder)}
              >
                Options
              </button>
            </div>
          </div>
        </div>
      ))}
      </div>
      <div className='flex justify-center mt-7'>
      <div className="pagination">
        {[...Array(Math.ceil(reminders.length / itemsPerPage)).keys()].map(number => (
          <button
            key={number}
            onClick={() => setCurrentPage(number + 1)}
            className={`pagination-button ${currentPage === number + 1 ? 'active' : ''}`}
          >
            {number + 1}
          </button>
        ))}
      </div>
      </div>
      {showModal && (
        <ReminderModal
          reminder={selectedReminder}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default Saved;
