import React, {useState} from "react";
import '../Listings/Form.css'

const UploadPicture = () => {
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);


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
        setImage(file);
    }

    return (
        <div className='upload-container'>
            <form onSubmit={handleSubmit}>
                <input
                type="file"
                accept="image/*"
                onChange={updateImage}
                />
                <button type="submit">Submit</button>
                {(imageLoading)&& <p>Loading...</p>}
            </form>
        </div>
    )
}

export default UploadPicture;
