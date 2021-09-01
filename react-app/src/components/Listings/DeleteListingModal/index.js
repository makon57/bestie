import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteListing } from '../../../store/listings'
import { Modal } from '../../../context/Modal';
import "./DeleteModal.css"

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
            <div className="delete-modal-confirmation">
                <h1 className="delete-modal-question">Are you sure you want to delete this listing?</h1>
                <button className="delete-modal-yes" onClick={() => deleteListing(listing.id)}>Yes</button>
                <button className="delete-modal-no" onClick={() => setShowDeleteModal(false)}>No</button>
            </div>
        </Modal>
    )
}


export default DeleteListingModal
