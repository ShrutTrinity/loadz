import * as React from 'react';
import styles from './style/editDriverDetail.module.scss'
import Drawer from '@mui/material/Drawer';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import CommonTextfield from '@Jobs/components/TextField/CommonTextfield.js'
import CustomTextField from '@Jobs/components/TextField/CustomTextFiled.js'
import { Button, Tooltip } from '@mui/material';
import Send from '../CreateAccount/Components/uploadFile/Send';
import { useState } from 'react';
import FilePopUp from '../CreateAccount/Components/uploadPopUp';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ArchiveAlertDialog from './ArchiveAlertDailog';


const EditDriverDetail = (props) => {

  const statesArray = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida',
    'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
    'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
    'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  const [showPopUp, setShowPopUp] = useState(false);
  const [showMedicalUploadPopUp, setShowMedicalUploadPopUp] = useState(false);
  const [cdslImage, setCdslImage] = useState(null);
  const [medicalImage, setMedicalImage] = useState(null);
  const [openArchiveAlert, setOpenArchiveAlert] = useState(false);

  const handleClickOpenArchiveAlert = () => {
    setOpenArchiveAlert(true);
  };

  const handleCloseArchiveAlert = () => {
    setOpenArchiveAlert(false);
  };

  const handleClosePop = () => {
    setShowPopUp(false);
  }
  const handleClosePopForMedical = () => {
    setShowMedicalUploadPopUp(false);
  }

  const handleCdslImageSelect = (imageUrl) => {
    setCdslImage(imageUrl);
    setShowPopUp(false)
  };
  const handleClickOpen = (event) => {
    event.stopPropagation();
    setShowPopUp(true)
  };
  const handleClickOpenMedicalPopup = (event) => {
    event.stopPropagation();
    setShowMedicalUploadPopUp(true)
  };


  const handleMedicalImageSelect = (imageUrl) => {
    setMedicalImage(imageUrl);
    setShowMedicalUploadPopUp(false)
  };


  const editDriverStyles = {
    selectFiled: {
      borderColor: '#c4c4c4',
      boxShadow: 'none',
      margin: '15px 0',
      padding: '17px 10px 10px 10px',
      fontSize: '13px',
      width: '100%',
    },
    btn: {
      backgroundColor: 'black',
      padding: '10px 20pxpx',
      fontSize: '20px',
      fontWeight: '400',
      width: '200px',
    }
  }

  return (
    <>
      <ArchiveAlertDialog
        open={openArchiveAlert}
        onClose={handleCloseArchiveAlert} />

      <FilePopUp
        imageUrlforPopUp={cdslImage}
        onSelect={handleCdslImageSelect}
        open={showPopUp}
        onClose={handleClosePop}
      />
      <FilePopUp
        imageUrlforPopUp={medicalImage || ''}
        onSelect={handleMedicalImageSelect}
        open={showMedicalUploadPopUp}
        onClose={handleClosePopForMedical}
      />
      <Drawer sx={{ '& .css-1160xiw-MuiPaper-root-MuiDrawer-paper ': { width: '55% !important' } }}
        anchor='right'
        open={props.open}
        onClose={props.onClose}
      >
        <div className={styles.container}>
          <div className={styles.flexitem1}>
            <div className={styles.headingContainer}>
              <h2 className={styles.heading}>Edit Driver</h2>
              <div className={styles.icons}>
              <Tooltip title="Disable Driver">
                <PersonRemoveIcon sx={{ cursor: 'pointer' }} />
                </Tooltip>
                <Tooltip title="Archive Driver">
                <PersonOffIcon sx={{ cursor: 'pointer' }} onClick={handleClickOpenArchiveAlert} />
                </Tooltip>
              </div>
            </div>
            <div className={styles.details}>
              <CommonTextfield
                width='100'
                id='fistName'
                name='fistName'
                required
                type='text'
                label='First Name'
                variant='outlined'
              />
              <CommonTextfield
                width='100'
                id='lastName'
                name='lastName'
                type='text'
                label='Last Name'
                variant='outlined'
              />
              <CommonTextfield
                width='100'
                id='phonenumber'
                name='phonenumber'
                type='number'
                required
                label='Phone Number'
                variant='outlined'
              />
              <CommonTextfield
                width='100'
                id='email'
                name='email'
                type='email'
                label='Email'
                variant='outlined'
              />
              <CommonTextfield
                width='100'
                id='address'
                name='address'
                type='text'
                label='Address'
                variant='outlined'
              />
              <CommonTextfield
                width='100'
                id='city'
                name='city'
                type='text'
                label='City'
                variant='outlined'
              />
              <div className={styles.selectFields}>
                <select
                  className='form-select'
                  style={editDriverStyles.selectFiled}
                  defaultValue={''}
                  aria-label="Default select example"
                  name="state"
                >
                  <option value="" disabled >State</option>
                  {statesArray.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <CommonTextfield
                width='100'
                id='zip'
                name='zip'
                type='number'
                label='Zip'
                variant='outlined'
              />
              <CommonTextfield
                width='100'
                id='cdl'
                name='cdl'
                type='text'
                label='CDL'
                variant='outlined'
              />
              <CustomTextField
                width='100'
                id='cdlIssue'
                name='cdlIssue'
                type='date'
                label='CDL Issued'
                variant='outlined'
              />

              <CustomTextField
                width='100'
                label='CDL Expiration'
                id='cdlExpire'
                name='cdlExpire'
                type='date'
                variant='outlined'
              />
              <CommonTextfield
                width='100'
                id='insurance'
                name='insurance'
                type='text'
                label='Insurance'
                variant='outlined'
              />
              <CustomTextField
                width='100'
                id='insuranceExpire'
                name='insuranceExpire'
                type='date'
                label='Insurance Expiration'
                variant='outlined'
              />
              <CommonTextfield
                width='100'
                id='commissionRate'
                name='commissionRate'
                end='%'
                type='number'
                label='Commission Rate'
                variant='outlined'
              />
              <CommonTextfield
                width='100'
                id='hourlyrate'
                name='hourlyrate'
                end='$'
                type='number'
                label='Hourly Rate'
                variant='outlined'
              />
            </div>
            <div className={styles.updateButton}>
              <Button variant="contained" style={editDriverStyles.btn}>
                UPDATE
              </Button>
            </div>
            <div className={styles.sessionDetail}>
              Last Session : {"No Session Found"}<br />
              Device: {"No Device Found"}<br />
              Browser : {"No Browser Found"}
            </div>
          </div>
          <div className={styles.flexitem2}>
            <div className={styles.title}>CDL</div>
            <Send
              width="100%"
              children={
                cdslImage ?
                  <img src={cdslImage}
                    alt='Selecte Logo'
                    className={styles.img}
                    onClick={handleClickOpen} /> :
                  <div
                    className={styles.imageContainer} onClick={handleClickOpen}
                  >
                    <AddPhotoAlternateIcon />
                    <span className={styles.imageDiscription}>JPEG,PNG,JPG,PDF</span>
                  </div>
              }
            />
            <div className={styles.title}>Medical Info</div>
            <Send
              width="100%"
              children={
                medicalImage ?
                  <img src={medicalImage}
                    className={styles.img}
                    alt='Selecte Logo'
                    onClick={handleClickOpenMedicalPopup} /> :
                  <div
                    className={styles.imageContainer} onClick={handleClickOpenMedicalPopup}
                  >
                    <AddPhotoAlternateIcon />
                    <span className={styles.imageDiscription}>JPEG,PNG,JPG,PDF</span>
                  </div>
              }
            />
          </div>
        </div>
      </Drawer>

    </>
  );
}

export default EditDriverDetail