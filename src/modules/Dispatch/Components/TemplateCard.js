import React from 'react';
import styles from '../style/TampleteCard.module.scss'
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const TemplateCard = ({ headingName }) => {

  const labelName = `Search ${headingName}`
  return (
    <>
      <div className={styles.driverHeading}>
        <span className={styles.headingText}>{headingName}</span>
        <div className={styles.searchCover}>
          <TextField
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(0, 0, 0, 0.23)',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'rgb(237, 202, 51)',
              },
            }}
            id="outlined-search"
            label={labelName}
            type="search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
      <hr className={styles.hrTag}></hr>
    </>
  )
}

export default TemplateCard;