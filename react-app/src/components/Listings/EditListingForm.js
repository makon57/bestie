import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchEditListing, fetchDeleteListing } from "../../store/listings";
import Footer from "../Footer";
import Header from "../Header";
import UploadPicture from "./UploadPicture";
import '../Listings/Form.css'
import { Modal } from "../../context/Modal";




const EditListingForm = () => {

  const params = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const listing = useSelector(state => state.listings[params.id])
  const [errors, setErrors] = useState([])
  const [name, setName] = useState(listing.name)
  const [gender, setGender] = useState(listing.gender)
  const [age, setAge] = useState(listing.age)
  const [petType, setPetType] = useState(listing.pet_type)
  const [description, setDescription] = useState(listing.description)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [image, setImage] = useState(listing.images);

  const deleteListing = async (e) => {
    e.preventDefault();

    const data = dispatch(fetchDeleteListing(listing.id));
    if (data) {
      setErrors(data);
    }
    history.push(`/users/${user.id}`)
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(fetchEditListing(
      listing.id,
      name,
      gender,
      age,
      petType,
      description,
      image
    ));

    if (data) {
      console.log(data)
      setErrors(data);
    }
    if (data.ok) {
      history.push(`/users/${user.id}`)
    }
  };


  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateGender = (e) => {
    setGender(e.target.value);
  };

  const updateAge = (e) => {
    setAge(e.target.value);
  };

  const updatePetType = (e) => {
    setPetType(e.target.value);
  };

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };



  return (
    <>
      <Header />
      <div className='background-div'></div>
        <div>
          <UploadPicture listImage={listing.images.images[listing.images.images.length - 1]}/>
        </div>
        <div className='form-listing-container'>
          <form onSubmit={onSubmit}>
            <h1 className='form-listing-header'>BESTIE FORM</h1>
            <hr className='hr1'></hr>
            <div className='form-listing-name'>
              <label>NAME</label>
              <input
                type='text'
                name='name'
                onChange={updateName}
                value={name}
                required={true}
              ></input>
              {errors.name ? <h4>{errors.name}</h4> : null}
            </div>
            <div className='form-listing-age'>
              <label>AGE</label>
              <input
                type='number'
                name='age'
                onChange={updateAge}
                value={age}
                required={true}
              ></input>
              {errors.age ? <h4>{errors.age}</h4> : null}
            </div>
            <hr className='hr2'></hr>
            <div className='form-listing-gender'>
              <label>GENDER</label>
              <select name='gender' onChange={updateGender} value={gender} required={true}>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>
            <div className='form-listing-pet-type'>
              <label>PET TYPE</label>
              <select name="petType" onChange={updatePetType} value={petType} required={true}>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Rabbit">Rabbit</option>
                <option value="Guinea Pig">Guinea Pig</option>
                <option value="Horse">Horse</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <hr className='hr3'></hr>
            <hr className='hr2'></hr>
            <hr className='hr2'></hr>
            <div className='form-listing-description'>
              <label>DESCRIPTION</label>
              <textarea
                type='text'
                name='description'
                onChange={updateDescription}
                value={description}
                required={true}
              ></textarea>
              {errors.description ? <h4>{errors.description}</h4> : null}
            </div>
            <hr className='hr2'></hr>
            <div className='form-listing-submit-btn listing-delete-edit'>
              <button className='listing-edit-btn' type='submit' >EDIT</button>
              <button className='listing-delete-btn' type='button' onClick={() => setShowDeleteModal(true)}>DELETE</button>
            </div>
          </form>
        </div>
        {showDeleteModal &&  (
          <Modal>
            <div className="delete-modal-confirmation">
              <h1 className="delete-modal-question">Are you sure you want to delete this listing?</h1>
              <button className="delete-modal-yes" onClick={deleteListing}>Yes</button>
              <button className="delete-modal-no" onClick={() => setShowDeleteModal(false)}>No</button>
            </div>
          </Modal>
        )}
        <div className='filler'>
          <p></p>
        </div>
      <div className='footer'><Footer /></div>
    </>
  )
}

export default EditListingForm;
