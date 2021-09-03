import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import '../Header/Header.css'
import '../Splash/Splash.css'
import User from '../User';



const Header = () => {

  const [params, setParams] = useState(window.location.pathname)
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user);
  const history = useHistory()

  useEffect(() => (
    setParams(window.location.pathname)
  ),[setParams])

  const onDemoLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login('demo@aa.io', 'password'));
    history.push(`/users/${data.id}`)
  };

  const onFosterLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login('foster@aa.io', 'password'));
    history.push(`/users/${data.id}`)
  };

  return (
    <div>
      {params === '/' ?
        <div className='header-container'>
          <span className='user-header-name'>
            <div className="span-header">
              <h1>WELCOME TO BESTIE!</h1>
              { user ? null :
              <div className='vol-don-header'>
                <button className='demo-btn' onClick={onDemoLogin} type='button'>DEMO</button>
                <button className='foster-btn' onClick={onFosterLogin} type='button'>FOSTER DEMO</button>
              </div>
              }
            </div>
          </span>
        </div>
      : params === '/foster' ?
        <div className='header-container'>
          <span className='user-header-name'>
            <h1>HOW DO I BECOME A FOSTER?</h1>
          </span>
        </div>
      : params === '/sponsor' ?
        <div className='header-container'>
          <span className='user-header-name'>
            <h1>HOW DO I BECOME A SPONSOR?</h1>
          </span>
        </div>
      : params === '/about' ?
        <div className='header-container'>
          <span className='user-header-name'>
            <h1>OUR MISSION AT BESTIE</h1>
          </span>
        </div>
      : params === '/adopt' ?
        <div className='user-header-container'>
          <span className='user-header-name'>
            <h1>BESTIE LISTING</h1>
          </span>
        </div>
      : params === '/login' ?
        <div className='login-header-container'>
          <img src="https://i.imgur.com/VunlvLt.jpg" alt='cat'></img>
        </div>
      : params === '/sign-up' ?
        <div className='signup-header-container'>
          <img src="https://i.imgur.com/TKJ3cgt.jpg" alt='dog'></img>
        </div>
      :
      <div className='forms-header-img-container'>
        <span className='user-header-name'>
          <h1>↓FILL OUT YOUR FORM↓</h1>
        </span>
      </div>
      }
    </div>
  )
};

export default Header;
