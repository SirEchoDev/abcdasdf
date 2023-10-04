// App.js
import React, { useState } from 'react';
import './App.css';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Navbar from './components/NavBar';
import Orders from './components/Orders'; // Import the Orders component

function App() {
  const [isSignup, setIsSignup] = useState(true); // Initialize as true to show signup form
  const [loggedIn, setLoggedIn] = useState(false); // Track login state

  // Function to handle login
  const handleLogin = () => {
    // Perform your authentication logic here.
    // If authentication is successful, set loggedIn to true.
    setLoggedIn(true);
  };

  return (
    <div className="App">
      <Navbar />
      {/* Render the Orders component if logged in, otherwise render the login or signup form */}
      {loggedIn ? (
        <Orders />
      ) : (
        <div>
          {isSignup ? <SignupForm /> : <LoginForm onLogin={handleLogin} />}
          <button onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? 'Switch to Login' : 'Switch to Signup'}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
