import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchCreateListing } from "../../store/listings";
import Header from "../Header";
import Footer from '../Footer';
import UploadPicture from './UploadPicture'
import '../Listings/Form.css'

const CreateListingForm = () => {



  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const [errors, setErrors] = useState([])
  const [name, setName] = useState('')
  const [gender, setGender] = useState('Female')
  const [age, setAge] = useState(1)
  const [petType, setPetType] = useState('Dog')
  const [description, setDescription] = useState('')


  const onSubmit = async (e) => {
    e.preventDefault();

    const data = await dispatch(fetchCreateListing(
      user.id,
      name,
      gender,
      age,
      petType,
      description,

    ));

    if (data) {
      setErrors(data);
    }
    history.push(`/users/${user.id}`)
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
          <UploadPicture />
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
            </div>
            <div className='form-listing-age'>
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
            </div>
            <hr className='hr2'></hr>
            <div className='form-listing-submit-btn'>
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

export default CreateListingForm;
