import React, { useState } from 'react';
import ReminderModal from '../modal/reminder-modal';
import '../App.css';

function Home({ reminders }) {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedReminder, setSelectedReminder] = useState(null);

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
    <div className="container">
      <div className="reminder-block">
        <ul className="reminder-list">
          {paginatedReminders.map((reminder) => (
            <li key={reminder.id}>
              <div className="post-it">
                <h2>{reminder.title}</h2>
                <p>{reminder.description}</p>
                <p>Date: {reminder.date}</p>
                <p>Time: {reminder.start_time}</p>
                <button className="menu-btn" onClick={() => handleOpenModal(reminder)}>Menu</button>
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
      <ReminderModal show={showModal} onClose={handleCloseModal} reminder={selectedReminder} />
    </div>
  );
}

export default Home;
