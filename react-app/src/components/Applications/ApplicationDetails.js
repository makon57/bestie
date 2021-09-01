import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Modal } from "../../context/Modal";
import { fetchDeleteApplication } from "../../store/applications";
import "../Listings/DeleteListingModal/DeleteModal.css"


const ApplicationDetails = ({ application, showApplicationModal, setShowApplicationModal }) => {

  const history = useHistory()
  const dispatch = useDispatch()
  const [modalData, setModalData] = useState(null)
  const userId = useSelector(state => state.session.user?.id)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showApplicationDelete, setShowApplicationDelete] = useState(false)
  const listings = Object.values(useSelector(state => state.listings))


  const editApplication = (applicationId) => {
    history.push(`/applications/${applicationId}/edit`)
  }

  const deleteApplication = (applictionId) => {
    dispatch(fetchDeleteApplication(applictionId));
    setShowApplicationDelete(false)
    setShowDeleteModal(false)
    setShowApplicationModal(false)
  }


  return (
    <>
      <li key={application.id}>
        <div>
          <div className="application-info-container" >
            <div className='applicationInfo' onClick={() => {setShowApplicationModal(true); setModalData(application)}}>
              <p>NAME: {application.name}</p>
              <p>CELLPHONE: {application.cellphone}</p>
              <p>BESTIE ID: {application.listing_id}</p>
              <p>BESTIE NAME: {listings[application.listing_id - 1].name}</p>
            </div>
            {application.user_id === userId ?
              <>
                <button className='edit-btns' onClick={() => editApplication(application.id)}><img src='https://i.imgur.com/6kTrPDn.png' alt='trash'></img></button>
                <button className='delete-btns' onClick={() => setShowApplicationDelete(true)}><img src='https://i.imgur.com/XEqfNqp.png' alt='trash'></img></button>
              </>
            : null }
           </div>
          {showApplicationDelete &&  (
            <Modal>
              <div className="delete-modal-confirmation">
                <h1 className="delete-modal-question">Are you sure you want to delete this application?</h1>
                <button className="delete-modal-yes" onClick={() => deleteApplication(application.id)}>Yes</button>
                <button className="delete-modal-no" onClick={() => setShowApplicationDelete(false)}>No</button>
              </div>
            </Modal>
          )}
        </div>
      </li>
      {showApplicationModal && modalData && (
        <Modal onClose={() => {setShowApplicationModal(false); setModalData(null)}}>
          <div className='petInfo'>
          <form>
          <h1 className='form-header'>ADOPTION FORM</h1>
            <div className='form-name'>
              <p>BESTIE ID: {application.listing_id}</p>
              <p>BESTIE NAME: {listings[application.listing_id - 1].name}</p>
              <label>NAME</label>
              <input
                type='text'
                name='name'
                value={application.name}
                disabled={true}
              ></input>
            </div>
            <div className='form-age'>
              <label>AGE</label>
              <input
                type='text'
                name='age'
                value={application.age}
                disabled={true}
              ></input>
            </div>
            <div className='form-email'>
              <label>EMAIL</label>
              <input
                type='text'
                name='email'
                value={application.email}
                disabled={true}
              ></input>
            </div>
            <div className='form-cellphone'>
              <label>CELL PHONE</label>
              <input
                type='text'
                name='cellphone'
                value={application.cellphone}
                disabled={true}
              ></input>
            </div>
            <div className='form-address'>
              <label>ADDRESS</label>
              <input
                type='text'
                name='address'
                value={application.address}
                disabled={true}
              ></input>
            </div>
            <div className='form-city'>
              <label>CITY</label>
              <input
                type='text'
                name='city'
                value={application.city}
                disabled={true}
              ></input>
            </div>
            <div className='form-state'>
              <label>STATE</label>
              <input
                type='text'
                name='state'
                value={application.state}
                disabled={true}
              ></input>
            </div>
            <div className='form-zipcode'>
              <label>ZIPCODE</label>
              <input
                type='text'
                name='zipcode'
                value={application.zipcode}
                disabled={true}
              ></input>
            </div>
            <div className='form-home-type'>
              <label>HOME TYPE</label>
              <select name="homeType" value={application.home_type} disabled={true}>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Condo">Condo</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Trailer">Trailer</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className='form-pets'>
              <label>PETS</label>
              <p>Please tell use if you own any other pets or animals, and if so please specify
                the species and how many you own and their general temperment.</p>
              <textarea
                type='text'
                name='pets'
                value={application.pets}
                disabled={true}
              ></textarea>
            </div>
            <div className='form-household'>
              <label>HOUSEHOLD</label>
              <p>Please tell use a bit about your household like the number of adults, teens,
                children, or seniors that live with you. As well as a quick description of
                the dynamic of your house (calm, busy, etc). Any other additional information
                you'd like for us to know can be shared here as well!</p>
              <textarea
                type='text'
                name='household'
                value={application.household}
                disabled={true}
              ></textarea>
            </div>
            <div className='form-vet-name'>
              <label>VETERINARIAN'S NAME</label>
              <input
                type='text'
                name='vetName'
                value={application.vet_name}
                disabled={true}
              ></input>
            </div>
            <div className='form-vet-cellphone'>
              <label>VETERINARIAN'S CELLPHONE</label>
              <input
                type='text'
                name='vetCellphone'
                value={application.vet_cellphone}
                disabled={true}
              ></input>
            </div>
            { modalData.user_id === userId ?
            <div className='edit-delete-btns' >
              <button className='delete-btns' onClick={() => setShowDeleteModal(true)}><img src='https://i.imgur.com/XEqfNqp.png' alt='trash'></img></button>
              <button className='edit-btns' onClick={() => editApplication(application.id)}><img src='https://i.imgur.com/6kTrPDn.png' alt='trash'></img></button>
            </div>
            : null }
          </form>
          </div>
          {showDeleteModal &&  (
            <Modal>
              <div className="delete-modal-confirmation">
                <h1 className="delete-modal-question">Are you sure you want to delete this application?</h1>
                <button className="delete-modal-yes" onClick={() => deleteApplication(application.id)}>Yes</button>
                <button className="delete-modal-no" onClick={() => setShowDeleteModal(false)}>No</button>
              </div>
            </Modal>
          )}
        </Modal>
      )}
    </>
  )
}

export default ApplicationDetails
