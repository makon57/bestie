import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createApplicationThunk } from '../../store/applications';
import Footer from "../Footer";
import Header from "../Header";


const CreateApplication = () => {

  const dispatch = useDispatch()
  const history = useHistory()
  const userId = useSelector(state => state.session.user.id)
  const params = useParams()
  // const listing = useSelector(state => state.listings[params.id])
  const listingId = params.id

  const [errors, setErrors] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState(18)
  const [email, setEmail] = useState('')
  const [cellphone, setCellphone] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipcode, setZipcode] = useState(99999)
  const [homeType, setHomeType] = useState('House')
  const [pets, setPets] = useState('')
  const [household, setHousehold] = useState('')
  const [vetName, setVetName] = useState('')
  const [vetCellphone, setVetCellphone] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = await dispatch(createApplicationThunk(
        listingId,
        userId,
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
      <Header />
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
            <div className='form-submit-btn'>
              <button className='signup-btn' type='submit' >SUBMIT</button>
            </div>
          </form>
        </div>
        <div className='filler'>
          <p></p>
        </div>
      <div className='footer'><Footer /></div>
    </>
  )
}

export default CreateApplication;
