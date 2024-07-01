import React, { useState } from "react";
import { Image } from "../Utilities/ImageData";
import "../CSS/ImageGallery.css";

const ImageGallery = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index < Image.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="image-gallery">
      <h1>Image Gallery</h1>

      <img src={Image[index]} alt="Nature" />
      <div>
        <button onClick={handlePrev} disabled={index === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={index === Image.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
