import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (email === 'pe@firm.com' && password === 'found91') {
      onLogin();
    } else {
      setError('Invalid credentials');
    }
  };

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: '20px'
  };

  const formContainerStyle = {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '4px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#666666',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif',
    cursor: 'pointer',
    marginTop: '8px'
  };

  const errorStyle = {
    color: '#d32f2f',
    backgroundColor: '#ffebee',
    padding: '12px',
    borderRadius: '4px',
    marginBottom: '16px',
    fontSize: '14px',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />
          
          {error && (
            <div style={errorStyle}>
              {error}
            </div>
          )}

          <button
            type="button"
            onClick={handleSubmit}
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = '#555555'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#666666'}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

const SuccessPage = () => {
  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: '20px'
  };

  const contentStyle = {
    backgroundColor: '#ffffff',
    padding: '60px 40px',
    borderRadius: '4px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    textAlign: 'center',
    width: '100%',
    maxWidth: '400px'
  };

  const textStyle = {
    fontSize: '32px',
    color: '#333333',
    fontWeight: 'normal',
    margin: 0,
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={textStyle}>You're in!</h1>
      </div>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <SuccessPage />
      )}
    </>
  );
};

export default App;