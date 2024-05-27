import * as React from 'react';
import styles from './Styles/editOwnerOperatorDetail.module.scss'
import Drawer from '@mui/material/Drawer';
import CustomTextField from '@Jobs/components/TextField/CustomTextFiled.js'
import { Button, InputLabel } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import FileUpload from '../FileUpload';
const EditOwnerOperator = (props) => {

  const statesArray = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida',
    'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
    'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
    'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  const [showIdentification, setShowIdentification] = useState(false);
  const [showSocialSecurity, setShowSocialSecurity] = useState(false);
  

  const handleFileSelect1 = (fileURL, file) => {
    console.log('File selected for the first FileUpload component:', file);
  };
  const handleFileSelect2 = (fileURL, file) => {

    console.log('File selected for the second FileUpload component:', file);
  };
  const handleFileSelect3 = (fileURL, file) => {

    console.log('File selected for the second FileUpload component:', file);
  };


  const handleToggleIdentificationVisibility = () => {
    setShowIdentification((prevShowPassword) => !prevShowPassword);
  };
  const handleToggleSocialSecurityVisibility = () => {
    setShowSocialSecurity((prevShowPassword) => !prevShowPassword);
  };

  const editOwnerOperatorStyles = {
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
      fontSize: '18px',
      fontWeight: '400',
      borderRadius: '10px',
      width: '200px',
    },
    invitationbtn:{
      backgroundColor: 'rgb(237, 202, 51)',
      padding: '2px 0px',
      textTransform:'none',
      fontSize: '14px',
      margin: '10px 0',
      color:'black',
      borderRadius: '40px',
      fontWeight: '300',
      width: '360px',
    }
  }

  return (
    <>

      <Drawer sx={{ '& .css-1160xiw-MuiPaper-root-MuiDrawer-paper ': { width: '55% !important' } }}
        anchor='right'
        open={props.open}
        onClose={props.onClose}
      >
        <div className={styles.container}>
          <div className={styles.flexitem1}>
            <div className={styles.headingContainer}>
              <h2 className={styles.heading}>Edit Owner Operator</h2>
            </div>
            <div className={styles.details}>
              <CustomTextField
                width='100'
                id='Companyname'
                name='Company Name'
                required
                type='text'
                label='Company Name'
                variant='outlined'
              />
              <CustomTextField
                width='100'
                id='email'
                name='email'
                type='email'
                label='Email'
                variant='outlined'
              />
              <CustomTextField
                width='100'
                id='phonenumber'
                name='phonenumber'
                type='number'
                required
                label='Phone Number'
                variant='outlined'
              />
              <CustomTextField
                width='100'
                id='address'
                name='address'
                type='text'
                label='Address'
                variant='outlined'
              />
              <CustomTextField
                width='100'
                id='city'
                name='city'
                type='text'
                label='City'
                variant='outlined'
              />
              <div className={styles.selectFields}>
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
                  style={{ borderColor: '#c4c4c4', padding: '13px 14px 13px 10px', fontSize: '13px', marginBottom: '10px' }}
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
              <CustomTextField
                width='100'
                id='zip'
                name='zip'
                type='number'
                label='Zip'
                variant='outlined'
              />
              <CustomTextField
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
              <CustomTextField
                width='100'
                id='insuranceExpire'
                name='identification'
                type={showIdentification ? 'text' : 'password'}
                label='Employee Identification #'
                variant='outlined'
                children4={<InputAdornment position="end">
                  <IconButton
                    aria-label="toggle Identification visibility"
                    onClick={handleToggleIdentificationVisibility}
                    edge="end"
                  >
                    {showIdentification ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>}
              />
              <CustomTextField
                width='100'
                id='insuranceExpire'
                name='identification'
                type={showSocialSecurity ? 'text' : 'password'}
                label='Social Security #'
                variant='outlined'
                children4={<InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleToggleSocialSecurityVisibility}
                    edge="end"
                  >
                    {showSocialSecurity ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>}
              />
            </div>
            <div className={styles.invitationButton}>
              <Button variant="contained" style={editOwnerOperatorStyles.invitationbtn}>
                Invitation to Graduation
              </Button>
            </div>
            <div className={styles.updateButton}>
              <Button variant="contained" style={editOwnerOperatorStyles.btn}>
                UPDATE
              </Button>
            </div>
           
          </div>
          <div className={styles.flexitem2}>
            <FileUpload id="fileInput1" disabled= {true} onFileSelect={handleFileSelect1} text='Upload Owner Operator Logo' height='300' width='300' />
            <FileUpload id="fileInput2" disabled= {true} onFileSelect={handleFileSelect2} text='Upload Insurance' height='300' width='300' />
            <FileUpload id="fileInput3" disabled= {true} onFileSelect={handleFileSelect3} text='Upload W-9' height='300' width='300' />
          </div>
        </div>
      </Drawer>

    </>
  );
}

export default EditOwnerOperator