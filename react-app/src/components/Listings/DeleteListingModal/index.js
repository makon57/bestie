import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteListing } from '../../../store/listings'
import { Modal } from '../../../context/Modal';

const DeleteListingModal = ({ listing, setShowDeleteModal, setShowListModal }) =>{

    const history = useHistory()
    const dispatch = useDispatch()

    const [deletel, setDeleteL] = useState(true)

    const deleteListing = async (listingId) => {
        await dispatch(fetchDeleteListing(listingId));
        setDeleteL(!deletel)
        setShowDeleteModal(false)
        setShowListModal(false)
    };

    return (
        <Modal>
            <div>Are you sure you want to delete this listing?</div>
            <button onClick={() => deleteListing(listing.id)}>Yes</button>
            <button onClick={() => setShowDeleteModal(false)}>No</button>
        </Modal>
    )
}


export default DeleteListingModal
