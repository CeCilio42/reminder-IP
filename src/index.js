import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import LoadingSpinner from './components/LoadingSpinner';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingSpinner />}>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </Suspense>
  </React.StrictMode>
);
