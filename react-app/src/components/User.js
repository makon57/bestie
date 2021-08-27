import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { fetchDeleteListing } from '../store/listings';
import CreateListingForm from './Listings/CreateListingForm';

function User() {
  const history = useHistory()
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch()
  const [user, setUser] = useState({});
  const userId = useSelector(state => state.session.user.id)
  const listings = Object.values(useSelector(state => state.listings))
  const [deleteL, setDeleteL] = useState(false)

  const deleteListing = async (listingId) => {
    const data = dispatch(fetchDeleteListing(listingId));
    if (data) {
      setErrors(data);
    }
    setDeleteL(false)
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
      <div className="container">
        <ul className="listing-list">
        { listings ? listings.map((listing)=> (
          <li key={listing.id} className="listing-item" onChange={() => setDeleteL(true)}>
            <div>{listing.name}</div>
            <div>{listing.gender}</div>
            <div>{listing.pet_type}</div>
            <div>{listing.description}</div>
            {/* <img src={listing.images} alt='listing'></img> */}
            <button onClick={() => deleteListing(listing.id)}><i className="far fa-trash-alt"></i></button>
          </li>
        )) : null }
        </ul>
      </div>
    </>
  );
}
export default User;
