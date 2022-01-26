import { useState, useEffect } from "react";
import server from "../Global/Server";
import axios from "axios";

function ChangeImg() {
  const [files, setFiles] = useState();

  function handleOnChange(e) {
    setFiles(e.target.files[0]);
  }

  useEffect(() => {
    const userId = localStorage.getItem("user_id");

    const uploadImage = async () => {
      const formData = new FormData();

      formData.append("files", files);

      axios
        .post(`${server}/api/upload`, formData)
        .then((response) => {
          const imageId = response.data[0].id;
          console.log(imageId);
          console.log(response.data);

          axios
            .put(`${server}/api/Users/${userId}`, { Profilepicture: imageId })
            .then((response) => {
              response = window.location.reload();
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          //handle error
        });
    };
    if (files) {
      uploadImage();
    }
  }, [files]);
  // useEffect that gets current user & when the user is in "profil" and want to change the img it puts the img in to DB/Strapi and changes on the site.
  return (
    <>
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: "none" }}
        onChange={handleOnChange}
      />
      <label
        htmlFor="select-image"
        className="d-flex justify-content-center pt-2"
      >
        <button
          variant="contained"
          className="btn btn-success d-flex justify-content-start"
          component="span"
        >
          <i className="bi bi-camera"></i>
          <span className="pl-1"></span>Byt bild
        </button>
      </label>
    </>
  );
}

export default ChangeImg;
