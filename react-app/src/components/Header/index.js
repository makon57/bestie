import { useEffect, useState } from 'react';
import '../Header/Header.css'
import '../Splash/Splash.css'

const Header = () => {

  const [params, setParams] = useState(window.location.pathname)


  useEffect(() => (
    setParams(window.location.pathname)
  ),[setParams])

  return (
    <div>
      {params === '/' ?
        <div className='header-container'>
          <span className='user-header-name'>
            <div className="span-header">
              <h1>WELCOME TO BESTIE!</h1>
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
            <h1>Filter your bestie search!</h1>
            <input type="text" placeholder='Search . . . '></input>
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
