import React, { useState, useMemo } from 'react';
import ReminderModal from '../modal/reminder-modal';
import '../output.css';

function Home({ reminders }) {
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedReminder, setSelectedReminder] = useState(null);

  const paginatedReminders = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return reminders.slice(start, start + ITEMS_PER_PAGE);
  }, [reminders, currentPage]);

  const totalPages = useMemo(() => Math.ceil(reminders.length / ITEMS_PER_PAGE), [reminders.length]);

  const handleOpenModal = (reminder) => {
    setSelectedReminder(reminder);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedReminder(null);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {paginatedReminders.map((reminder) => (
          <div key={reminder.id} className="card">
            <div className="card-body">
              <h2 className="card-header">{reminder.title}</h2>
              <p className="text-content2">{reminder.description}</p>
              <p>
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
      <div className="flex justify-center mt-7">
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`pagination-button ${currentPage === page ? 'active' : ''}`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
      {/* Render Modal */}
      {showModal && (
        <ReminderModal
          reminder={selectedReminder}
          onClose={handleCloseModal}
          onDelete={() => console.log(`Deleted reminder: ${selectedReminder?.id}`)}
        />
      )}
    </div>
  );
}

export default Home;
