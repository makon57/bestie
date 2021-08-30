import '../Footer/Footer.css'
import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';

function Footer() {

  // const user = useSelector(state => state.session.user)
  const params = window.location.pathname;



  return (
    <>
    {params === '/login' || params === '/sign-up' ? null :
      <div className='main-footer'>
        <div className="footer-wrap">
          <div className="footer-left-container">
            <a href='https://github.com/makon57' target="_blank" rel="noreferrer noopener">
                <p>GITHUB</p>
            </a>
          </div>
          <NavLink to='/adopt' className='bestie-logo-link' exact={true} activeClassName='active'>
            <img className='bestie-logo-footer' src='https://i.imgur.com/ZX8v9Tq.png' alt='bestie-logo'></img>
          </NavLink>
          <a href='https://angel.co/u/manna-kong' target="_blank" rel="noreferrer noopener" className='angelist-link' >
            <p>ANGELIST</p>
          </a>
          <div className="footer-right-container">
            <a href='https://www.linkedin.com/in/manna-kong/profile' target="_blank" rel="noreferrer noopener">
              <p>LINKEDIN</p>
            </a>
          </div>
        </div>
      </div>
    }
    </>
  );
}

  export default Footer;
