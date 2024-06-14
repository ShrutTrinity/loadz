import React, { useState } from 'react';
import styles from '../style/AddDispatcherDrawer.module.scss'
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';

const allStyles = {
  button: {
    color: 'black',
    borderColor: 'black',
    borderRadius: '8px',
    padding: '4px 0'
  },
  addbutton: {
    color: 'rgb(237, 202, 51)',
    borderRadius: '18px',
  },
  indicateButtons: {
    color: 'black'
  }
}
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '5px',
  backgroundColor: 'white',
  border: '1px solid rgba(0,0,0,0.5)',
  width: '100%=',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: '6px',
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    fontSize: '13px',
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
}));

const AddDispatcherFunction = ({ closeDrawer }) => {
  const [truckCount, setTruckCount] = useState(1);

  const incrementTruckCount = () => {
    setTruckCount(truckCount + 1)
  }

  const decrementTruckCount = () => {
    truckCount > 0 ? setTruckCount(truckCount - 1) : setTruckCount(0)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.closeIcon} onClick={closeDrawer}>
          <CloseIcon />
        </div>

        <div className={styles.heading}>
          Add New Dispatch
        </div>

        <section className={styles.searchbar}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by Customer or Destination"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </section>

        <section className={styles.listOfInfo}>
          <span className={styles.infoHeaders}>
            Customer :
          </span>
          <span className={styles.infoHeaders}>
            Source :
          </span>
          <span className={styles.infoHeaders}>
            Destination :
          </span>
          <span className={styles.infoHeaders}>
            Material :
          </span>
          <span className={styles.infoHeaders}>
            Unit :
          </span>
        </section>

        <section className={styles.truckCounter}>
          Truck Needed
          <div className={styles.counter}>
            <Button
              variant="outlined"
              style={allStyles.button}
              onClick={decrementTruckCount}
            >
              <RemoveIcon />
            </Button>
            <Button
              variant="outlined"
              style={allStyles.button}>
              {truckCount}
            </Button>

            <Button
              variant="outlined"
              style={allStyles.button}
              onClick={incrementTruckCount}
            >
              <AddIcon />
            </Button>
          </div>
        </section>

        <section className={styles.submitButton}>
          <Button style={allStyles.addbutton}>
            <AddIcon
              className={styles.AddIcon}
              fontSize='medium' />
            <span className={styles.labelText}>Add Dispatch</span>
          </Button>
        </section>
      </div>
    </>
  )
}

export default AddDispatcherFunction
