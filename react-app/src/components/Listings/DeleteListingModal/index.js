import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllListings, fetchDeleteListing } from '../../../store/listings'
import { Modal } from '../../../context/Modal';

const DeleteListingModal = ({ listing, setShowDeleteModal, setShowListModal }) =>{

    const history = useHistory()
    const dispatch = useDispatch()

    const user = useSelector(state => state.session.user)
    const [errors, setErrors] = useState([])
    const [deletel, setDeleteL] = useState(true)

    const deleteListing = async (listingId) => {
        const data = await dispatch(fetchDeleteListing(listingId));

        if (data) {
            setErrors(data);
        }
        history.push(`/users/${user.id}`)

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
