import React from 'react';
import styles from './styles/truck.module.scss';
import {
  Button,
  FormControl,
  InputAdornment,
  TextField,
} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import Index from '../Jobs/components/switchForJob';

const allRouteStyle = {
  headerButton: {
    background: 'rgb(237, 202, 51)',
    color: 'rgb(0,0,0)',
    borderRadius: '10px',
    fontWeight: '700',
    padding: '10px 40px',
    fontSize: '15px',
    textTransform: 'capitalize'
  },

  cardFunctionButton: {
    color:'black',
    padding:'10px',
    width:'100%',
    borderRadius:'10px',
    textTransform:'uppercase',
    border:'0.5px solid black',
  }
}


const AddTruckAndTrailer = () => {
  return (



    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.heading}>
            Truck
          </div>
          <div className={styles.bottomHeader}>
            <div className={styles.headerButton}>
              <Button
                style={allRouteStyle.headerButton}
                variant="contained"
              >
                Add Trucks
              </Button>
              <Button
                style={allRouteStyle.headerButton}
                variant="contained"
              >
                Add Trailer
              </Button>
            </div>
            <FormControl
              sx={{
                width: '33.33%',
                border: '1px solid black',
                borderRadius: '10px',
                position: 'relative',
              }}
            >
              <TextField
                size="large"
                placeholder='Search Truck'
                // value={searchValue}
                // onChange={handleChange}
                sx={{
                  flexGrow: 1,
                  borderRadius: '10px',
                  background: 'white',
                  '@media (max-width: 1200px)': {
                    marginBottom: '16px',
                    width: '100%'
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  )
                }}
              />
            </FormControl>
          </div>
        </div>

        <div className={styles.bodyContainer}>
          <div className={styles.content}>
            <Index
              label="Archive"
            />
            <div className={styles.cards}>
              <div className={styles.card}>
                <h3 className={styles.cardHeading}>Truck No: 1</h3>
                <div className={styles.cardContent}>
                  <div className={styles.cardImage}>
                    hii
                  </div>
                  <div className={styles.cardValue}>
                    name : shrut
                  </div>
                  <div className={styles.cardFunctionality}>
                  <div className={styles.functionButton}>
                    <Button style={allRouteStyle.cardFunctionButton} variant="outlined">Outlined</Button>
                  </div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardHeading}>Truck No: 1</h3>
                <div className={styles.cardContent}>
                  <div className={styles.cardImage}>
                    hii
                  </div>
                  <div className={styles.cardValue}>
                    name : shrut
                  </div>
                  <div className={styles.cardFunctionality}>
                  <div className={styles.functionButton}>
                    <Button style={allRouteStyle.cardFunctionButton} variant="outlined">Outlined</Button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddTruckAndTrailer;