import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllListings } from "../../store/listings";
import Footer from "../Footer";
import Header from "../Header";


const Listings = () => {

  // const dispatch = useDispatch()
  // const [listings, setListings] = useState([])
  const listings = Object.values(useSelector((state) => state.listings.listings));
  console.log(listings)


  // useEffect(() => {
  //   (async() => {
  //     const data = await dispatch(fetchAllListings());
  //     setListings(data)
  //   })();
  // }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="container">
        <ul className="listing-list">
        {listings?.map((listing) => (
          <li key={listing.id} className="listing-item">
            <p>{listing.name}</p>
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
      <Footer />
    </div>
  )
}

export default Listings;
