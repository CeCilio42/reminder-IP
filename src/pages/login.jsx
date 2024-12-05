import React from 'react';
import '../App.css';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div 
      className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop")',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Main container */}
      <div className="relative h-full w-full flex items-center justify-center">
        {/* Outer container with gradient background */}
        <div className="bg-gradient-to-br from-[#161622] to-[#1f1f1f] p-1 rounded-2xl shadow-2xl">
          {/* Inner container with border */}
          <div className="bg-[#161622] border border-[rgb(88,88,88)] rounded-2xl p-10 backdrop-blur-lg w-[400px]">
            <div className="text-center space-y-8">
              {/* Title and Description */}
              <div className="space-y-3">
                <h1 className="text-4xl font-bold text-white">
                  Welcome to <span className="text-[rgb(0,153,255)]">Reminder</span>
                </h1>
                <p className="text-gray-400 text-lg">
                  Your personal task management solution
                </p>
              </div>

              {/* Login Button */}
              <button
                onClick={loginWithRedirect}
                className="w-full bg-[rgb(0,153,255)] hover:bg-[rgb(0,75,124)] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 text-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                <span>Sign In to Get Started</span>
              </button>

              {/* Terms */}
              <p className="text-sm text-gray-400">
                By signing in, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
