import React, { useState } from 'react'
import styles from './addtruckform.module.scss'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CustomTextFiled from '../../Jobs/components/TextField/CustomTextFiled';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FilePopUp from '../../CreateAccount/Components/uploadPopUp';
import ImageUploadLogo from '@images/upload-image.svg';
import Send from '../../CreateAccount/Components/uploadFile/Send';
import { Button } from '@mui/material';


const Addtruckform = (props) => {
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
  const bodyStyle = {
    width: `calc(100% - ${props.open ? 290 : 0}px)`,
  }
  if (window.innerWidth <= 1300) {
    bodyStyle.width = '100%';
    var bodyclick = props.handleDrawerClose;
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
        onClick={props.textSelectorOpen ? props.toggleTextSelector : bodyclick}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.heading}>
              <Link to="/truck/all" className={styles.backLink}>
                <div className={styles.part1}>
                  <ArrowBackIcon fontSize="small" />
                  <span className={styles.backbtn}>Back to Truck</span>
                </div>
              </Link>
              <div className={styles.part2}>
                <div className={styles.headerText}>
                  <h4 className={styles.title}>Add Truck</h4>
                </div>
              </div>
            </div>
          </div>
          <form>
            <div className={styles.flexform}>
              <div className={styles.formpart1}>
                <div className={styles.width}>
                  <CustomTextFiled
                    id='Truck Number'
                    name='Truck Number'
                    type='trucknumber'
                    label='Truck Number'
                    placeholder='Truck Number'
                  />
                </div>
                <div className={styles.width}>
                  <CustomTextFiled
                    required
                    id=' vinNumber'
                    name='VIN Number'
                    type='VIN Number'
                    label='VIN Number'
                    placeholder='VIN Number'
                  />
                </div>
                <div className={styles.width}>
                  <InputLabel
                    sx={{
                      fontSize: '13px',
                      color: 'black'
                    }}
                    id="demo-simple-select-label"
                  >Status</InputLabel>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={10}

                      sx={{
                        maxHeight: 39 + 8,
                        marginBottom: '8px'
                      }}
                    >
                      <MenuItem value={10} >Active</MenuItem>
                      <MenuItem value={20}>Unactive</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={styles.width}>
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{
                      fontSize: '13px',
                      color: 'black'
                    }}
                  >Driver</InputLabel>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={10} 
                      sx={{
                        maxHeight: 39 + 8

                      }}
                    >
                      <MenuItem value={10} >No Driver </MenuItem>
                      <MenuItem value={20}> ABC</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={styles.width}>
                  <CustomTextFiled
                    id='truckcolor'
                    name='Truck Color'
                    type='text'
                    label='Truck Color'
                    placeholder='Truck Color'
                  />
                </div>
                <div className={styles.width}>
                  <CustomTextFiled
                    id='truckmake'
                    name='Truck Make'
                    type='text'
                    label='Truck Make'
                    placeholder='Truck Make'
                  />
                </div>
                <div className={styles.width}>
                  <CustomTextFiled
                    id='cost-rate'
                    name='Truck Model'
                    type='text'
                    label='Truck Model'
                    placeholder='Truck Model'
                  />
                </div>
                <div className={styles.width}>
                  <InputLabel
                    sx={{
                      fontSize: '13px',
                      color: 'black'
                    }}
                    id="demo-simple-select-label">
                    Assign Trailer
                  </InputLabel>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      sx={{
                        maxHeight: 39 + 8
                      }}
                    >
                      <MenuItem value={10} >xyz </MenuItem>
                      <MenuItem value={20}> ABC</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={styles.width}>
                  <CustomTextFiled
                    id='Year'
                    name='Year'
                    type='number'
                    label='Year'
                    placeholder='Year'
                  />
                </div>
                <div className={styles.width}>
                  <CustomTextFiled
                    id='date'
                    name='date'
                    type='date'
                    label='Insurance expiry'
                    placeholder='date'
                  />
                </div>
                <div className={styles.width2}>
                  <FormControlLabel sx={{
                    '& .css-ahj2mt-MuiTypography-root': {
                      fontSize: '14px'
                    },
                    '& .css-sb4zwo-MuiButtonBase-root-MuiCheckbox-root.Mui-checked': {
                      color: 'rgb(237, 202, 51);'
                    }

                  }} control={<Checkbox sx={{
                    '& .css-1r4i9sy-MuiButtonBase-root-MuiCheckbox-root.Mui-checked': {
                      color: 'yellow'
                    }
                  }} defaultChecked />} label="Is Dump Truck" />
                </div>

                <div className={styles.width3}>

                  <Button variant="contained" sx={{
                    backgroundColor: 'rgb(237, 202, 51)',
                    color: 'black',
                    fontWeight: '600',
                    padding: '6px 12px',
                    '&:hover': {
                      backgroundColor: 'rgb(237, 202, 51)',
                    },
                  }}>
                    Add Truck
                  </Button>
                </div>
              </div>

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
                      <span className={styles.imageDiscription}>Upload Your Image</span>
                    </div>
                }
              />
            </div>
          </form>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default Addtruckform