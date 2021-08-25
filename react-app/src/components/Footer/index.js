import '../Footer/Footer.css'
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Footer() {

  const user = useSelector(state => state.session.user)
  const params = window.location.pathname;

  return (
    <>
    {user || params === '/about' ?
      <div className='main-footer'>
        <div className="footer-wrap">
          <div className="footer-left-container">
            <a href='https://github.com/makon57' >
                <p>GITHUB</p>
            </a>
          </div>
          <NavLink to='/' className='bestie-logo-link' exact={true} activeClassName='active'>
            <img className='bestie-logo-footer' src='https://i.imgur.com/ZX8v9Tq.png' alt='bestie-logo'></img>
          </NavLink>
          <a href='https://angel.co/u/manna-kong' className='angelist-link' >
            <p>ANGELIST</p>
          </a>
          <div className="footer-right-container">
            <a href='https://www.linkedin.com/in/manna-kong/' >
              <p>LINKEDIN</p>
            </a>
          </div>
        </div>
        </div>
      : null}
    </>
  );
}

  export default Footer;
