import React, {useState} from "react";
import '../Listings/Form.css'

const UploadPicture = (props) => {

    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [url, setUrl] = useState(props.listImage ? props.listImage : 'https://i.imgur.com/BPOYKBx.png')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append("image", image);
        setImageLoading(true);

        const res = await fetch('/api/images/', {
            method: "POST",
            body: formData,
        });
        if (res.ok) {
            await res.json();
            setImageLoading(false);
        }
        else {
            setImageLoading(false);
        }
    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        if (file) {
          setUrl(URL.createObjectURL(file))
        }
        setImage(file);
    }


    return (
        <div className='upload-container'>
            <form onSubmit={handleSubmit}>
                <img src={url} alt="i" />
                <input
                type="file"
                accept="image/*"
                id="imgInp"
                onChange={updateImage}
                />
                <button type="submit">{(imageLoading) ? 'Loading . . . ' : 'UPLOAD'}</button>
            </form>
        </div>
    )
}

export default UploadPicture;
