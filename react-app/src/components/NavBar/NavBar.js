
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LoginForm from '../auth/LoginForm';
import LogoutButton from '../auth/LogoutButton';
import SignUpForm from '../auth/SignUpForm';
import './NavBar.css'


const NavBar = () => {

  const user = useSelector(state => state.session.user)
  const name = user?.name.split(' ')

  const [params, setParams] = useState(window.location.pathname)


  useEffect(() => (
    setParams(window.location.pathname)
  ),[setParams])


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
            <NavLink to='/adopt' exact={true} activeClassName='active'>
              ADOPT
            </NavLink>
          </div>
          {user?.foster === true ?
            <div className='foster'>
              <NavLink to='/create-listing' exact={true} activeClassName='active'>
                CREATE
              </NavLink>
            </div>
          :
            <div className='foster'>
              <NavLink to='/foster' exact={true} activeClassName='active'>
                FOSTER
              </NavLink>
            </div>
          }
        </div>
        <NavLink to='/adopt' exact={true} activeClassName='active' >
          <img className='bestie-logo' src='https://i.imgur.com/ZX8v9Tq.png' alt='bestie-logo'></img>
        </NavLink>
        <div className='menu-right-container'>
          <div className='donate'>
            <NavLink to='/sponsor' exact={true} activeClassName='active'>
              SPONSOR
            </NavLink>
          </div>
          {user ?
          <>
            <div className='about'>
              <NavLink to='/users/:id' exact={true} activeClassName='active'>
                {name[0].toUpperCase()}
              </NavLink>
            </div>
            <div className='auth'>
              <LogoutButton />
            </div>
          </>
          : params === '/sign-up' ?
            <>
            <div className='about'>
              <NavLink to='/about' exact={true} activeClassName='active'>
                ABOUT
              </NavLink>
            </div>
            <div className='auth'>
              <NavLink to='/login' onClick={() => setParams('/login')} exact={true} activeClassName='active'>
                LOGIN/SIGN UP
              </NavLink>
            </div>
            </>
          : <>
            <div className='about'>
              <NavLink to='/about' exact={true} activeClassName='active'>
                ABOUT
              </NavLink>
            </div>
            <div className='auth'>
              <NavLink to='/sign-up' onClick={() => setParams('/sign-up')} exact={true} activeClassName='active'>
                LOGIN/SIGN UP
              </NavLink>
            </div>
            </>
          }
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
