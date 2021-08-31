import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Modal } from "../../context/Modal";
import { fetchDeleteApplication } from "../../store/applications";
import EditApplication from "./EditApplication";


const ApplicationDetails = ({ application, showApplicationModal, setShowApplicationModal }) => {

  const history = useHistory()
  const dispatch = useDispatch()
  const [modalData, setModalData] = useState(null)
  const userId = useSelector(state => state.session.user?.id)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showApplicationDelete, setShowApplicationDelete] = useState(false)
  const listings = Object.values(useSelector(state => state.listings))
  const [editMode, setEditMode] = useState(false)

  // const editApplication = (applicationId) => {
  //   history.push(`/applications/${applicationId}/edit`)
  // }

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
          <div onClick={() => {setShowApplicationModal(true); setModalData(application)}}>
            <div className='applicationInfo'>
              <p>NAME: {application.name}</p>
              <p>AGE: {application.age}</p>
              <p>BESTIE ID: {application.listing_id}</p>
              <p>BESTIE NAME: {listings[application.listing_id].name}</p>
            </div>
          </div>
          {application.user_id === userId ?
            <>
                <button className='edit-btns' onClick={() => setEditMode(true)}><img src='https://i.imgur.com/6kTrPDn.png' alt='trash'></img></button>
                <button className='delete-btns' onClick={() => setShowApplicationDelete(true)}><img src='https://i.imgur.com/XEqfNqp.png' alt='trash'></img></button>
            </>
          : null }
          {showApplicationDelete &&  (
            <Modal>
              <div>Are you sure you want to delete this application?</div>
              <button onClick={() => deleteApplication(application.id)}>Yes</button>
              <button onClick={() => setShowApplicationDelete(false)}>No</button>
            </Modal>
          )}
        </div>
      </li>
      {showApplicationModal && modalData && (
        <Modal onClose={() => {setShowApplicationModal(false); setModalData(null)}}>
          <div className='petInfo'>
            <h1>{application.name}</h1>
            <p>BESTIE ID: {application.listing_id}</p>
            <p>BESTIE NAME: {listings[application.listing_id].name}</p>
            <p>AGE: {application.age}</p>
            <p>ADDRESS: {application.address}</p>
            <p>HOME TYPE: {application.home_type}</p>
            <br></br>
            <p>HOUSEHOLD</p>
            <p>{application.household}</p>
            <br></br>
            <p>PETS</p>
            <p>{application.pets}</p>
            <p>VET NAME: {application.vet_name}</p>
            <p>VET CELLPHONE: {application.vet_cellphone}</p>
            { modalData.user_id === userId ?
            <div className='edit-delete-btns' >
              <button className='delete-btns' onClick={() => setShowDeleteModal(true)}><img src='https://i.imgur.com/XEqfNqp.png' alt='trash'></img></button>
              <button className='edit-btns' onClick={() => setEditMode(true)}><img src='https://i.imgur.com/6kTrPDn.png' alt='trash'></img></button>
            </div>
            : null }
          </div>
          {showDeleteModal &&  (
            <Modal>
              <div>Are you sure you want to delete this application?</div>
              <button onClick={() => deleteApplication(application.id)}>Yes</button>
              <button onClick={() => setShowDeleteModal(false)}>No</button>
            </Modal>
          )}
        </Modal>
      )}
      {editMode && (
        <Modal onClose={() => setEditMode(false)}>
          <EditApplication application={application} />
        </Modal>
      )}
    </>
  )
}

export default ApplicationDetails
