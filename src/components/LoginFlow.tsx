'use client'
import React, { useState } from 'react';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
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
    boxSizing: 'border-box' as const
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
            onMouseOver={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#555555'}
            onMouseOut={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#666666'}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

const SuccessPage = () => {
  // Replace this with your actual Stripe Payment Link URL
  const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_dRmcN52mJf4165DdKVaR200"; // You'll need to replace this
  
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
    textAlign: 'center' as const,
    width: '100%',
    maxWidth: '500px'
  };

  const titleStyle = {
    fontSize: '32px',
    color: '#333333',
    fontWeight: 'normal',
    margin: '0 0 30px 0',
    fontFamily: 'Arial, sans-serif'
  };

  const descriptionStyle = {
    fontSize: '16px',
    color: '#666666',
    margin: '0 0 40px 0',
    lineHeight: '1.5',
    fontFamily: 'Arial, sans-serif'
  };

  const stripeButtonStyle = {
    backgroundColor: '#6772E5',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '16px 32px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'background-color 0.2s',
    fontFamily: 'Arial, sans-serif'
  };

  const handleStripeClick = () => {
    // Open Stripe payment link in the same tab
    window.location.href = STRIPE_PAYMENT_LINK;
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>Your funnel here...</h1>
        <p style={descriptionStyle}>
          Get access to our exclusive deal flow data and marketing services for private equity firms.
        </p>
        <button
          style={stripeButtonStyle}
          onClick={handleStripeClick}
          onMouseOver={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#5469D4'}
          onMouseOut={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#6772E5'}
        >
          Pay $99 Now
        </button>
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