import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../Styles/ImageInput.css";

const ImageInput = ({ onImageSelect }) => {
  const fileInputRef = React.createRef();
  const imagePreviewRef = React.createRef();

  const handleImageChange = () => {
    const file = fileInputRef.current.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imgTag = document.createElement("img");
        imgTag.src = e.target.result;
        imgTag.alt = "Uploaded Image";
        imagePreviewRef.current.innerHTML = "";
        imagePreviewRef.current.appendChild(imgTag);

        // Send the image data (base64 string) to the parent component
        onImageSelect(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-input-container">
      <label htmlFor="file-input">
        <div className="icon-placeholder" ref={imagePreviewRef}>
          <FontAwesomeIcon
            icon={faUser}
            size="10x"
            style={{ color: "#8d8d8d" }}
          />
        </div>
      </label>
      <input
        type="file"
        id="file-input"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default ImageInput;
