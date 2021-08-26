import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "../Header";


const CreateListingForm = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)

  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState(1)
  const [petType, setPetType] = useState('')
  const [description, setDescription] = useState('')


  // const onSubmit = async (e) => {
  //   e.preventDefault();

  //   if (password === repeatPassword) {
  //     const data = await dispatch(signUp(name, email, password));
  //     if (data) {
  //       setErrors(data)
  //     }
  //   } else if (password !== repeatPassword) {
  //     const data = await dispatch(signUp(name, email, password));
  //     if (data) {
  //       setErrors({...data, passMatch: "Passwords do not match."})
  //     } else {
  //       setErrors({passMatch: 'Passwords do not match.'})
  //     }
  //   }
  // };


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
        <form >
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
                <option value="Hamster">Hamster</option>
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
            <button className='signup-btn' type='submit'>SIGN UP</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateListingForm;
