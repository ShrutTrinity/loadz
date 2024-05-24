import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/fileUpload.module.scss';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import DownloadIcon from '@mui/icons-material/Download';

const FileUpload = ({ id, onFileSelect,text,disabled,height,width}) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileType = selectedFile.type;
        const fileURL = e.target.result;
        setFile({ url: fileURL, type: fileType });
        onFileSelect(fileURL, selectedFile);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleDelete = () => {
    setFile(null);
  };

  const triggerFileInput = (e) => {
    e.stopPropagation(); 
    document.getElementById(id).click();
  };
  const handleDownload = (e) => {
    e.stopPropagation(); 
    const link = document.createElement('a');
    link.href = file.url;
    link.download = file.name;
    document.body.appendChild(link);      
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.uploadContainer} onClick={triggerFileInput}>
      <input
        type="file"
        id={id}
        style={{ display: 'none' }}
        accept=".pdf, .jpg, .jpeg, .png"
        onChange={handleFileChange}
        disabled={!!file || !disabled} 
      />
      {file ? (
        <>
          {file.type === 'application/pdf' ? (
            <div className={styles.imageContainer} style={{height:`${height}px`,width:`${width}px`}}>            
            <PictureAsPdfOutlinedIcon className={styles.icon} />
            </div>

          ) : (
            <>
            <img src={file.url} alt="Uploaded file" className={styles.uploadedImage}  style={{height:`${height}px`,width:`${width}px`}}/>
            <br/>
            </>
          )}
          <button className={styles.deleteButton} onClick={handleDelete}>
            Delete
          </button>
          <button className={styles.downloadButton} onClick={handleDownload}>
            <DownloadIcon/>
          </button>
        </>
      ) : (
        <div className={styles.placeholder}>
          <div className={styles.imageContainer} style={{height:`${height}px`,width:`${width}px`}}>
            <NoteAddOutlinedIcon className={styles.icon} />
            <span className={styles.imageDiscription}>{text}</span>
          </div>
        </div>
      )}
    </div>
  );
};

FileUpload.propTypes = {
  id: PropTypes.string.isRequired,
  onFileSelect: PropTypes.func.isRequired,
};

export default FileUpload;
