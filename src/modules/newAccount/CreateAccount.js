import React, { useState } from 'react'
import CustomStepper from '../../components/stepper/CustomStepper'
import BoxComponent from '../../components/formBox/Box';
import Logo from '../../images/loadzlogo.png';
import styles from './styles/new.module.scss';
import EmailIcon from '@mui/icons-material/Email';
import { grey } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import persionImage from '../../images/uploadpicture.svg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link as RouterLink } from 'react-router-dom';
import Send from '../../components/uploadFile/Send';
import FilePopUp from '../../components/uploadPopUp';
import useVideoPopup from '../../hooks/useVideopopup'
import Video from '../../components/videotag'
import CustomTextField from '../../components/textfield/CustomeTextfield';
import Otppage from '../OTP/Otppage';

const CreateAccount = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [optPopup, setOtpPopUp] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleClickOpen = (event) => {
    event.stopPropagation();
    setShowPopUp(true)
  };
  const handleClosePop = () => {
    setShowPopUp(false);
  }
  const handleImageSelect = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowPopUp(false)
  };

  const { isPopupOpen, handleToggle } = useVideoPopup();
  const handleClick = () => {
    handleToggle();
  };

  const handleOtpPopup = () => {
    setOtpPopUp(!optPopup)
  }

  return (
    <>
      {isPopupOpen && <Video
        className={styles.popup}
        setIsOpen={handleToggle}
        srcLink='https://player.vimeo.com/video/785867491'
        title='COMPANY SETUP'
        discription='Create your companys administrators account'

      />}
      {showPopUp && <FilePopUp imageUrlforPopUp={selectedImage || persionImage} onSelect={handleImageSelect} onOpen={handleClickOpen} onClose={handleClosePop}/>}

 <CustomStepper currentstep='1'  /> 
      <BoxComponent className={styles.mainContainer}   handleClick={handleClick}
        children1={
          <img src={Logo} className={styles.loadzLogo} alt='logo' />
        }
        children2={''}
        children3={
          <form>
            <div className={styles.mainDiv}>
              <div className={styles.firstHalf}>
                <CustomTextField
                  label="Enter Address"
                  placeholder="Enter Email"
                  type="email"
                  children4={
                    <div className={styles.icon}>
                      <EmailIcon />
                    </div>
                  }
                />
                <div className={styles.combiner}>
                  <div className={styles.combine1}>
                    <CustomTextField
                      label="First Name"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className={styles.combine2}>
                    <CustomTextField
                      label="Last Name"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <CustomTextField
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  children4={
                    <div style={{ cursor: 'pointer' }} onClick={togglePasswordVisibility}>
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </div>
                  }
                />
                <div className={styles.bottomContainer}>
                  <div className={styles.content1}>
                    <span>
                      <Checkbox
                        // {...formik.getFieldProps('rememberMe')}
                        sx={{
                          marginLeft: '-0.5rem',
                          color: grey[900],
                          '&.Mui-checked': {
                            color: grey[900],
                          },
                          transform: 'scale(0.7)'
                        }}
                      />
                    </span>
                    <RouterLink to='/terms'>I have read and accepted the Loadz Online LLC Terms and Conditions</RouterLink>
                  </div>
                  <div className={styles.content1}>
                    <span>
                      <Checkbox
                        // {...formik.getFieldProps('rememberMe')}
                        sx={{
                          marginLeft: '-0.5rem',
                          color: grey[900],
                          '&.Mui-checked': {
                            color: grey[900],
                          },
                          transform: 'scale(0.7)'
                        }}
                      />
                    </span>
                    <RouterLink to='/privacy'>I have read and accepted the Loadz Online LLC Privacy Policy</RouterLink>
                  </div>
                </div>
                <div className={styles.button1}>
                  <Button
                    type='submit'
                    variant='contained'
                    sx={{
                      backgroundColor: 'black',
                      fontSize: '16px',
                      fontWeight: '700',
                      ':hover': { backgroundColor: 'black' },
                      borderRadius: '5px',
                      width: '224px',
                      marginTop: '1rem',
                      margin: '0 0rem'
                    }}
                    onSubmit={handleOtpPopup}
                  >
                    CREATE AN ACCOUNT
                  </Button>
                </div>
                <div className={styles.bottomLink}>
                  <span>Already have an account?</span>&nbsp;
                  <a href='/'>Login</a>
                </div>
              </div>
              <Send children={selectedImage ? <img src={selectedImage} alt='Selecte persion' onClick={handleClickOpen} /> : <img src={persionImage} alt='Default Person logo' onClick={handleClickOpen} />} />
            </div>
          </form>
        }
      />
    </>
  )
}

export default CreateAccount
