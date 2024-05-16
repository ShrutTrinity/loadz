import React, { useState } from 'react';
import styles from './style/newFuelLog.module.scss';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Checkbox, FormControlLabel, TextField, Box, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs'
import CustomTextFiled from '../../../../Jobs/components/TextField/CustomTextFiled';
import Send from '../../../../CreateAccount/Components/uploadFile/Send';
import FilePopUp from '../../../../CreateAccount/Components/uploadPopUp';
import ImageUploadLogo from '@images/upload-image.svg';

const currentDate = dayjs();

const TrafficShopStyle = {
  button: {
    background: 'rgb(0,0,0)',
    color: 'rgb(255,255,255)',
    fontSize: '13px',
    fontWeight: '300',
    margin: '3px 6px',
    borderRadius: '18px',
    lineHeight: '0px',
    textTransform: 'capitalize'
  },
  selectedTab: {
    color: 'rgb(237, 202, 51)',
    textTransform: 'capitalize'
  },
  selectFiled: {
    borderColor: '#c4c4c4',
    padding: '17px 14px 17.5px 10px',
    fontSize: '13px',
    width: '100%',
    '& label.Mui-focused': {
      color: 'white',
    },
  },
}

const truckArray = [
  'jhon', 'micle', 'sweed'
];

const driverArray = [
  'jhon', 'micle', 'sweed'
];

const NewFuelLog = ({ open, handleDrawerClose, textSelectorOpen, toggleTextSelector }) => {

  const [value, setValue] = useState('1');
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleClosePop = () => {
    setShowPopUp(false);
  }

  const handleImageSelect = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowPopUp(false)
  };

  const handleClickOpen = (event) => {
    event.stopPropagation();
    setShowPopUp(true)
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const bodyStyle = {
    width: `calc(100% - ${open ? 290 : 0}px)`,
  }
  if (window.innerWidth <= 1300) {
    bodyStyle.width = '100%';
    var bodyclick = handleDrawerClose;
  }

  return (
    <>
      {showPopUp && <FilePopUp
        imageUrlforPopUp={selectedImage || ImageUploadLogo}
        onSelect={handleImageSelect}
        onClose={handleClosePop}
      />}
      <div
        className={styles.body}
        style={bodyStyle}
        onClick={textSelectorOpen ? toggleTextSelector : bodyclick}
      >
        <div className={styles.header}>
          <div className={styles.heading}>
            <Link to="/mileages/logs" className={styles.backLink}>
              <div className={styles.part1}>
                <ArrowBackIcon fontSize="small" />
                <span className={styles.backText}>Fuel Log</span>
              </div>
            </Link>
            <div className={styles.part2}>
              <div className={styles.headerText1}>
                <h4>Fuel Log</h4>
              </div>
            </div>
          </div>

          <div className={styles.headerButtonCover}>
            <Button
              variant="contained"
              style={TrafficShopStyle.button}
              startIcon={<DeleteIcon />}
            >Remove
            </Button>
            <Button
              variant="contained"
              style={TrafficShopStyle.button}
              startIcon={<AddCircleOutlineIcon />}
            >Create
            </Button>
          </div>

        </div>

        <Box sx={{ width: '100%', typography: 'body1', pt: '25px' }}>
          <TabContext value={value}>
            <Box sx={{
              borderBottom: 1,
              borderColor: 'divider',
            }}>
              <TabList onChange={handleChange}>
                <Tab
                  label="Fuel Log Detail"
                  value="1"
                  style={
                    value === '1'
                      ? { ...TrafficShopStyle.selectedTab }
                      : null
                  }
                />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ padding: '24px' }}>

              <div className={styles.bodyCover}>
                <div className={styles.firstContainer}>

                  <div className={styles.selectionField}>
                    {/* 1st */}
                    <div className={styles.driverSelection}>
                      <label className={styles.labelOfSelection}>
                        Driver:
                      </label>
                      <select
                        className='form-select'
                        style={TrafficShopStyle.selectFiled}
                        defaultValue={''}
                        aria-label="Default select example"
                        name="state"
                        required
                      >
                        <option></option>
                        {truckArray.map((state, index) => (
                          <option key={index} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* 2nd */}
                    <div className={styles.truckSelection}>
                      <label className={styles.labelOfSelection}>
                        Trucks:
                      </label>
                      <select
                        className='form-select'
                        style={TrafficShopStyle.selectFiled}
                        defaultValue={''}
                        aria-label="Default select example"
                        name="state"
                        required
                      >
                        <option></option>
                        {driverArray.map((state, index) => (
                          <option key={index} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={styles.mileageField}>
                    <TextField
                      sx={{
                        mt: '16px',
                        background: 'rgb(255,255,255)',
                        fontSize: '13px',
                        width: '100%'
                      }}
                      required
                      label="Trafic Stop Razon"
                    />
                  </div>

                  <div className={styles.dateMileageFeild}>
                    <label className={styles.labelOfSelection}>
                      Date Mileage:
                    </label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker
                          defaultValue={currentDate}
                          sx={{
                            background: 'rgb(255,255,255)',
                            width: '100%',
                          }}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>

                  <div className={styles.mileageField}>
                    <TextField
                      sx={{
                        mt: '16px',
                        background: 'rgb(255,255,255)',
                        fontSize: '13px',
                        width: '100%'
                      }}
                      label="Fuel Qty Gallons"
                    />
                  </div>

                  <div className={styles.dateMileageFeild}>
                    <label className={styles.labelOfSelection}>
                      Fuel Rates
                    </label>
                    <CustomTextFiled
                      type='number'
                      name="fuelRate"
                      placeholder="$ 0.0"
                    />
                  </div>

                  <div className={styles.term}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: 'black',
                            '&.Mui-checked': {
                              color: 'rgb(237,202,51)',
                            },
                          }}
                        />
                      }
                      label="Diesel Exhaust Fluid"
                    />
                  </div>

                </div>
                <div className={styles.secondContainer}>
                  <Send
                  width="33.33%" 
                    children={
                      selectedImage ?
                        <img src={selectedImage}
                          alt='Selecte Logo'
                          
                          onClick={handleClickOpen} /> :
                        <div
                          className={styles.imageContainer}
                        >
                          <img
                            src={ImageUploadLogo}
                            alt='Default Upload logo'
                            onClick={handleClickOpen}     
                          />                 
                        </div>
                    }
                  />
                </div>
              </div>

            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </>
  )
}

export default NewFuelLog;