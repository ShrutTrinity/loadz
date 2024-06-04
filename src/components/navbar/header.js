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
import { Link } from 'react-router-dom';


const DrawerContent = styled('div')(({ theme }) => ({

  overflowY: 'inherit',
  paddingTop: '70px !important',
  height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
  padding: theme.spacing(2),


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
    { header: { 'DASHBOARD': '/dashboard' }, detail: { 'REQUEST BOARD': '/request' } },
    { header: { 'Jobs': '/jobs' }, detail: {} },
    { header: { 'CUSTOMERS': '/customers' }, detail: { 'UNINVOICED TICKETS': '/uninvoiced' } },
    { header: { 'TRUCK': '/truck/all' }, detail: { FUELLOG: '/mileages/logs', 'TRAFFIC STOPS': '/dps/logs', INSPECTIONS: '/inspections' } },
    { header: { 'DRIVER LIST': '/drivers' }, detail: { 'TIME SHEETS': '/timesheet' } },
    { header: { 'DISPATCH': '/dispatch' }, detail: { 'DISPATCH TEMPLATE': '/dispatch/template' } },
    { header: { 'USER LIST': '/users' }, detail: {} },
    { header: { 'SUBCONTRACTORS': '/sub-contractor' }, detail: {} },
    { header: { 'OWNER OPERATORS': '/ownerops' }, detail: {} },
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
          <Link to='/dwolla/intro'>
            <img src={banner} className={styles.banner} alt='logo' />
          </Link>

        </DrawerContent>
        <img src={logo} className={styles.img} alt='logo' />
        
      </Drawer>
    </AppBar>
  );
}

export default PersistentDrawerLeft;