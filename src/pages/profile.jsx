import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the toast styles
import '../output.css';
import { handleChangeCompanyCode } from '../user-functions/change-company-code';

function Profile() {
  const { user } = useAuth0();
  const [newCompanyId, setNewCompanyId] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = async () => {
    try {
      const userId = user.sub; 
      await handleChangeCompanyCode(userId, newCompanyId, password);

      // Success toast
      toast.success('Company code changed successfully!', {
        position: 'top-center',
        autoClose: 3000,
      });
    } catch (error) {
      console.error('Error changing company ID:', error);

      // Error toast
      toast.error('Failed to change company code. Please try again.', {
        position: 'top-center',
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-10 mt-24">
      {/* Toast container */}
      <ToastContainer />

      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Username</h1>
        <p className="text-sm">Add a company code</p>
      </div>

      <div className="form-group">
        <div className="form-field">
          <label className="form-label">Company Code</label>
          <input
            className="input max-w-full"
            type="text"
            id="new-company-id"
            name="new-company-id"
            placeholder="Enter company code"
            value={newCompanyId}
            onChange={(e) => setNewCompanyId(e.target.value)}
          />
        </div>
        
        <div className="form-field">
          <label className="form-label">Password</label>
          <div className="form-l">
            <input
              className="input max-w-full"
              type="password"
              id="password"
              name="password"
              placeholder="Enter company passcode"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="form-field">
          <div className="form-control justify-between">
            <label className="form-label">
              <a className="link link-underline-hover link-primary text-sm">Forgot your password?</a>
            </label>
          </div>
        </div>

        <div className="form-field pt-5">
          <div className="form-control justify-between">
            <button
              className="btn btn-primary w-full"
              id="change-company-id-btn"
              onClick={handleChange}
            >
              Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
