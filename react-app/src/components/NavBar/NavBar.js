
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="main-nav">
      <div className="menu-wrap">
        <div className="menu-left-container">
          <ul>
            <li>
              <NavLink to='/' exact={true} activeClassName='active'>
                <img className='bestie-logo2'src='https://i.imgur.com/sKEQCij.png' alt='logo-2'></img>
              </NavLink>
            </li>
            <li>
              <NavLink to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to='/sign-up' exact={true} activeClassName='active'>
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
        <h1 id='logo'>
          <NavLink to='/' exact={true} activeClassName='active'>
            <img className='bestie-logo' src='https://i.imgur.com/ZX8v9Tq.png' alt='bestie-logo'></img>
          </NavLink>
        </h1>
        <div>
          <ul>
            <li>
              <NavLink to='/users' exact={true} activeClassName='active'>
                Users
              </NavLink>
            </li>
            <li>
              <p>Profile</p>
            </li>
            <li>
              <LogoutButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
