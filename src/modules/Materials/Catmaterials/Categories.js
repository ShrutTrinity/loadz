import React from 'react';
import styles from './styles/catmaterials.module.scss';
import {
  Button,
  FormControl,
  InputAdornment,
  TextField,
} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';

const allStyle = {
  button: {
    background: 'rgb(0,0,0)',
    color: 'rgb(255,255,255)',
    fontSize: '13px',
    fontWeight: '300',
    margin: '3px 6px',
    borderRadius: '18px',
    textTransform: 'capitalize',
  },
  clearIcon: {
    cursor: 'pointer'
  },
  switchLable: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: '13px',
    marginRight: '8px',
  },
  switchLable2: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: '13px',
    marginLeft: '-16px',
    marginRight: '16px',
  }
}

const Categories = (props) => {

  const { handleDrawerClose, textSelectorOpen, toggleTextSelector, open } = props;

  const bodyStyle = {
    width: `calc(100% - ${open ? 290 : 0}px)`,
  }
  if (window.innerWidth <= 1300) {
    bodyStyle.width = '100%';
    var bodyclick = handleDrawerClose;
  }

  return (
    <>
      <div className={styles.body} style={bodyStyle} onClick={textSelectorOpen ? toggleTextSelector : bodyclick}>
        <div className={styles.headerPart}>
          <div className={styles.headerName}>
            <CategoryIcon className={styles.blockIcon} />
            <span className={styles.headerText}>Category List</span>
          </div>

          <div className={styles.search}>
            <FormControl
              sx={{
                width: '100%',
                position: 'relative',
              }}
            >
              <TextField
                size="small"
                placeholder='Search'
                variant="outlined"
                sx={{
                  padding: '8px',
                  "& fieldset": { border: 'none' },
                  "& input::placeholder": {
                    fontSize: "13px",
                  },
                  '& .css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root': {
                    borderRadius: '20px',
                  },
                  '& .css-1ua80n0-MuiInputBase-input-MuiOutlinedInput-input': {
                    padding: '5px'
                  },
                  boxShadow: ' rgba(0, 0, 0, 0.2) 4px 4px 4px',
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
                    <>
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: 'black' }} />
                      </InputAdornment>
                    </>
                  )
                }}
              />
            </FormControl>
          </div>
          <div className={styles.buttonsContainer}>
            <Link to='/'>
              <Button
                variant="contained"
                style={allStyle.button}
              >
                Add Category
              </Button>
            </Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default Categories
