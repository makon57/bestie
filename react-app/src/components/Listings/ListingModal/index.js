
import { useState } from 'react';
import { Modal } from '../../../context/Modal';
import ListDetail from './ListDetail';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DeleteListingModal from '../DeleteListingModal';




const ListingModal = ({ listing, showListModal, setShowListModal}) =>{

    const history = useHistory()

    const [modalData, setModalData] = useState(null)
    const userId = useSelector(state => state.session.user.id)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const editListing = (listingId) => {
        history.push(`/listings/${listingId}/edit`)
    };

    return (
        <>
            <li key={listing.id} className="listing-item" onClick={() => {setShowListModal(true); setModalData(listing)}}>
            <div>
                {listing.images.images[listing.images.images.length - 1] ? <img src={listing.images.images[listing.images.images.length - 1]} alt='listing'></img> : <img src='https://i.imgur.com/BPOYKBx.png' alt =''></img> }
                <div className='petInfo'>
                    <p>BESTIE ID: {listing.id}</p>
                    <p>NAME: {listing.name}</p>
                    <p>GENDER: {listing.gender}</p>
                    <p>PET TYPE: {listing.pet_type}</p>
                </div>
            </div>
            </li>
            {showListModal && modalData && (
            <Modal onClose={() => {setShowListModal(false); setModalData(null)}}>
                {modalData.images.images[modalData.images.images.length - 1] ? <img src={modalData.images.images[modalData.images.images.length - 1]} alt='modalData'></img> : <img src='https://i.imgur.com/BPOYKBx.png' alt =''></img> }
                <div className='petInfo'>
                    <p>BESTIE ID: {modalData.id}</p>
                    <p>NAME: {modalData.name}</p>
                    <p>GENDER: {modalData.gender}</p>
                    <p>PET TYPE: {modalData.pet_type}</p>
                </div>

                { modalData.user_id === userId ?
                <>
                    <button onClick={() => setShowDeleteModal(true)}><img src='https://i.imgur.com/XEqfNqp.png' alt='trash'></img></button>
                    <button onClick={() => editListing(listing.id)}><img src='https://i.imgur.com/6kTrPDn.png' alt='trash'></img></button>
                </>
                : null }
                {showDeleteModal &&  (

                    <DeleteListingModal listing={listing} setShowDeleteModal={setShowDeleteModal} setShowListModal={setShowListModal}/>

                )}
            </Modal>
            )}
        </>
    )
}


export default ListingModal
