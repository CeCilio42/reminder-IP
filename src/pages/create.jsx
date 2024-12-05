import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../index.css';
import { handleCreateReminder } from '../reminder-functions/create-reminder';

function Create() {
  const { user } = useAuth0();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const reminderData = {
      title,
      description,
      type: 1, 
      picture_Url: 'test',
      date,
      start_time: time, // Ensure this matches the expected format
      user: {
        id: user.sub,
      },
    };
    console.log('Reminder Data:', reminderData); // Log the data being sent
    try {
      const result = await handleCreateReminder(reminderData);
      console.log('Reminder created:', result);
      // Optionally, reset the form or navigate to another page
    } catch (error) {
      console.error('Error creating reminder:', error);
    }
  };

  return (
    <div className="container">
      <div className="form-block">
        <form id="create-reminder-form" onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="textarea"
          ></textarea>

          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />

          <button type="submit">Create Reminder</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
