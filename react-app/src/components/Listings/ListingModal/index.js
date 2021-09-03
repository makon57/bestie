
import { useState } from 'react';
import { Modal } from '../../../context/Modal';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DeleteListingModal from '../DeleteListingModal';
import { fetchDeleteListing } from '../../../store/listings';
import '../ListingModal/ListingModal.css'

const ListingModal = ({ listing, showListModal, setShowListModal}) =>{

    const history = useHistory()
    const dispatch = useDispatch()
    const [modalData, setModalData] = useState(null)
    const userId = useSelector(state => state.session.user?.id)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showListDelete, setShowListDelete] = useState(false)

    const editListing = (listingId) => {
        history.push(`/listings/${listingId}/edit`)
    };

    const deleteListing = (listingId) => {
        dispatch(fetchDeleteListing(listingId));
        setShowListDelete(false)
    };


    return (
        <>
            <li key={listing.id} className="listing-item">
                <div>
                    <div className="hover-petInfo" onClick={() => {setShowListModal(true); setModalData(listing)}}>
                        {/* {listing.images.images[0] ? <img src={listing.images.images[0]} alt='listing'></img> : <img src='https://i.imgur.com/BPOYKBx.png' alt =''></img> } */}
                        <img src={listing.image} alt='listing'></img>
                        <div className='petInfo-list'>
                            <div className="petInfo-name">
                                <label >NAME</label>
                                <p>{listing.name}</p>
                            </div>
                            <div className="petInfo-age">
                                <label >AGE</label>
                                <p>{listing.age}</p>
                            </div>
                            <div className="petIndo-gender">
                                <label >GENDER</label>
                                <p>{listing.gender}</p>
                            </div>
                            <div className="petInfo-pet-type">
                                <label >PET TYPE</label>
                                <p>{listing.pet_type}</p>
                            </div>
                        </div>
                    </div>
                    { listing.user_id === userId ?
                    <>
                        <button className='edit-btns' onClick={() => editListing(listing.id)}><img src='https://i.imgur.com/6kTrPDn.png' alt='trash'></img></button>
                        <button className='delete-btns' onClick={() => setShowListDelete(true)}><img src='https://i.imgur.com/XEqfNqp.png' alt='trash'></img></button>
                    </>
                    :
                    <div className='adopt-btn-container'>
                        <button className='adopt-btn'>
                            <Link to={`/applications/${listing.id}/create`}>Adopt {listing.name}</Link>
                        </button>
                    </div>
                    }
                    {showListDelete &&  (
                        <Modal>
                            <div className="delete-modal-confirmation">
                                <h1 className="delete-modal-question">Are you sure you want to delete this listing?</h1>
                                <button className="delete-modal-yes" onClick={() => deleteListing(listing.id)}>Yes</button>
                                <button className="delete-modal-no" onClick={() => setShowListDelete(false)}>No</button>
                            </div>
                        </Modal>
                    )}
                </div>
            </li>
            {showListModal && modalData && (
                <Modal onClose={() => {setShowListModal(false); setModalData(null)}}>
                    {/* {modalData.images.images[0] ? <img src={modalData.images.images[0]} alt='modalData'></img> : <img src='https://i.imgur.com/BPOYKBx.png' alt =''></img> } */}
                    <img src={modalData.image} alt='modalData'></img>
                    <div className='petInfo'>
                        <h1>{listing.name}</h1>
                        <p>PET TYPE: {listing.pet_type}</p>
                        <p>GENDER: {listing.gender}</p>
                        <p>AGE: {listing.age}</p>
                        <br></br>
                        <p>BIO:</p>
                        <p>{listing.description}</p>
                        { modalData.user_id === userId ?
                        <div className='edit-delete-btns' >
                            <button className='delete-btns' onClick={() => setShowDeleteModal(true)}><img src='https://i.imgur.com/XEqfNqp.png' alt='trash'></img></button>
                            <button className='edit-btns' onClick={() => editListing(listing.id)}><img src='https://i.imgur.com/6kTrPDn.png' alt='trash'></img></button>
                        </div>
                        :
                        <div className='adopt-btn-modal'>
                            <button className='adopt-btn'>
                                <Link to={`/applications/${listing.id}/create`}>Adopt {listing.name}</Link>
                            </button>
                        </div>
                        }

                    </div>
                    {showDeleteModal &&  (
                        <DeleteListingModal listing={listing} setShowDeleteModal={setShowDeleteModal} setShowListModal={setShowListModal}/>
                    )}
                </Modal>
            )}
        </>
    )
}


export default ListingModal
