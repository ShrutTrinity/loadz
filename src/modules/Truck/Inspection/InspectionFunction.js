import React from 'react';
import styles from './style/function.module.scss';
import { TextField, InputAdornment, Avatar } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import TruckAvtar from "@images/truckIcon.svg";
import TrailerAvtar from "@images/TrailerIcon.svg";

const InspectionFunction = ({truckDetail}) => {

  return (
    <>
      <div className={styles.drawer}>

        <div className={styles.searchbar}>
          <TextField
            size="small"
            placeholder='Search Customers'
            variant="outlined"
            sx={{
              '& .css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root': {
                borderRadius: '20px',
              },
              '& .css-1ua80n0-MuiInputBase-input-MuiOutlinedInput-input': {
                padding: '5px'
              },
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 1px 2px;',
              border: 'none',
              flexGrow: 1,
              width: '100%',
              borderRadius: '20px',
              backgroundColor: 'white',
              '@media (max-width: 1200px)': {
                width: '100%',
                backgroundColor: 'white'
              }
            }}
            InputProps={{

              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'black' }} />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className={styles.profileTrucks}>
          Trucks
        </div>
        <div
          className={styles.truckList}
          onClick={truckDetail}
        >
          <div className={styles.truckAvtar}>
            <Avatar
              src={TruckAvtar}
              alt='Tk'
              sx={{
                height: '48px',
                width: '48px',
                fontWeight: 800,
                fontSize: '16px',
                color: 'black'
              }}
            />
          </div>
          <div className={styles.truckDetail}>
            <p className={styles.truckNo}>Trucks No.: 1</p>
            <p className={styles.truckNo}>Last Active:-</p>
            <p className={styles.truckNo}>Last Inspection:-</p>
          </div>
        </div>

        <div className={styles.profileTrucks}>
          Trailer
        </div>
        <div className={styles.truckList}>
          <div className={styles.truckAvtar}>
            <Avatar
              src={TrailerAvtar}
              alt='Tk'
              sx={{
                height: '48px',
                width: '48px',
                fontWeight: 800,
                fontSize: '16px',
                color: 'black'
              }}
            />
          </div>
          <div className={styles.truckDetail}>
            <p className={styles.truckNo}>Trucks No.: 122</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default InspectionFunction
