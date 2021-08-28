import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { fetchDeleteListing } from '../store/listings';
import ImageGallery from 'react-image-gallery';
import '../components/Listings/Listing.css'
import '../components/Header/Header.css'

function User() {
  const history = useHistory()
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch()
  const [user, setUser] = useState({});
  const userId = useSelector(state => state.session.user.id)
  const [setDeleteL] = useState(false)
  const things = Object.values(useSelector(state => state.listings))
  const listings = things.filter(things => things.user_id === userId)

  const deleteListing = async (listingId) => {
    const data = dispatch(fetchDeleteListing(listingId));
    if (data) {
      setErrors(data);
    }
    setDeleteL(false)
  };

  const editListing = (listingId) => {
    history.push(`/listings/${listingId}/edit`)
  };


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

  if (!user) {
    return null;
  }

  return (
    <>
      <div className='user-header-container'>
        <span className='user-header-name'>
          <p>Hi {user.name ? user.name.split(' ')[0] : 'Bestie'}!</p>
        </span>
      </div>
      <div>
        <ul>
          <li>
            <strong>Name</strong> {user.name}
          </li>
          <li>
            <strong>Email</strong> {user.email}
          </li>
          <li>
            <strong>Foster?</strong> {user.foster === true ? 'Yes' : 'No'}
          </li>
          {user.foster === true ?
            <li>
              <button><Link to='/create-listing' >Create A Listing</Link></button>
            </li>
          : null }
        </ul>
      </div>
      <div className='list-container'>
        <ul className="listing-list">
          {listings?.map((listing)=> (
            <div className="container" key={listing.name}>
              <li key={listing.id} className="listing-item" onChange={() => setDeleteL(true)}>
                {listing.images && listing.images.length > 1 ? <ImageGallery items={listing.images} /> : <img src={listing.images.images[listing.images.images.length - 1]} alt='listing'></img> }
                <div className='petInfo'>
                  <p>{listing.name}</p>
                  <p>{listing.gender}</p>
                  <p>{listing.pet_type}</p>
                </div>

                <button onClick={() => deleteListing(listing.id)}><img src='https://i.imgur.com/XEqfNqp.png' alt='trash'></img></button>
                <button onClick={() => editListing(listing.id)}><img src='https://i.imgur.com/6kTrPDn.png' alt='trash'></img></button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
export default User;
