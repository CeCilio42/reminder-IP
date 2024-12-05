import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../App.css';
import { handleChangeCompanyCode } from '../user-functions/change-company-code';

function Profile() {
  const { user } = useAuth0();
  const [newCompanyId, setNewCompanyId] = useState('');

  const handleChange = async () => {
    try {
      const userId = user.sub; 
      await handleChangeCompanyCode(userId, newCompanyId);
      console.log('Company ID changed successfully');
    } catch (error) {
      console.error('Error changing company ID:', error);
    }
  };

  return (
    <div className="container">
      <div className="profile-block">
        <h1>User Profile</h1>
        <div className="user-info">
          <p><strong>Username:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Company ID:</strong> <span id="company-id"></span></p>
        </div>
        <div className="company-id-form">
          <label htmlFor="new-company-id">Change Company ID:</label>
          <input
            type="text"
            id="new-company-id"
            name="new-company-id"
            placeholder="Enter new company ID"
            value={newCompanyId}
            onChange={(e) => setNewCompanyId(e.target.value)}
          />
          <button id="change-company-id-btn" onClick={handleChange}>Change</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
