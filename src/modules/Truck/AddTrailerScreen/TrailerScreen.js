import React, { useState } from 'react'
import styles from './styles/trailerscreen.module.scss';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import Switch from '@Jobs/components/switchForJob/index';
import vehicles from './vehicles.json';
import EditTrailerForm from './EditTrailerForm';
import FunctionPortion from './FunctionPortion';
import MenuIcon from '@mui/icons-material/Menu';
import useDimensions from '@hooks/useDimensions';
import ResponsiveDrawer from './ResponsiveDrawer';

const TrailerScreen = (props) => {

  const [openEditTrailerDialog, setOpenEditTrailerDailog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cardData, setCardData] = useState([...vehicles]);

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

  const handleResponsiveDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

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
      <EditTrailerForm isOpen={openEditTrailerDailog}
        handleEditTrailertDailogClose={handleCloseEditTrailerDailog}
        selectedItem={selectedItem}
        updateCardData={updateCardData}
      />
      <div className={styles.container} 
      style={bodyStyle} 
      onClick={props.textSelectorOpen ? props.toggleTextSelector : bodyclick}
      >
        <div className={styles.flexContainer} ref={ref}>

          <div className={styles.drawerCover}>
            <FunctionPortion />
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
                    <MenuIcon className={styles.navigateIcon} onClick={handleResponsiveDrawer} />
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
                <hr />
              </>

            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default TrailerScreen
