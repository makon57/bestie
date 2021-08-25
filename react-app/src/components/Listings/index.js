import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllListings } from "../../store/listings";
import Header from "../Header";


const Listings = () => {

  const listings = Object.values(useSelector((state) => state.listings.listings));
  console.log(listings)

  return (
    <div>
      <Header />
      <div className="container">
        <ul className="listing-list">
        {listings.map((listing) => (
          <li key={listing.id} className="listing-item">
            <p>{listing.id}</p>
            <p>{listing.gender}</p>
            <p>{listing.pet_type}</p>
            <p>{listing.description}</p>

            {/* <div className="image-container">
              <ListingModal />
            </div> */}
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default Listings;
