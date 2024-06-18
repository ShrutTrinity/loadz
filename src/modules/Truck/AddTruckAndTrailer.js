import React from 'react';
import styles from './styles/truck.module.scss';
import {
  Button,
  InputAdornment,
  TextField,
} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import Index from '../Jobs/components/switchForJob';
import Data from './truckDetail.json';
import { Link } from 'react-router-dom';

const allRouteStyle = {
  headerButton: {
    background: 'rgb(237, 202, 51)',
    color: 'rgb(0,0,0)',

    borderRadius: '10px',
    fontWeight: '700',
    padding: '5px 15px',
    fontSize: '15px',
    textTransform: 'capitalize'
  },

  cardFunctionButton: {
    fontSize:'13px',
    color: 'black',
    padding: '10px 5px  ',
    width: '100%',
    fontWeight: '600',
    borderRadius: '10px',
    textTransform: 'uppercase',
    border: '0.5px solid black',
  }
}

const AddTruckAndTrailer = (props) => {

  const bodyStyle = {
    width: `calc(100% - ${props.open ? 290 : 0}px)`,
  }
  if (window.innerWidth <= 1300) {
    bodyStyle.width = '100%';
    var bodyclick = props.handleDrawerClose;
  }

  return (
    <>
      <div className={styles.container} style={bodyStyle} onClick={props.textSelectorOpen ? props.toggleTextSelector : bodyclick}>
        <div className={styles.header}>
          <div className={styles.bottomHeader}>
            <div className={styles.heading}>
              Truck
            </div>
            <TextField
              size="small"
              placeholder='Search Truck'
              sx={{
                flexGrow: 1,
                borderRadius: '10px',
                maxWidth: '40%',
                '@media (max-width: 652px)': {
                  maxWidth: '100%'
                }
              }}
              InputProps={{
                sx: {
                  backgroundColor: 'white'
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
            />
            <div className={styles.headerButton}>
              <Link to='/truck/modal' >
                <Button
                  style={allRouteStyle.headerButton}
                  variant="contained"
                >
                  Add Trucks
                </Button>
              </Link>
              <Link to='/Typehaul/all'>
                <Button
                  style={allRouteStyle.headerButton} variant="contained">
                  Add Trailer
                </Button>
              </Link>
            </div>

          </div>
        </div>

        <div className={styles.bodyContainer}>
          <div className={styles.content}>
            <Index
              label="Archive"
            />
            <div className={styles.cards}>
              {Data.map((item, index) => (
                <div className={styles.card} key={index}>
                  <h3 className={styles.cardHeading}>Truck No: {index + 1}</h3>
                  <div className={styles.cardContent}>
                    <div className={styles.cardImage}>
                      <img src={item.url} alt='tractor Fram' />
                    </div>
                    <div className={styles.cardData}>
                      <div className={styles.cardValue}>
                        VIN : {item.VIN}
                      </div>
                      <div className={styles.cardValue}>
                        Status:{item.Status}
                      </div>
                      <div className={styles.cardValue}>
                        Year : {item.Year}
                      </div>
                      <div className={styles.cardValue}>
                        Make : {item.Make}
                      </div>
                      <div className={styles.cardValue}>
                        Model : {item.Model}
                      </div>
                      <div className={styles.cardValue}>
                        Color:{item.Color}
                      </div>
                      <div className={styles.cardValue}>
                        Insurance Expiry on:{item.InsuranceEnd}
                      </div>
                    </div>

                    <div className={styles.cardFunctionality}>
                      <div className={styles.functionButton}>
                        <Button style={allRouteStyle.cardFunctionButton} variant="outlined">Fuel Logs</Button>
                      </div>
                      <div className={styles.functionButton}>
                        <Button style={allRouteStyle.cardFunctionButton} variant="outlined">Inspection</Button>
                      </div>
                      <div className={styles.functionButton}>
                        <Button style={allRouteStyle.cardFunctionButton} variant="outlined">Infractions</Button>
                      </div>
                      <div className={styles.functionButton}>
                        <Button style={allRouteStyle.cardFunctionButton} variant="outlined">Edit Truck</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddTruckAndTrailer;