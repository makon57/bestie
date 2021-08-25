import '../Footer/Footer.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Footer() {

  const user = useSelector(state => state.session.user)

  return (
    <div className='main-footer'>
      {user ?
        <div className="footer-wrap">
          <div className="footer-left-container">
            <div>
              <Link to='https://github.com/makon57' exact={true} activeClassName='active'>
                  <p>GITHUB</p>
              </Link>
            </div>
          </div>
          <div className='logo-angelist'>
            <Link to='https://angel.co/u/manna-kong' exact={true} activeClassName='active'>
              <img className='bestie-logo-footer' src='https://i.imgur.com/ZX8v9Tq.png' alt='bestie-logo'></img>
              <p className='footer-center-container'>ANGELIST</p>
            </Link>
          </div>
          <div className="footer-right-container">
            <div>
              <Link to='https://www.linkedin.com/in/manna-kong/' exact={true} activeClassName='active'>
                  <p>LINKEDIN</p>
              </Link>
            </div>
          </div>
        </div>
      : null}

    </div>
  );
}

  export default Footer;
