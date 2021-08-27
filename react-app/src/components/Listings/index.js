import { useSelector } from 'react-redux';
import Footer from "../Footer";
import Header from "../Header";


const Listings = () => {

  const listings = Object.values(useSelector((state) => state.listings));

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
            <img src={listing.images.images[0]} alt='listing'></img>

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
