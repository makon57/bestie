import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../components/Listings/Listing.css'
import '../components/Header/Header.css'
import ListApp from './Listings/ListingModal/ListApp';
import { useDispatch } from 'react-redux';
import ApplicationDetails from './Applications/ApplicationDetails';
import { fetchAllApplications } from '../store/applications';
import Footer from './Footer';



function User() {

  const dispatch = useDispatch()
  const [user, setUser] = useState({});
  const userId = useSelector(state => state.session.user.id)
  const things = Object.values(useSelector(state => state.listings))
  const stuffs = Object.values(useSelector(state => state.applications))

  const [showListModal, setShowListModal] = useState(false)
  const [showApplicationModal, setShowApplicationModal] = useState(false)
  const listings = things.filter(thing => thing.user_id === userId)
  const applications = stuffs.filter(stuff => stuff.user_id === userId)



  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  useEffect(() => (
    dispatch(fetchAllApplications())
  ), [dispatch])

  if (!user) {
    return null;
  }

  return (
    <div className='user-entire-container'>
      <div className='user-header-container'>
        <span className='user-header-name'>
          <p>Hi {user.name ? user.name.split(' ')[0] : 'Bestie'}!</p>
          <div className='user-information'>
            <ul>
              <li className='user-name'>
                <strong>{user.name}</strong>
              </li>
              <li className='user-email'>
                <strong>Email:</strong> {user.email}
              </li>
              <li className='user-foster'>
                <strong>Foster?</strong> {user.foster === true ? 'YES' : 'NO'}
              </li >
              {user.foster === true ?
                <li className='user-create'>
                  <button><Link to='/create-listing' >Create A Listing</Link></button>
                </li>
              : <li className='user-create'>
                  <button><Link to='/foster'>Become a foster</Link></button>
                </li>}
            </ul>
          </div>
        </span>
      </div>
      <div className='user-body'>
      {applications.length > 0 ? <h1>My Applications</h1> : null}
        <div className='applications-container'>
          <ul className='applications-list'>
            {applications?.map((application, i) => (
              <div key={i}>
                <ApplicationDetails application={application} showApplicationModal={showApplicationModal} setShowApplicationModal={setShowApplicationModal} />
              </div>
            ))}
          </ul>
        </div>
        {listings.length > 0 ? <h1>My Listings</h1> : null}
        <div className='list-container'>
          <ul className="listing-list">
            {listings?.map((listing, i)=> (
              <React.Fragment key={i} >
                <div key={listing.id} className="container">
                  <ListApp listing={listing} showListModal={showListModal} setShowListModal={setShowListModal} stuffs={stuffs} showApplicationModal={showApplicationModal} setShowApplicationModal={setShowApplicationModal}/>
                </div>
                <div className='application-list-container'>
                    <ul className='applications-one-list'>
                        {(stuffs?.filter(app => (app.listing_id === listing.id)))?.map((application) => (
                        <div key={application.id}>
                            <ApplicationDetails application={application} showApplicationModal={showApplicationModal} setShowApplicationModal={setShowApplicationModal} />
                        </div>
                        ))}
                    </ul>
                </div>
            </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default User;
