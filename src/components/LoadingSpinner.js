import React from 'react';
import '../App.css'; // Ensure this path is correct if you have styles for the spinner

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner; 