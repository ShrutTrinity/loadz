import React from 'react';
import styles from './style/dispatchScreen.module.scss';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const dispatchStyles = {
  addbutton: {
    color: 'rgb(237, 202, 51)',
    borderRadius: '18px',
  },
  indicateButtons: {
    color: 'black'
  }
}

const DispatchScreen = ({ open, handleDrawerClose, textSelectorOpen, toggleTextSelector }) => {

  const bodyStyles = {
    width: `calc(100% - ${open ? 290 : 0}px)`,
    zIndex: 1,
  };
  if (window.innerWidth <= 1300) {
    bodyStyles.width = '100%';
    var bodyclick = handleDrawerClose;
  }

  const currentDate = new Date();
  const formattedDate = `${String(currentDate.getMonth() + 1).padStart(2, '0')}/${String(currentDate.getDate()).padStart(2, '0')}/${currentDate.getFullYear()}`

  return (
    <div className={styles.body}
      style={bodyStyles}
      onClick={textSelectorOpen ? toggleTextSelector : bodyclick}
    >
      <div className={styles.container}>

        <div className={styles.addDispatcher}>
          <Button style={dispatchStyles.addbutton}>
            <AddIcon className={styles.AddIcon} fontSize='medium' />
            <span className={styles.labelText}>Add Dispatch</span>
          </Button>
        </div>

        <div className={styles.dateIdicator}>
          <Button>
            <ArrowBackIosIcon style={dispatchStyles.indicateButtons} />
          </Button>
          <div className={styles.dateIndicate}>
            {formattedDate}
          </div>
          <Button>
            <ArrowForwardIosIcon style={dispatchStyles.indicateButtons} />
          </Button>
        </div>

        <div className={styles.allDispatcher}>
          <Button disabled>
            <PodcastsIcon className={styles.AddIcon} fontSize='medium' />
            <span className={styles.labelText}>Dispatch All</span>
          </Button>
        </div>
      </div>

      <div className={styles.contentDivision}>

        <LocalizationProvider dateAdapter={AdapterDayjs}>

          <StaticDatePicker
            sx={{
              '& .MuiPickersLayout-toolbar': {
                display: 'none'
              },
              '& .MuiPickersLayout-actionBar': {
                display: 'none'
              },
              '& .css-23p0if-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected)': {
                backgroundColor: 'rgb(237, 202, 51)',
                border: 'none'
              },
              backgroundColor:'rgb(245,245,245)',
              '& .css-1rtg91x-MuiDateCalendar-root':{
                backgroundColor:'rgb(255,255,255)'
              }
            }}
          />
        </LocalizationProvider>

        <div className={styles.addDispatchSection}>
          <div className={styles.addCover}>
            <AddIcon className={styles.iconForAdd} />
          </div>
          <div className={styles.caption}>
            Add A Dispatch
          </div>
        </div>

      </div>
    </div>
  )
}

export default DispatchScreen;