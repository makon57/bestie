import { useSelector } from 'react-redux';
import Footer from "../Footer";
import Header from "../Header";


const Listings = () => {

  const listings = Object.values(useSelector((state) => state.listings));

  return (
    <div>
      <Header />
      <div className='list-container'>
      <ul className="listing-list">
        {listings?.map((listing) => (
          <div key={listing.name} className="container">
            <li key={listing.id} className="listing-item">
              <img src={listing.images.images[listing.images.images.length - 1]} alt='listing'></img>
              <div className='petInfo'>
                <p>BESTIE ID: {listing.id}</p>
                <p>NAME: {listing.name}</p>
                <p>GENDER: {listing.gender}</p>
                <p>PET TYPE: {listing.pet_type}</p>
              </div>
              {/* <p>{listing.description}</p> */}
            </li>
          </div>
        ))}
      </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Listings;
