import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchCreateListing } from "../../store/listings";
import Header from "../Header";
import UploadPicture from './UploadPicture'


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
      <div>
        <UploadPicture />
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <hr></hr>
          <div>
            <label>NAME</label>
            <input
              type='text'
              name='name'
              onChange={updateName}
              value={name}
              required={true}
            ></input>
          </div>
          <hr></hr>
          <div>
            <div>
              <label>GENDER</label>
              <select name='gender' onChange={updateGender} value={gender} required={true}>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>
            <hr></hr>
            <div>
              <label>AGE</label>
              <input
                type='text'
                name='age'
                onChange={updateAge}
                value={age}
                required={true}
              ></input>
            </div>
            <div>
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
          </div>
          <hr></hr>
          <div>
            <label>DESCRIPTION</label>
            <input
              type='text'
              name='name'
              onChange={updateDescription}
              value={description}
              required={true}
            ></input>
          </div>
          <hr></hr>
          <div className='signup-btn-container'>
            <button className='signup-btn' type='submit' >SUBMIT</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateListingForm;
