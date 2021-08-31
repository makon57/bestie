import React, {useState} from "react";
import '../Listings/Form.css'

const UploadPicture = (props) => {

    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [errors, setErrors] = useState([])
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

        if (!file) {
            setUrl(url)
            setImage(image);
        } else {
            const ext = file.type.split('/')
            const extensions = "pdf, png, jpg, jpeg, gif"
            if (extensions.includes(ext[1])) {
                setUrl(URL.createObjectURL(file))
                setImage(file);
            } else {
                setErrors({filetype: 'Filetype not supported, please upload a pdf, png, jpg, jpeg, or gif file.'})
            }
        }
    }


    return (
        <div className='upload-container'>
            <form onSubmit={handleSubmit}>
                <img src={url} alt="i" />
                <input
                type="file"
                accept="image/png, image/gif, image/jpeg, image/pdf, image/jpg"
                id="imgInp"
                onChange={updateImage}
                placeholder={image}
                />
                <p>{errors?.filetype}</p>
                { url === 'https://i.imgur.com/BPOYKBx.png' || url === props?.listImage ?
                    <button type="submit" required={false}>{(imageLoading) ? 'Loading . . . ' : 'UPLOAD'}</button>
                :   <button type="submit" required={true}>{(imageLoading) ? 'Loading . . . ' : 'UPLOAD'}</button>
                }
            </form>
        </div>
    )
}

export default UploadPicture;
