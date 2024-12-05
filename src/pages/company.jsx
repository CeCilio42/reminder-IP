import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { handleFetchCompanyReminders } from '../reminder-functions/fetch-reminders';
import ReminderModal from '../modal/reminder-modal';

const itemsPerPage = 4;

function Company() {
  const { user, getAccessTokenSilently } = useAuth0();
  const [reminders, setReminders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedReminder, setSelectedReminder] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReminders = async () => {
      try {
        const token = await getAccessTokenSilently();
        const userId = user.sub;
        const remindersData = await handleFetchCompanyReminders(userId, token);
        setReminders(remindersData);
      } catch (err) {
        setError('Failed to fetch reminders. Please try again later.');
        console.error('Error fetching reminders:', err);
      }
    };

    fetchReminders();
  }, [getAccessTokenSilently, user]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
  const paginatedReminders = reminders.slice(start, start + itemsPerPage);

  return (
    <div className="p-4">

      {error && <p className="error-message">{error}</p>}

      {/* Reminders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {paginatedReminders.map((reminder) => (
          <div key={reminder.id} className="card">
            <div className="card-body">
              <h2 className="card-header">{reminder.title}</h2>
              <p className="text-content2">{reminder.description}</p>
              <p className="text-content2">
                {reminder.date} at {reminder.time}
              </p>
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

      {/* Pagination */}
      <div className="pagination">
        {[...Array(Math.ceil(reminders.length / itemsPerPage)).keys()].map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number + 1)}
            className={`pagination-button ${
              currentPage === number + 1 ? 'active' : ''
            }`}
          >
            {number + 1}
          </button>
        ))}
      </div>

      {/* Next Activity */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
        <div className="md:col-span-2 card">
          <div className="card-body">
            <h2 className="card-header">Next Activity</h2>
            <p className="text-content2">Reminder 6</p>
            <p className="text-content2">2024-11-06 at 15:00</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <ReminderModal
          reminder={selectedReminder}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default Company;
