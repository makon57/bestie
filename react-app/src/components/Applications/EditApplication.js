import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import { fetchDeleteApplication, fetchEditApplication } from '../../store/applications';
// import Footer from "../Footer";
// import Header from "../Header";


const EditApplication = ({application}) => {

//   const params = useParams()
  const dispatch = useDispatch()
  const history = useHistory()
  const userId = useSelector(state => state.session.user.id)
//   const applicationId = params.id

//   const application = useSelector(state => state.applications[applicationId])


  const [errors, setErrors] = useState([])
  const [name, setName] = useState(application.name)
  const [age, setAge] = useState(application.age)
  const [email, setEmail] = useState(application.email)
  const [cellphone, setCellphone] = useState(application.cellphone)
  const [address, setAddress] = useState(application.address)
  const [city, setCity] = useState(application.city)
  const [state, setState] = useState(application.state)
  const [zipcode, setZipcode] = useState(application.zipcode)
  const [homeType, setHomeType] = useState(application.home_type)
  const [pets, setPets] = useState(application.pets)
  const [household, setHousehold] = useState(application.household)
  const [vetName, setVetName] = useState(application.vet_name)
  const [vetCellphone, setVetCellphone] = useState(application.vet_cellphone)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const deleteApplication = async (e) => {
    e.preventDefault();

    const data = dispatch(fetchDeleteApplication(application.id));
    if (data) {
      setErrors(data);
    }
    history.push(`/users/${userId}`)
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = await dispatch(fetchEditApplication(
        application.id,
        name,
        age,
        email,
        cellphone,
        address,
        city,
        state,
        zipcode,
        homeType,
        pets,
        household,
        vetName,
        vetCellphone,
    ))
    if (data) {
      setErrors(data);
    }
    history.push(`/users/${userId}`)
  };


  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateAge = (e) => {
    setAge(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateCellphone = (e) => {
    setCellphone(e.target.value);
  };

  const updateAddress = (e) => {
    setAddress(e.target.value);
  };

  const updateCity = (e) => {
    setCity(e.target.value);
  };

  const updateState = (e) => {
    setState(e.target.value);
  };

  const updateZipcode = (e) => {
    setZipcode(e.target.value);
  };

  const updateHomeType = (e) => {
    setHomeType(e.target.value);
  };

  const updatePets = (e) => {
    setPets(e.target.value);
  };

  const updateHousehold = (e) => {
    setHousehold(e.target.value);
  };

  const updateVetName = (e) => {
    setVetName(e.target.value);
  };

  const updateVetCellphone = (e) => {
    setVetCellphone(e.target.value);
  };


  return (
    <>

      <div className='background-div'></div>
        <div className='form-container'>
          <form onSubmit={onSubmit}>
            <h1 className='form-header'>ADOPTION FORM</h1>
            <hr className='hr1'></hr>
            <hr className='hr1'></hr>
            <div className='form-name'>
              <label>NAME</label>
              <input
                type='text'
                name='name'
                onChange={updateName}
                value={name}
                required={true}
              ></input>
            </div>
            <div className='form-age'>
              <label>AGE</label>
              <input
                type='text'
                name='age'
                onChange={updateAge}
                value={age}
                required={true}
              ></input>
            </div>
            <hr className='hr2'></hr>
            <hr className='hr2'></hr>
            <div className='form-email'>
              <label>EMAIL</label>
              <input
                type='text'
                name='email'
                onChange={updateEmail}
                value={email}
                required={true}
              ></input>
            </div>
            <div className='form-cellphone'>
              <label>CELL PHONE</label>
              <input
                type='text'
                name='cellphone'
                onChange={updateCellphone}
                value={cellphone}
                required={true}
              ></input>
            </div>
            <hr className='hr2'></hr>
            <hr className='hr2'></hr>
            <div className='form-description'>
              <label>PETS</label>
              <textarea
                type='text'
                name='description'
                onChange={updatePets}
                value={pets}
                required={true}
              ></textarea>
            </div>
            <hr className='hr3'></hr>
            <hr className='hr3'></hr>
            <div className='form-address'>
              <label>ADDRESS</label>
              <input
                type='text'
                name='address'
                onChange={updateAddress}
                value={address}
                required={true}
              ></input>
            </div>
            <hr className='hr3'></hr>
            <hr className='hr3'></hr>
            <div className='form-city'>
              <label>CITY</label>
              <input
                type='text'
                name='city'
                onChange={updateCity}
                value={city}
                required={true}
              ></input>
            </div>
            <div className='form-state'>
              <label>STATE</label>
              <input
                type='text'
                name='state'
                onChange={updateState}
                value={state}
                required={true}
              ></input>
            </div>
            <div className='form-zipcode'>
              <label>ZIPCODE</label>
              <input
                type='text'
                name='zipcode'
                onChange={updateZipcode}
                value={zipcode}
                required={true}
              ></input>
            </div>
            <div className='form-home-type'>
              <label>HOME TYPE</label>
              <select name="homeType" onChange={updateHomeType} value={homeType} required={true}>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Condo">Condo</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Trailer">Trailer</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {/* <hr className='hr2'></hr> */}
            {/* <hr className='hr2'></hr> */}
            <div className='form-household'>
              <label>HOUSEHOLD</label>
              <textarea
                type='text'
                name='household'
                onChange={updateHousehold}
                value={household}
                required={true}
              ></textarea>
            </div>
            {/* <hr className='hr2'></hr> */}
            {/* <hr className='hr2'></hr> */}
            <div className='form-vet-name'>
              <label>VETERINARIAN'S NAME</label>
              <input
                type='text'
                name='vetName'
                onChange={updateVetName}
                value={vetName}
                required={true}
              ></input>
            </div>
            <div className='form-vet-phone'>
              <label>VETERINARIAN'S CELLPHONE</label>
              <input
                type='text'
                name='vetCellphone'
                onChange={updateVetCellphone}
                value={vetCellphone}
                required={true}
              ></input>
            </div>
            <hr className='hr2'></hr>
            <div className='form-submit-btn delete-edit'>
              <button className='edit-btn' type='submit' >EDIT</button>
              <button className='delete-btn' type='button' onClick={() => setShowDeleteModal(true)}>DELETE</button>
            </div>
          </form>
        </div>
        {showDeleteModal &&  (
          <Modal>
            <div>Are you sure you want to delete this application?</div>
            <button onClick={deleteApplication}>Yes</button>
            <button onClick={() => setShowDeleteModal(false)}>No</button>
          </Modal>
        )}
    </>
  )
}

export default EditApplication;
