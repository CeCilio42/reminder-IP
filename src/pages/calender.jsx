import React, { useState } from 'react';
import Calendar from 'react-calendar';
import ReminderModal from '../modal/reminder-modal';
import 'react-calendar/dist/Calendar.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

function CalendarPage({ reminders = [] }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [selectedReminder, setSelectedReminder] = useState(null);

  console.log('Reminders:', reminders);

  const handleOpenModal = (reminder) => {
    setSelectedReminder(reminder);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedReminder(null);
  };

  const remindersByDate = reminders.reduce((acc, reminder) => {
    try {
      // Extract and parse the reminder date
      const [day, month, year] = reminder.date.split(' ')[0].split('/');
      const formattedDate = `${year}-${month}-${day}`;
      const isoDate = new Date(formattedDate).toISOString().split('T')[0];

      // Group reminders by the ISO date string
      acc[isoDate] = acc[isoDate] || [];
      acc[isoDate].push(reminder);
    } catch (error) {
      console.error('Invalid reminder date:', reminder.date);
    }
    return acc;
  }, {});

  console.log('Reminders by Date:', remindersByDate);

  const selectedReminders = remindersByDate[selectedDate.toISOString().split('T')[0]] || [];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Reminders Calendar</h1>
      <div className="flex flex-row items-start gap-8">
        {/* Calendar Component */}
        <div className="flex-shrink-0">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileContent={({ date }) => {
              const isoDate = date.toISOString().split('T')[0];
              const hasReminders = remindersByDate[isoDate];
              return hasReminders ? (
                <div className="bg-blue-500 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center mx-auto">
                  {hasReminders.length}
                </div>
              ) : null;
            }}
          />
        </div>

        {/* Reminders List */}
        <div className="flex-grow">
          <h2 className="text-lg font-semibold">
            Reminders on {selectedDate.toDateString()}
          </h2>
          {selectedReminders.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {selectedReminders.map((reminder, index) => (
                <div key={index} className="card">
                  <div className="card-body">
                    <h2 className="card-header">{reminder.title}</h2>
                    <p className="text-content2">{reminder.description}</p>
                    <p>{reminder.time}</p>
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
          ) : (
            <p className="text-gray-500 mt-4">No reminders for this date.</p>
          )}
        </div>
      </div>

      {/* Reminder Modal */}
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

export default CalendarPage;
