import React from 'react';
import './LoginPoppus.css';
import { assets } from '../../assets/assets';

function LoginPoppus({ setShowLogin }) {
  const [currState, setCurrState] = React.useState('Login');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');

  const handleSignUp = () => {
    // Get existing users from local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user already exists
    const userExists = existingUsers.some(user => user.email === email);

    if (userExists) {
      setError('User already exists!');
      return;
    }

    // Create new user object
    const newUser = {
      name,
      email,
      password,
    };

    // Save new user to local storage
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Clear the input fields and show success message
    setEmail('');
    setPassword('');
    setName('');
    setError('');
    setSuccessMessage('Account created successfully! You can now log in.');
    setCurrState('Login');
  };

  const handleLogin = () => {
    // Get existing users from local storage
    setSuccessMessage('')
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user exists and password matches
    const user = existingUsers.find(user => user.email === email);

    if (!user) {
      setError('No account found with this email.');
      return;
    }

    if (user.password !== password) {
      setError('Incorrect password.');
      return;
    }
    // setShowLogin(false)
    // If login is successful
    setError('');
    setEmail('');
    setPassword('');
    setName('');
    setSuccessMessage('Login successful! Welcome back.');
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (currState === 'Sign Up') {
      handleSignUp();
    } else {
      handleLogin();
    }
  };

  return (
    <div className='login-popup'>
      <form className='login-popup-container' onSubmit={handleSubmit}>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={() => { setShowLogin(false); }} src={assets.cross_icon} alt='' />
        </div>
        <div className='login-popup-input'>
          {currState === 'Login' ? <></> : (
            <input
              type='text'
              placeholder='Your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type='email'
            placeholder='Your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{currState === 'Sign Up' ? "Create account" : "Login"}</button>

        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <div className='login-popup-condition'>
          <label>
            <input type='checkbox' required />
            <span>By continuing, I agree to the terms of use & privacy policy.</span>
          </label>
        </div>

        <div>
          {currState === 'Login'
            ? <p>Create a new account? <span onClick={() => { setCurrState('Sign Up'); setError(''); setSuccessMessage(''); }}>Click here</span></p>
            : <p>Already have an account? <span onClick={() => { setCurrState('Login'); setError(''); setSuccessMessage(''); }}>Login here</span></p>}
        </div>
      </form>
    </div>
  );
}

export default LoginPoppus;