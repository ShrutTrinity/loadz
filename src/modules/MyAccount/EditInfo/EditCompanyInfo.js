import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import styles from './styles/editcompanyinfo.module.scss'
import profile from '@images/profile.jpg';
import CustomTextFiled from '@Jobs/components/TextField/CustomTextFiled';
import { useState } from 'react';
import FilePopUp from '../../CreateAccount/Components/uploadPopUp';
import ImageUploadLogo from '@images/upload-image.svg';



const EditCompanyInfo = ({ open, onClose }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClosePop = () => {
    setShowPopUp(false);
  }

  const handleImageSelect = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowPopUp(false);
  };

  const handleClickOpen = (event) => {
    event.stopPropagation();
    setShowPopUp(true);
  };
  return (
    <>
       <FilePopUp
        open={showPopUp}
        imageUrlforPopUp={selectedImage || ImageUploadLogo}
        onSelect={handleImageSelect}
        onClose={handleClosePop}
      />
      <Dialog
      sx={{
        '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper':{
            maxWidth:'850px',
            borderRadius:'20px'
        }
      }}  
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <CloseIcon className={styles.closeicon} onClick={onClose} />
        </DialogTitle>
        <DialogContent sx={{ padding: '10px' }}>
          <div className={styles.heading}>
            Edit Company Profile
          </div>
          <div className={styles.flex}>
            <div className={styles.textFields}>
              <CustomTextFiled
                name='cname'
                type='text'
                label='Company Name'
                width='100'
                placeholder='Company Name'
              />
              <CustomTextFiled
                name='address'
                type='text'
                label='Address'
                width='100'
                placeholder='Address'
              />
              <CustomTextFiled
                name='city'
                type='text'
                label='City'
                width='31.5'
                placeholder='City'
              />
              <CustomTextFiled
                name='state'
                type='number'
                label='State'
                width='31.5'
                placeholder='State'
              />
              <CustomTextFiled
                name='zip'
                type='number'
                label='Zip'
                width='31.5'
                placeholder='Zip'
              />
              <CustomTextFiled
                name='cemail'
                type='email'
                label='Company Email'
                width='48'
                placeholder='Phone'
              />
              <CustomTextFiled
                name='cphone'
                type='number'
                label='Company Phone'
                width='48'
                placeholder='Company Phone'
              />
              <CustomTextFiled
                name='waitrate'
                type='number'
                label='Company Wait Rate'
                width='48'
                placeholder='Phone'
              />
              <CustomTextFiled
                name='taxrate'
                type='number'
                label='Company Tax Rate'
                width='48'
                placeholder='Phone'
              />
              <CustomTextFiled
                name='driverrate'
                type='number'
                label='Default Driver Hourly Rate'
                width='48'
                placeholder='Phone'
              />
              <CustomTextFiled
                name='phone'
                type='number'
                label='Default Driver Commission Rate'
                width='48'
                placeholder='Phone'
              />
            </div>
            <div className={styles.updateimg}>
            <div className={styles.imgdiv} onClick={handleClickOpen}>
                {selectedImage ? (
                  <img src={selectedImage} alt='profile' className={styles.profile} />
                ) : (
                  <img src={profile} alt='profile' className={styles.profile} />
                )}
              </div>
              <button className={styles.btn2}>Update</button>

            </div>
          </div>
         
        </DialogContent>
        
      </Dialog>
    </>
  );
}


export default EditCompanyInfo
