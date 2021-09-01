import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../components/Listings/Listing.css'
import '../components/Header/Header.css'
import ListingModal from './Listings/ListingModal';
import { useDispatch } from 'react-redux';
import ApplicationDetails from './Applications/ApplicationDetails';
import { fetchAllApplications } from '../store/applications';



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

  // useEffect(() => {
  //   if (!userId) {
  //     return;
  //   }
  //   (async () => {
  //     dispatch(fetchAllApplications())
  //   })();
  // }, [userId]);

  useEffect(() => (
    dispatch(fetchAllApplications())
  ), [dispatch])

  if (!user) {
    return null;
  }

  return (
    <>
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
      <div className='applications-container'>
        <ul className='applications-list'>
          {applications?.map((application) => (
            <div key={application.id}>
              <ApplicationDetails application={application} showApplicationModal={showApplicationModal} setShowApplicationModal={setShowApplicationModal} />
            </div>
          ))}
        </ul>
      </div>
      <div className='list-container'>
        <ul className="listing-list">
          {listings?.map((listing)=> (
            <div key={listing.id} className="container">
              <ListingModal listing={listing} showListModal={showListModal} setShowListModal={setShowListModal} />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
export default User;
