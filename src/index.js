import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react'; 

const domain = "dev-2dqix5advrmabtbz.us.auth0.com"; 
const clientId = "AgEugtHWvj6teQjCRUAkvOs9eK67nPjZ"; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
        <App />
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
