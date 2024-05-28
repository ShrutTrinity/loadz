import React from 'react';
import styles from './Styles/ArchiveDrawer.module.scss';
import { TextField, InputAdornment } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";

const ArchiveDrawer = () => {
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
        <div className={styles.title}>
          Subcontractors
        </div>
      </div>

    </>
  )
}

export default ArchiveDrawer;