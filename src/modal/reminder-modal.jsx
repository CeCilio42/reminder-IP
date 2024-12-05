import React, {useState} from 'react';
import '../App.css';

function ReminderModal({ show, onClose, reminder }) {
  const [editedReminder, setEditedReminder] = useState(reminder);

  if (!show) {
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedReminder((prevReminder) => ({
      ...prevReminder,
      [name]: value,
    }));
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit Reminder</h2>
        <form>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={reminder.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={reminder.description}
              onChange={handleChange}
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={reminder.date}
              onChange={handleChange}
            />
          </label>
          <label>
            Time:
            <input
              type="time"
              name="start_time"
              value={reminder.start_time}
              onChange={handleChange}
            />
          </label>
        </form>
        <button >Save</button>
        <button >Delete</button>
        <div className="picture-placeholder" >
          <p>Click to save to "Saved Reminders"</p>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ReminderModal;
