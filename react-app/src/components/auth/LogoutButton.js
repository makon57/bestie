import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../store/session';
import '../NavBar/NavBar.css'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (
    <div className='auth'>
      <NavLink to='/login' onClick={onLogout} exact={true} activeClassName='active'>LOGOUT</NavLink>
    </div>
  )
};

export default LogoutButton;
