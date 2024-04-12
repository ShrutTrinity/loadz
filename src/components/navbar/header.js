import * as React from 'react';
import styles from './styles/header.module.scss'
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import iconButton from '@images/menu_ico.png';
import Profile from '@images/profile.jpg'
import According from '../According';
import logo from '@images/loadzlogo.png'
import banner from '@images/banner.png'
import NavigationBar from './NavigationBar';
import { AppBar } from '@mui/material';


const DrawerContent = styled('div')(({ theme }) => ({

  overflowY: 'hidden',
  paddingTop: '70px !important',
  height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
  padding: theme.spacing(2),

  ':hover': {
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      display: 'block',
      width: '7px',
      transition: 'width 5s ease',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#D3D3D3',
      borderRadius: '4px',
      transition: 'background-color 5s ease',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: theme.palette.background.paper,
      transition: 'background-color 5s ease',
    },
  }

}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
const PersistentDrawerLeft = ({
  setting,
  handleOpen,
  handleClose,
  open,
  handleDrawerOpen,
  handleDrawerClose,
  toggleTextSelector,
  textSelectorOpen }) => {

  const data = [
    { header: { 'DASHBOARD': '/dashboard' }, detail: { 'REQUEST BOARD': '/jobs' } },
    { header: { 'Jobs': '/jobs' }, detail: {} },
    { header: { 'CUSTOMERS': '/customers' }, detail: { 'UNINVOICED TICKETS': '/dashboard' } },
    { header: { 'TRUCK': '/truck/all' }, detail: { FUELLOG: '/fuellog', 'TRAFFIC STOPS': '/traffic-stops', INSPECTIONS: '/inspections' } },
    { header: { 'CUSTOMERS': '/customers' }, detail: { 'UNINVOICED TICKETS': '/uninvoiced' } },
    { header: { 'TRUCK': '' }, detail: { FUELLOG: '/fuellog', 'TRAFFIC STOPS': '/traffic-stops', INSPECTIONS: '/inspections' } },
    { header: { 'DRIVER LIST': '' }, detail: { 'TIME SHEETS': '/time-sheets' } },
    { header: { 'USER LIST': '' }, detail: {} },
    { header: { 'SUBCONTRACTORS': '' }, detail: {} },
    { header: { 'OWNER OPERATORS': '' }, detail: {} },
  ];


  return (


    <AppBar position="static"
      sx={{
        '& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper':
        {
          zIndex: 3
        }
      }}
    >
      <NavigationBar
        toggleDrawer={handleDrawerOpen}
        Open={open}
        setting={setting}
        handleClose={handleClose}
        handleOpen={handleOpen}
        textSelectorOpen={textSelectorOpen}
        toggleTextSelector={toggleTextSelector}
      />

      <Drawer
        variant="persistent"
        anchor="left"
        open={open}>
        <DrawerHeader>
          <img src={iconButton} alt='close' onClick={handleDrawerClose}
            style=
            {{
              cursor: 'pointer',
              height: '20px', 
              width: '20px', 
              borderRadius: '50%'
            }} />
        </DrawerHeader>
        <div className={styles.profile}>
          <img src={Profile} alt='profile' className={styles.img2} />
        </div>
        <DrawerContent>
          {data.map((item, index) => (
            <According key={index} header={item.header} detail={item.detail} />
          ))}
          <img src={banner} className={styles.banner} alt='logo' />
        </DrawerContent>
        <img src={logo} className={styles.img} alt='logo' />
      </Drawer>
    </AppBar>
  );
}

export default PersistentDrawerLeft