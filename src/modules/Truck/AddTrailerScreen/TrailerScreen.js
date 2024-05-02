import React, { useState } from 'react'
import styles from './styles/trailerscreen.module.scss'
import dump from '@images/dump.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import Switch from '@Jobs/components/switchForJob/index';
import vehicles from './vehicles.json'
import AddTrailerForm from './AddTrailerForm';

const TrailerScreen = (props) => {
  const [openAddTrailerDailog, setOpenAddTrailerDailog] = React.useState(false);

  const handleClickOpenTrailerDailog = () => {
    setOpenAddTrailerDailog(true);
  };

  const handleCloseTrailerDailog = () => {
    setOpenAddTrailerDailog(false);
  };
  const bodyStyle = {
    width: `calc(100% - ${props.open ? 290 : 0}px)`,
  }
  if (window.innerWidth <= 1300) {
    bodyStyle.width = '100%';
    var bodyclick = props.handleDrawerClose;
  }
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
     <AddTrailerForm isOpen={openAddTrailerDailog} handleApplyPaymentDailogClose={handleCloseTrailerDailog} />
      <div className={styles.container} style={bodyStyle} onClick={props.textSelectorOpen ? props.toggleTextSelector : bodyclick}>
        <div className={styles.flexContainer}>
          <div className={styles.drawer} style={{ width: props.open ? '31%' : '25%' }}>
            <div className={styles.logo}>
              <img src={dump} alt='dump' className={styles.dumplogo} />
              <div className={styles.label}>Trailer</div>
            </div>
            <div className={styles.innerDrawer}>
              <button className={styles.addtrailerbtn} onClick={handleClickOpenTrailerDailog}>Add Trailers</button>
              <div className={styles.Title}>Type</div>
              <div className={styles.indexLabel}><CheckCircleIcon className={styles.circleicon} />Flatbed </div>
              <div className={styles.indexLabel}><CheckCircleIcon className={styles.circleicon} />Belly Dump </div>
              <div className={styles.indexLabel}><CheckCircleIcon className={styles.circleicon} />End Dump </div>
              <div className={styles.indexLabel}><CheckCircleIcon className={styles.circleicon} />Cement </div>
              <div className={styles.indexLabel}><CheckCircleIcon className={styles.circleicon} />Box </div>
              <div className={styles.indexLabel}><CheckCircleIcon className={styles.circleicon} />Tanker </div>
            </div>
          </div>

          <div className={styles.searchbar}>
            <TextField
              size="large"
              placeholder='Search'
              // value={searchValue}
              // onChange={handleChange}
              sx={{
                '& .css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root': {
                  borderRadius: '15px',
                },
                '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                flexGrow: 1,
                borderRadius: '15px',
                width: '99%',
                border: 'none',
                marginBottom: '30px',
                boxShadow: 'rgba(0, 0, 0, 0.15) 1px 1px 1.6px 1px',
                background: 'white',
                '@media (max-width: 652px)': {
                  maxWidth: '100%'
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon style={{ color: 'black' }} />
                  </InputAdornment>
                )
              }}
            />
            <hr className={styles.hr}></hr>
            <div className={styles.archivebtn}>
              Archive
              <Switch checked={checked}
                onChange={handleChange} />
            </div>
            {vehicles.map((item, index) => (
              <>
            <div className={styles.card}>
              <div className={styles.cardimage}>
                <img className={styles.img} src={item.image} alt={item.name} />
              </div>
              <div className={styles.carddetails}>
                <div className={styles.detail}>Trailer Type:{item.type}</div>
                <div className={styles.detail}>Name: {item.name}</div>
                <div className={styles.detail}>Number: {item.number}</div>
                <div className={styles.detail}>Status: {item.status}</div>
              </div>
            </div>
            <hr/>
            </>
            
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default TrailerScreen
