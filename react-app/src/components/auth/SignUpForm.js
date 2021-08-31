import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import '../auth/auth.css'
import Header from '../Header';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [foster, setFoster] = useState(false);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [message, setMessage] = useState('false')

  const handleClick = async(e) => {
    e.preventDefault();
    if(message) {
      setMessage(!message)
    }
  }


  const onSignUp = async (e) => {
    e.preventDefault();
    console.log(foster)
    if (password === repeatPassword) {
      const data = await dispatch(signUp(name, email, password, foster));
      if (data) {
        setErrors(data)
      }
    } else if (password !== repeatPassword) {
      setErrors({passMatch: 'Passwords do not match.'})
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
    setFoster(true);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='signin-background'>
      <div className='signin-container'>
        <h1>BESTIE SIGN UP</h1>
        <form className='signin-form' onSubmit={onSignUp}>
          <hr></hr>
          {errors.name ? <h4>{errors.name}</h4> : null }
          <div className='name-container'>
            <label>NAME</label>
            <input
              type='text'
              name='name'
              onChange={updateName}
              value={name}
              required={true}
            ></input>
          </div>
          <hr></hr>
          {errors.email ? <h4>{errors.email}</h4> : null}
          <div className='email-container'>
            <label>EMAIL</label>
            <input
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
              required={true}
            ></input>
          </div>
          <hr></hr>
          {errors.password ? <h4>{errors.password}</h4> : null}
          <div className='password-container'>
            <label>PASSWORD</label>
            <input
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
              required={true}
            ></input>
          </div>
          <hr></hr>
          {errors.passMatch ? <h4>{errors.passMatch}</h4> : null}
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
          {/* <hr></hr>
          <div className='foster-container'>
            <label className='foster-label'>Are you signing up as foster?</label>
            <input
              className='foster-check'
              type='checkbox'
              name='foster'
              onClick={updateFoster}
              value={foster}
            ></input>
          </div> */}
          <hr></hr>
          <div className='signup-btn-container'>
            <button className='signup-btn' type='submit'>SIGN UP</button>
          </div>
          <div className='already-user' onClick={handleClick}>
            <Link to='/login'><label>Already a user? Login!</label></Link>
          </div>
        </form>
      </div>
      <Header />
    </div>
  );
};

export default SignUpForm;
