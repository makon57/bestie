import { useEffect, useState } from 'react';
import '../Header/Header.css'


const Header = () => {

  const [params, setParams] = useState(window.location.pathname)


  useEffect(() => (
    setParams(window.location.pathname)
  ),[setParams])

  return (
    <div>
      {params === '/' || params === '/about' ?
        <div className='header-container'>
          <img src="https://i.imgur.com/KmxttNE.jpg" alt='cat and dog'></img>
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
      : <div className='signup-header-container'>
          <img src="https://i.imgur.com/TKJ3cgt.jpg" alt='dog'></img>
        </div>
      }
    </div>
  )
};

export default Header;
