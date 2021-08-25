import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import '../auth/auth.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [foster, setFoster] = useState(false);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(name, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateFoster = (e) => {
    setFoster(!foster);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='signin-background'>
      <div className='signin-container'>
        <h1>BESTIE SIGN UP</h1>
        <form className='signin-form' onSubmit={onSignUp}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <hr></hr>
          <div className='name-container'>
            <label>NAME</label>
            <input
              type='text'
              name='name'
              onChange={updateName}
              value={name}
            ></input>
          </div>
          <hr></hr>
          <div className='email-container'>
            <label>EMAIL</label>
            <input
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <hr></hr>
          <div className='password-container'>
            <label>PASSWORD</label>
            <input
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <hr></hr>
          <div className='confirm-password-container'>
            <label>CONFIRM PASSWORD</label>
            <input
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <hr></hr>
          <div className='foster-container'>
            <label className='foster-label'>Are you signing up as foster?</label>
            <input
              className='foster-check'
              type='checkbox'
              name='foster'
              onChange={updateFoster}
              value={foster}
            ></input>
          </div>
          <hr></hr>
          <div className='signup-btn-container'>
            <button className='signup-btn' type='submit'>SIGN UP</button>
          </div>
        </form>
      </div>
    <img className='signin-bg-img' src="https://i.imgur.com/TKJ3cgt.jpg" alt='cat'></img>
    </div>
  );
};

export default SignUpForm;
