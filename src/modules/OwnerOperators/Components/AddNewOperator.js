import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import CustomTextFiled from '@Jobs/components/TextField/CustomTextFiled';
import styles from '../styles/addNewOperator.module.scss'
import { Checkbox, InputLabel } from '@mui/material';
import { useState } from 'react';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import Send from '../../CreateAccount/Components/uploadFile/Send';


const AddNewOperator = (props) => {
  const [isChecked, setIsChecked] = useState(true);
  const [medicalImage, setMedicalImage] = useState(null);
  const [showMedicalUploadPopUp, setShowMedicalUploadPopUp] = useState(false);


  const handleClickOpenMedicalPopup = (event) => {
    event.stopPropagation();
    setShowMedicalUploadPopUp(true)
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
   
  };
  const statesArray = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida',
    'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
    'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
    'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  const dailogstyle = {
    title: {
      backgroundColor: 'black',
      fontSize: '30px',
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: '800',
      alignItems: 'center',
      color: 'white',
    }
  }

  const { open, handleClose } = props
  return (
    <>
      <Dialog
        sx={{
          '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
            maxWidth: 'unset',
            width: '95%'
          }
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={dailogstyle.title}>
          <div> {"Add New Owner Operator"}</div>
          <CloseIcon />
        </DialogTitle>
        <DialogContent sx={{ padding: 0 }}>
          <form className={styles.form}>
            <div className={styles.flexitem1}>
              <div className={styles.name}>
                <CustomTextFiled
                  name='name'
                  type='text'
                  label='Owner Opeator Legal Name (Payable to)'
                  placeholder='Enter Name as it should appear on check'
                />
              </div>
              <div className={styles.eni}>
                <CustomTextFiled
                  name='EIN#'
                  type='number'
                  label='EIN#'
                  placeholder='XX-XXXXXXX'
                />
              </div>
              <div className={styles.text}>or</div>
              <div className={styles.eni}>
                <CustomTextFiled
                  name='SSN#'
                  type='number'
                  label='EIN#'
                  placeholder='XX-XXXXXXX'
                />
              </div>
              <div className={styles.fname}>
                <CustomTextFiled
                  name='name'
                  type='text'
                  label='First Name'
                  placeholder='Company Owner Name'
                />
              </div>
              <div className={styles.m}>
                <CustomTextFiled
                  name='m'
                  type='text'
                  label='M'
                />
              </div>
              <div className={styles.fname}>
                <CustomTextFiled
                  name='name'
                  type='text'
                  label='Last Name'
                />
              </div>
              <div className={styles.suffix}>
                <CustomTextFiled
                  name='suffix'
                  type='text'
                  label='Suffix'
                  placeholder='Jr.'
                />
              </div>
              <div className={styles.width25}>
                <CustomTextFiled
                  name='address'
                  type='text'
                  label='Address'
                  placeholder='Address'
                />
              </div>
              <div className={styles.width25}>
                <CustomTextFiled
                  name='city'
                  type='text'
                  label='City'
                  placeholder='City'
                />
              </div>
              <div className={styles.width25}>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{
                    fontSize: '13px',
                    color: 'black'
                  }}
                >State</InputLabel>
                <select
                  label='State'
                  className="form-select"
                  style={{ borderColor: '#c4c4c4', padding: '13px 14px 13px 10px', fontSize: '13px' }}
                  aria-label="Default select example"
                  name="state"

                >
                  <option value="" selected disabled >State</option>
                  {statesArray.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.width25}>
                <CustomTextFiled
                  name='zip'
                  type='number'
                  label='Zip'
                  placeholder='Jr.'
                  required
                />
              </div>
              <div className={styles.width50}>
                <CustomTextFiled
                  name='phone'
                  type='number'
                  label='Phone'
                  placeholder='Phone'

                />
              </div>
              <div className={styles.width50}>
                <CustomTextFiled
                  name='email'
                  type='number'
                  label='Email'
                  placeholder='Email'
                  required
                />
              </div>
              <div className={styles.create}>
                <Button className={styles.btn}>
                  Create
                </Button>
              </div>
            </div>
            <div className={styles.hrLine}></div>
            <div className={styles.flexitem2}>
              <div className={styles.checkbox}>
                <Checkbox
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{
                    fontSize: '15px',
                    color: 'black',
                    padding: '9px 0'
                  }}
                >
                  Check here if <b>Owner Operator</b> is under<br /> your authority (insurance)
                </InputLabel>
              </div>
              <div className={styles.width50}>
                <CustomTextFiled
                  name='email'
                  type='email'
                  label='Email'
                  placeholder='Email'
                  required
                  disabled={!isChecked}
                />
              </div>
              <div className={styles.width50}>
                <CustomTextFiled
                  name='email'
                  type='email'
                  label='Email'
                  placeholder='Email'
                  required
                  disabled={!isChecked}
                />
              </div>
              <div className={styles.addfilepopup}>
              <Send
              width="100%"
              children={
                medicalImage ?
                  <img src={medicalImage}
                    className={styles.img}
                    alt='Selecte Logo'
                    onClick={handleClickOpenMedicalPopup} /> :
                  <div className={styles.imageContainer} onClick={handleClickOpenMedicalPopup}
                  >
                    <NoteAddOutlinedIcon />
                    <span className={styles.imageDiscription}>JPEG,PNG,JPG,PDF</span>
                  </div>
              }
            />
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddNewOperator
