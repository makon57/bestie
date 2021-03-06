import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import '../auth/auth.css'
import Header from '../Header';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();


  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to={`/users/:id`} />;
  }


  return (
    <div className='login-background'>
    <div className='login-container'>
    <h1>BESTIE LOGIN</h1>
      <form className='login-form' onSubmit={onLogin}>
        <hr></hr>
        {errors.email ? <h4>{errors.email}</h4> : null}
        <div className='login-email'>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            type='text'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <hr></hr>
        {errors.password ? <h4>{errors.password}</h4> : null}
        <div className='login-password'>
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            type='password'
            value={password}
            onChange={updatePassword}
          />
        </div>
        <hr></hr>
        <div className='demo-log-container'>
          <div className='login-btn-container'>
            <button className='login-btn' type='submit'>LOGIN</button>
          </div>
          <div className='demo-btn-container' onClick={() => dispatch(login('demo@aa.io', 'password'))}>
            <button className='demo-btn' type='button'>DEMO</button>
          </div>
          <div className='foster-btn-container' onClick={() => dispatch(login('foster@aa.io', 'password'))}>
            <button className='foster-btn' type='button'>FOSTER DEMO</button>
          </div>
        </div>
        <div className='already-user'>
          <Link to='/sign-up'><label>Not a user? Sign Up!</label></Link>
        </div>
      </form>
    </div>
    <Header />
    </div>
  );
};

export default LoginForm;
