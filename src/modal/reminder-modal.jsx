import React, { useState } from 'react';
import '../App.css';
import { handleSaveReminder } from '../reminder-functions/save-reminder';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReminderModal = ({ reminder, onClose, onDelete, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedReminder, setEditedReminder] = useState({
    title: reminder.title,
    description: reminder.description,
    date: reminder.date,
    time: reminder.time,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedReminder((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onSave(editedReminder);
    toast.success('Reminder updated successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setIsEditing(false);
  };

  const handleSaveReminderClick = async (id) => {
    try {
      await handleSaveReminder(id);
      toast.success('Reminder archived successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      toast.error('Failed to archive reminder. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.error('Error archiving reminder:', error);
    }
  };

  const handleDeleteClick = () => {
    onDelete(reminder.id);
    toast.success('Reminder deleted successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content flex flex-col gap-5"
        onClick={(e) => e.stopPropagation()} // Prevent click propagation to overlay
      >
        <h2 className="modal-header">
          {isEditing ? (
            <input
              type="text"
              name="title"
              value={editedReminder.title}
              onChange={handleInputChange}
              className="input input-bordered w-full"
            />
          ) : (
            reminder.title
          )}
        </h2>
        <div>
          {isEditing ? (
            <textarea
              name="description"
              value={editedReminder.description}
              onChange={handleInputChange}
              className="textarea textarea-bordered w-full"
              rows="3"
            />
          ) : (
            <p>{reminder.description}</p>
          )}
        </div>
        <div>
          {isEditing ? (
            <div className="flex gap-3">
              <input
                type="date"
                name="date"
                value={editedReminder.date}
                onChange={handleInputChange}
                className="input input-bordered"
              />
              <input
                type="time"
                name="time"
                value={editedReminder.time}
                onChange={handleInputChange}
                className="input input-bordered"
              />
            </div>
          ) : (
            <p>
              {reminder.date} at {reminder.time}
            </p>
          )}
        </div>
        <div className="modal-footer flex gap-3">
          {isEditing ? (
            <>
              <button className="btn btn-success btn-block" onClick={handleSave}>
                Save
              </button>
              <button
                className="btn btn-secondary btn-block"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                className="archive-button"
                onClick={() => handleSaveReminderClick(reminder.id)}
              >
                Archive
              </button>
              <button
                className="btn btn-error btn-block"
                onClick={handleDeleteClick}
              >
                Delete
              </button>
              <button
                className="btn btn-secondary btn-block"
                onClick={onClose}
              >
                Close
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReminderModal;
