import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Listings from ".";
import { fetchCreateListing } from "../../store/listings";
import Header from "../Header";
import UploadPicture from "./UploadPicture";


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


  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);


  const onSubmit = async (e) => {
    e.preventDefault();
    setImageLoading(true);
    const data = await dispatch(fetchCreateListing(
      user.id,
      name,
      gender,
      age,
      petType,
      description,
      image,
    ));
    if (data) {
      setImageLoading(false);
      setErrors(data);

      // history.push(`/listings/${data.id}`)
    }
    setImageLoading(false);
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

  const updateImage = (e) => {
    const file = e.target.files;
    setImage(file);
  }

  let content;

  if (user) {
    content = (
      // <UploadPicture />
      <div onClick={updateImage}>
        <input
          type="file"
          accept="image/*"
          onChange={updateImage}
        />
        <button type="button" >Submit</button>
        {(imageLoading)&& <p>Loading...</p>}
      </div>
    )
  }

  return (
    <>
      <Header />
      <div>
        <form onSubmit={onSubmit}>
          <div>
            {content}
          </div>
          {/* { images ? images.map(image => (
            <img key={image.id} src={image.image_url} alt={image.listing_id}></img>
          ))
          : null} */}
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
            <button className='signup-btn' type='submit' >SUBMIT</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateListingForm;
