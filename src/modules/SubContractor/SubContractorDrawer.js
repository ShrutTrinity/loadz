import React from 'react';
import styles from './Styles/subcontactor.module.scss';
import { TextField, InputAdornment, Avatar, Tooltip, Drawer} from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import PaymentsIcon from '@mui/icons-material/Payments';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import HistoryIcon from '@mui/icons-material/History';
import EmailIcon from '@mui/icons-material/Email';
import ApartmentIcon from '@mui/icons-material/Apartment';

const SubContractorDrawer = ({ openResponsiveDrawer, closeResponsiveDrawer, height, width }) => {
  
  function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }


  return (
    <Drawer
        anchor='left'
        open={openResponsiveDrawer}
        onTouchMove={closeResponsiveDrawer} 
        PaperProps={{
          sx: {
            position: 'absolute',
            top: `calc(50% - ${height / 2}px)`, 
            left: `calc(50% - ${width / 2}px)`,
            height: `${height}px`,
            width: `${width}px`,
            transform: 'translate(-50%, -0%)',
            transition: 'transform 0.3s ease-in-out',
          },
        }} 
        ModalProps={{
          hideBackdrop:true,
        }}
      >
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
                  padding: '05px'
                },
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 1px 2px;',
                border: 'none',
                flexGrow: 1,
                width: '100%',
                borderRadius: '20px',
                '@media (max-width: 1200px)': {
                  width: '100%',
                  backgroundColor: 'white'
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
          <div className={styles.listoficon}>
            <Tooltip title="Archive" placement="top">
              <HistoryIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>
            <Tooltip title="Create Invite" placement="top">
              <AddCircleIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>
            <Tooltip title="Send Email to All" placement="top">
              <EmailIcon sx={{ cursor: 'pointer' }} />
              55                        </Tooltip>
            <Tooltip title="Invitations" placement="top">
              <ApartmentIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>
            <Tooltip title="Apply Payments" placement="top">
              <PaymentsIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>

            <Tooltip title="Global Invoice Search" placement="top">
              <TravelExploreIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>
            <Tooltip title="Global Ticket Invoice Search" placement="top">
              <TravelExploreIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>

          </div>
          <div className={styles.profile}>
            <Avatar
              sx={{
                height: '40px',
                width: '40px',
                fontWeight: 800,
                fontSize: '16px',
                color: 'black'
              }}
              {...stringAvatar('Kent Dodds')}
            />
            <div className={styles.name}>
              kent dodds
              <div className={styles.balance}>
                <b>Balance</b>  $0.00
              </div>
            </div>

          </div>
        </div>
      </Drawer>
  )
}

export default SubContractorDrawer;