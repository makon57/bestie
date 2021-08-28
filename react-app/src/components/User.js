import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { fetchAllListings, fetchDeleteListing, fetchEditListing } from '../store/listings';
import CreateListingForm from './Listings/CreateListingForm';
import '../components/Listings/Listing.css'
import EditListingForm from './Listings/EditListingForm';
import ImageGallery from 'react-image-gallery';
import '../components/Listings/Listing.css'
import Header from './Header';
import '../components/Header/Header.css'

function User() {
  const history = useHistory()
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch()
  const [user, setUser] = useState({});
  const userId = useSelector(state => state.session.user.id)
  const [deleteL, setDeleteL] = useState(false)
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
        {/* <img src="https://i.imgur.com/Hz6JbqL.jpg" alt='cat and dog'></img> */}
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
          {listings.map((listing)=> (
            <div className="container" key={listing.name}>
              <li key={listing.id} className="listing-item" onChange={() => setDeleteL(true)}>
                {listing.images && listing.images.length > 1 ? <ImageGallery items={listing.images} /> : <img src={listing.images.images[listing.images.images.length - 1]} alt='listing'></img> }
                <div className='petInfo'>
                  <p>{listing.name}</p>
                  <p>{listing.gender}</p>
                  <p>{listing.pet_type}</p>
                </div>

                <button onClick={() => deleteListing(listing.id)}><i className="far fa-trash-alt"></i></button>
                <button onClick={() => editListing(listing.id)}><i className="fas fa-edit"></i></button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
export default User;
