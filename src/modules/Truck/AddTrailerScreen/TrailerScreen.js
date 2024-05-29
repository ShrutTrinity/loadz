import React, { useState } from 'react'
import styles from './styles/trailerscreen.module.scss'
import dump from '@images/dump.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import Switch from '@Jobs/components/switchForJob/index';
import vehicles from './vehicles.json'
import AddTrailerForm from './AddTrailerForm';
import EditTrailerForm from './EditTrailerForm';

const TrailerScreen = (props) => {
  const [openAddTrailerDialog, setOpenAddTrailerDialog] = React.useState(false);
  const [openEditTrailerDialog, setOpenEditTrailerDialog] = React.useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cardData, setCardData] = useState([...vehicles]);

  const handleClickOpenTrailerDialog = () => {
    setOpenAddTrailerDialog(true);
  };

  const handleCloseTrailerDialog = () => {
    setOpenAddTrailerDialog(false);
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
  const handleCardClick = (item) => {
    setSelectedItem(item);
    setOpenEditTrailerDialog(true); 
  };
  const handleCloseEditTrailerDialog = () => {
    setOpenEditTrailerDialog(false);
  };

  const updateCardData = (updatedItem) => {
    
    const updatedCardData = cardData.map(item => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      }
      return item;
    });
    setCardData(updatedCardData);
  };

  return (
    <>
     <AddTrailerForm isOpen={openAddTrailerDialog} 
     handleAddTrailertDialogClose={handleCloseTrailerDialog}
     selectedItem={selectedItem} 
      />
     <EditTrailerForm isOpen={openEditTrailerDialog} 
     handleEditTrailertDialogClose={handleCloseEditTrailerDialog}
     selectedItem={selectedItem} 
     updateCardData={updateCardData}
      />
      <div className={styles.container} 
      style={bodyStyle} 
      onClick={props.textSelectorOpen ? props.toggleTextSelector : bodyclick}
      >
        <div className={styles.flexContainer}>
          <div className={styles.drawer} style={{ width: props.open ? '31%' : '25%' }}>
            <div className={styles.logo}>
              <img src={dump} alt='dump' className={styles.dumplogo} />
              <div className={styles.label}>Trailer</div>
            </div>
            <div className={styles.innerDrawer}>
              <button className={styles.addtrailerbtn} onClick={handleClickOpenTrailerDialog}>Add Trailers</button>
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
            {cardData.map((item, index) => (
              <>
            <div className={styles.card} onClick={() => handleCardClick(item)}>
              <div className={styles.cardimage}>
                <img className={styles.img} src={item.image} alt={item.name} />
              </div>
              <div className={styles.carddetails}>
                <div className={styles.detail}>Trailer Type:{item.type}</div>
                <div className={styles.detail}>Trailer No: {item.trailerno}</div>
                <div className={styles.detail}>Trailer Tires: {item.tires}</div>
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
