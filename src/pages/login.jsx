import React from 'react';
import '../App.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginPagePicture from '../images/Screenshot 2024-11-01 133455.png'

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login-container">
      <div className="login-block">
        <img src={LoginPagePicture} alt='Logo'/>
        <button id="login-btn" onClick={loginWithRedirect}>Login</button>
      </div>
    </div>
  );
}

export default Login;
