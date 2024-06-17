import { useState, useEffect } from 'react';
import image1 from '../../images/gallery/1.jpg';
import image2 from '../../images/gallery/2.jpg';
import image3 from '../../images/gallery/3.jpg';
import image4 from '../../images/gallery/4.jpg';
import image5 from '../../images/gallery/5.jpg';
import image6 from '../../images/gallery/6.jpg';
import image7 from '../../images/gallery/7.jpg';
import '../../css/gallery.css';


const GalleryComp = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const images = [image1, image2,image3,image4,image5,image6,image7];

    const handleImageClick = (image) => {
        setSelectedImage(image);
      };
    
      const handleCloseModal = () => {
        setSelectedImage(null);
      };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item" onClick={() => handleImageClick(image)}>
          <img src={image} alt={`Gallery item ${index + 1}`} />
        </div>
      ))}

{selectedImage && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected" className="zoomable-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryComp