
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="main-nav">
      <div className="menu-wrap">
        <div className="menu-left-container">
          <div className='logo'>
            <NavLink to='/' exact={true} activeClassName='active'>
              <img className='bestie-logo2'src='https://i.imgur.com/sKEQCij.png' alt='logo-2'></img>
            </NavLink>
          </div>
          <div className='adopt'>
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
          </div>
          <div className='foster'>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
          </div>
        </div>
        <NavLink to='/' exact={true} activeClassName='active'>
          <img className='bestie-logo' src='https://i.imgur.com/ZX8v9Tq.png' alt='bestie-logo'></img>
        </NavLink>
        <div className='menu-right-container'>
          <div className='donate'>
            <NavLink to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink>
          </div>
          <div className='about'>
            <NavLink to='/users/:id' exact={true} activeClassName='active'>
              Prodile
            </NavLink>
          </div>
          <div className='auth'>
            <LogoutButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
