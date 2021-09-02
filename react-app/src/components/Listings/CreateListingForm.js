import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import { fetchCreateListing } from "../../store/listings";
import Header from "../Header";
import Footer from '../Footer';
import UploadPicture from './UploadPicture'
import '../Listings/Form.css'

const CreateListingForm = () => {



  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const userId = user.id
  const [errors, setErrors] = useState([])
  const [name, setName] = useState('')
  const [gender, setGender] = useState('Female')
  const [age, setAge] = useState(1)
  const [petType, setPetType] = useState('Dog')
  const [description, setDescription] = useState('')


  const onSubmit = async (e) => {
    e.preventDefault();

    const data = await dispatch(fetchCreateListing(
      userId,
      name,
      gender,
      age,
      petType,
      description,
    ));

    if (data) {
      setErrors(data)
    } else {
      history.push(`/users/${userId}`)
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
