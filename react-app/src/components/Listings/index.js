import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { fetchAllListings } from '../../store/listings';
import Footer from "../Footer";
import '../Header/Header.css'
import ListingModal from '../Listings/ListingModal';
// import { Modal } from '../../context/Modal';
import "../Listings/Listing.css"

const Listings = ({ props }) => {

  // const dispatch = useDispatch();
  // let searchListings = null;
  // if (props) {
  //   ({ searchListings } = props)
  // }

  const list = Object.values(useSelector((state) => state.listings))
  const [listings, setListings] = useState(null);
  const [showListModal, setShowListModal] = useState(false)
  const [search, setSearch] = useState("")


  useEffect(() => {
    // dispatch(fetchAllListings())
    if (search === "") {
      setListings(list)
    }
  }, [search]);

  useEffect(() => {
    document.querySelector("body").scrollTo(0,0)
  }, [])

  // if (searchListings) {
  //   setListings(searchListings)
  // }

  const updateSearch = async (e) => {
    setSearch(e.target.value);
    console.log(search)
    const res = await fetch('/api/listings/search', {
      method: "POST",
      headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({
            search
        })
    });
    const data = await res.json()
    const values = Object.values(data)
    setListings(values)
  };

  return (
    <div>
      <div className='user-header-container'>
        <span className='user-header-name'>
          <h1>BESTIE LISTINGS</h1>
          <h2>Find your bestie...</h2>
          <input onChange={updateSearch} placeholder="Search..."></input>
        </span>
      </div>
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
