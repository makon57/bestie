import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { fetchAllListings } from '../../store/listings';
import Footer from "../Footer";
import Header from "../Header";
import ListingModal from '../Listings/ListingModal';
// import { Modal } from '../../context/Modal';

const Listings = () => {

  const dispatch = useDispatch()
  const listings = Object.values(useSelector((state) => state.listings));
  const [showListModal, setShowListModal] = useState(false)

  useEffect(() => {
    dispatch(fetchAllListings());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className='list-container'>
      <ul className="listing-list">
        {listings?.map((listing) => (
          <div key={listing.id} className="container">
            <ListingModal listing={listing} showListModal={showListModal} setShowListModal={setShowListModal} />
          </div>
        ))}
      </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Listings;
