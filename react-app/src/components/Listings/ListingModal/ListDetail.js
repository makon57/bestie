
// import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import DeleteListingModal from '../DeleteListingModal';
// import { Modal } from '../../../context/Modal';



// const ListDetail = ({ listing, setShowListModal }) => {

//     const history = useHistory()
//     const userId = useSelector(state => state.session.user.id)
//     const [showDeleteModal, setShowDeleteModal] = useState(false)

//     const editListing = (listingId) => {
//         history.push(`/listings/${listingId}/edit`)
//     };

//     return (
//         <>
//             {listing.images.images[listing.images.images.length - 1] ? <img src={listing.images.images[listing.images.images.length - 1]} alt='listing'></img> : <img src='https://i.imgur.com/BPOYKBx.png' alt =''></img> }
//             <div className='petInfo'>
//                 <h1>{listing.name}</h1>
//                 <p>BESTIE ID: {listing.id}</p>
//                 <p>PET TYPE: {listing.pet_type}</p>
//                 <p>GENDER: {listing.gender}</p>
//                 <p>AGE: {listing.age}</p>
//                 <p>BIO: {listing.description}</p>
//             </div>

//             { listing.user_id === userId ?
//             <>
//                 <button onClick={() => setShowDeleteModal(true)}><img src='https://i.imgur.com/XEqfNqp.png' alt='trash'></img></button>
//                 <button onClick={() => editListing(listing.id)}><img src='https://i.imgur.com/6kTrPDn.png' alt='trash'></img></button>
//             </>
//             : null }
//             {showDeleteModal &&  (
//                 <Modal>
//                     <DeleteListingModal listing={listing} setShowDeleteModal={setShowDeleteModal} setShowListModal={setShowListModal}/>
//                 </Modal>
//             )}
//         </>
//     )
// }

// export default ListDetail
