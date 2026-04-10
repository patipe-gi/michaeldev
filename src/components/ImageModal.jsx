// components/ImageModal.jsx
import React, { useEffect } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const ImageModal = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  // Fermer avec la touche Echap
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Empêcher le scroll du body
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <img 
          src={images[currentIndex]} 
          alt={`Image ${currentIndex + 1}`}
          className="modal-image"
        />
        
        {images.length > 1 && (
          <>
            <button className="modal-nav modal-prev" onClick={onPrev}>
              <FaChevronLeft />
            </button>
            <button className="modal-nav modal-next" onClick={onNext}>
              <FaChevronRight />
            </button>
            <div className="modal-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageModal;