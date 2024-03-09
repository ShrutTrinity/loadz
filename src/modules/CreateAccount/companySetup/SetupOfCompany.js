import React, { useState} from 'react'
import CustomStepper from '../Components/stepper/CustomStepper'
import BoxComponent from '../Components/formBox/Box'
import styles from './styles/setup.module.scss'
import Video from '../Components/videotag'
import CustomTextField from '../../../components/textfield/CustomeTextfield'
import companyLogoImage from '../../../images/upload_logo.svg';
import Send from '../Components/uploadFile/Send';
import FilePopUp from '../Components/uploadPopUp';
import { getValidationSchemaforsecond } from '../../../validation/validationshema'
import { useFormik } from 'formik';
import useVideoPopup from '../../../hooks/useVideoPopupSecond'
import CommonForm from '../Components/form/CommonForm'
import Checkbox from '@mui/material/Checkbox';
import { grey } from '@mui/material/colors'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import NorequiredTextField from '../../../components/textfield/NorequiredTextfield'
import Preference from '../setupPreference/Preference'

const statesArray = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida',
  'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
  'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
  'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];
  
const SetupOfCompany = () => {
  
  
  const { isPopupOpen, handleToggle } = useVideoPopup();
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [contactCount, setContactCount] = useState(1);
  const [gopreference, setGopreference] = useState(false);


  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      position: '',
      companyName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      cemail: '',
      condition: false,
    },
    validationSchema: getValidationSchemaforsecond,
    onSubmit: (values) => {
      setGopreference(true)
    },
  });


  const handleInputChange = (event) => {
    const inputValue = event.target.value.replace(/\D/g, '');

    let formattedNumber;
    if (inputValue.length === 10) {
      formattedNumber = `(${inputValue.slice(0, 3)}) ${inputValue.slice(3, 6)}-${inputValue.slice(6, 10)}`;
    } else {
      formattedNumber = inputValue;
    }

    // Set the formatted number back to the formik field
    formik.setFieldValue('phone', formattedNumber);

    // If you need to validate on change, you can manually trigger validation
    formik.validateField('phone');
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

  const handleClick = () => {
    handleToggle();
  };
  const handleAddContact = () => {
    setContactCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      {
        isPopupOpen && <Video
          className={styles.popup}
          setIsOpen={handleToggle}
          srcLink='https://player.vimeo.com/video/785867516'
          title='SETUP PREFERENCES'
          discription='Company Setting for Sales Tax, Commission Rates, Waiting Time Rates, and Automatic Invoice time'
        />
      }
      {showPopUp && <FilePopUp
        imageUrlforPopUp={selectedImage || companyLogoImage}
        onSelect={handleImageSelect}
        onClose={handleClosePop}
      />}

      {gopreference ?
        <Preference /> :
        <div>
          <CustomStepper currentstep='2' />
          <BoxComponent className={styles.mainContainer}
            handleClick={handleClick}
            children1={
              <h2 className={styles.heading}>COMPANY SETUP</h2>
            }
            children3={
              <form onSubmit={formik.handleSubmit} >
                <div className={styles.mainDiv}>
                  <div className={styles.firstHalf}>
                    <CustomTextField
                      name='companyName'
                      label="Company Name"
                      formik={formik}
                      placeholder="Company Name"
                      type="text"
                    />
                    <div style={{ color: 'red', marginTop: '-16px', marginBottom: '16px', fontSize: '12px' }}>
                      {formik.touched.companyName && formik.errors.companyName}
                    </div>
                    <NorequiredTextField
                      name='businessName'
                      label="Business Name (DBA)"
                      placeholder="Business Name (DBA)"
                      type="text"
                    />
                    <div className={styles.combiner}>
                      <div className={styles.Address}>
                        <CustomTextField
                          name='address'
                          label="Address"
                          formik={formik}
                          placeholder="Address"
                          type="text"
                        />
                        <div style={{ color: 'red', marginTop: '-16px', marginBottom: '16px', fontSize: '12px' }}>
                          {formik.touched.address && formik.errors.address}
                        </div>
                      </div>
                      <div className={styles.Address}>
                        <CustomTextField
                          name='city'
                          formik={formik}
                          label="City"
                          placeholder="City"
                          type="text"
                        />
                        <div style={{ color: 'red', marginTop: '-16px', marginBottom: '0px', fontSize: '12px' }}>
                          {formik.touched.city && formik.errors.city}
                        </div>

                      </div>
                      <div>
                        <div className={styles.selector}>
                          <label className={styles.formLabel1}>State<span className={styles.requiredAll}>*</span></label>
                          <select
                          
                            className="form-select"
                            style={{  borderColor: '#c4c4c4',padding: '13px 14px 13px 10px',fontSize:'13px' }}
                            aria-label="Default select example"
                            name="state"
                            {...formik.getFieldProps('state')}
                          >
                            <option value="" selected disabled >Select a State</option>
                            {statesArray.map((state, index) => (
                              <option key={index} value={state}>
                                {state}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div style={{ color: 'red', marginTop: '0px', marginBottom: '16px', fontSize: '12px' }}>
                          {formik.touched.state && formik.errors.state}
                        </div>
                      </div>
                      <div >
                        <div className={styles.zipCode}>
                          <CustomTextField
                            name='zip'
                            formik={formik}
                            label="Zip"
                            placeholder="Zip"
                            type="text"
                          />
                        </div>
                        <div style={{ color: 'red', marginTop: '-16px', marginBottom: '16px', fontSize: '12px' }}>
                          {formik.touched.zip && formik.errors.zip}
                        </div>
                      </div>
                    </div>
                    <div className={styles.combiner}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}> <lable className={styles.telephone}> Telephone <span className={styles.requiredAll}>*</span></lable>
                        <TextField
                          name='phone'
                          onChange={(e) => {
                            formik.handleChange(e);
                            handleInputChange(e);
                          }}
                          placeholder='phone'
                          InputProps={{
                            maxLength: 10,
                            inputProps: {
                              sx: {
                                padding: '12px 14px',
                                '@media (max-width: 600px)': {
                                  padding: '8px 14px',

                                },
                              },

                            }
                          }}
                          value={formik.values.phone}
                          onBlur={formik.handleBlur}
                        />

                        <div style={{ color: 'red', marginBottom: '16px', fontSize: '12px' }}>
                          {formik.touched.phone && formik.errors.phone}
                        </div>
                      </div>
                      <div>
                        <CustomTextField
                          name='cemail'
                          formik={formik}
                          label="Company Email"
                          placeholder="Email of company"
                          type="tel"
                        />

                        <div style={{ color: 'red', marginTop: '-16px', marginBottom: '16px', fontSize: '12px' }}>
                          {formik.touched.cemail && formik.errors.cemail}
                        </div>
                      </div>
                    </div>
                    <h2 className={styles.heading}>COMPANY CONTACT</h2>
                    {[...Array(contactCount)].map((index) => (
                      <CommonForm key={index} formik={formik} />
                    ))}
                  </div>
                  <Send className={styles.uploadimg} children={selectedImage ? <img src={selectedImage} alt='Selecte persion' onClick={handleClickOpen} /> : <img src={companyLogoImage} alt='Default Company logo' onClick={handleClickOpen} />} />
                </div>
                <div className={styles.contain1}>
                  <span>
                    <Checkbox
                      defaultChecked
                      required

                      name='condition'
                      sx={{
                        marginLeft: '-0.5rem',
                        color: grey[900],
                        '&.Mui-checked': {
                          color: grey[900],
                        },
                        transform: 'scale(0.7)'
                      }}
                      {...formik.getFieldProps('condition')}
                    />
                  </span>

                  <lable className={styles.conditions}>I agree to receive 2FA codes, account notifications, and app download links from Loadz Online LLC via Twilio. I understand multiple messages may be sent monthly. Standard data rates might apply. Reply 'STOP' to opt-out.</lable>

                </div>
                <div style={{ color: 'red', margin: '-15px 0 16px 30px', marginBottom: '16px', fontSize: '12px' }}>
                  {formik.touched.condition && formik.errors.condition}
                </div>
                <div className={styles.flexitems}>
                    <div className={styles.add}>
                      <span className={styles.plusicon} onClick={handleAddContact}>+</span>
                      Add another content
                    </div>

                  <Button variant="contained"
                    type='submit'
                    onSubmit={formik.handleSubmit}
                    sx={{
                      backgroundColor: 'black',
                      fontSize: '18px',
                      '&:hover': {
                        background: "black",
                      }

                    }}>Next</Button>
                </div>
              </form>

            }
          />
        </div>}
    </>
  )
}

export default SetupOfCompany