import React, { useRef, useEffect } from 'react';
import styles from './styles/popup.module.scss';

const FilePopUp = ({ imageUrlforPopUp, onSelect, onClose,onOpen }) => {
  const popUpRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onSelect(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <label ref={popUpRef}>
          <input type='file' className={styles.input} onChange={handleFileChange} />
          <div className={styles.bordercover}>
            <div className={styles.popImage}>
              <img src={imageUrlforPopUp} alt="person logo"onClick={(event) => onOpen && onOpen(event)} />
              &nbsp;
              <div className={styles.fileFormate}>
                JPEG, PNG, JPG
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default FilePopUp;