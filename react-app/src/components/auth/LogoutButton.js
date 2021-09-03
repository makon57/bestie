import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../store/session';
import '../NavBar/NavBar.css'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());

  };

  return (
    <div className='auth'>
      <Link to='/' className="logout-button" onClick={onLogout} exact={true} activeClassName='active'>LOGOUT</Link>
    </div>
  )
};

export default LogoutButton;
