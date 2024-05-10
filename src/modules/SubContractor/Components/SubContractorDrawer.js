import React from 'react';
import Drawer from '@mui/material/Drawer';
import { TextField, InputAdornment, Avatar, Tooltip } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from '@mui/icons-material/Mail';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ApartmentIcon from '@mui/icons-material/Apartment';
import RestoreIcon from '@mui/icons-material/Restore';
import Index from '../../Jobs/components/switchForJob';
import styles from '../Styles/subContractorDrawer.module.scss';

const SubContractorDrawer = ({ openSubCOntractorDrawer, closeSubCOntractorDrawer }) => {

  function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  console.log(1)

  return (
    <>
      <Drawer
        open={openSubCOntractorDrawer}
        onClose={closeSubCOntractorDrawer}
        sx={{
          position: 'absolute',

          '& .MuiDrawer-paper': {

          },
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
                  padding: '5px'
                },
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 1px 2px;',
                border: 'none',
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
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'black' }} />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className={styles.headingCover}>
            <div className={styles.componentName}>
              Drivers
            </div>

            <div className={styles.listoficon}>
              <Tooltip title="Create Invite" placement="top">
                <AddCircleIcon
                  sx={{ cursor: 'pointer' }}
                />
              </Tooltip>
              <Tooltip title="Send Email to All" placement="top">
                <MailIcon
                  sx={{ cursor: 'pointer' }}
                />
              </Tooltip>
              <Tooltip title="Invitations" placement="top">
                <ApartmentIcon
                  sx={{ cursor: 'pointer' }}
                />
              </Tooltip>
              <Tooltip title="Previous Drivers" placement="top">
                <RestoreIcon
                  sx={{ cursor: 'pointer' }}
                />
              </Tooltip>
            </div>
          </div>

          <div className={styles.switchCover}>
            <Index label="Active" checked={true} />
            <Index label="Disabled" />
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
            </div>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default SubContractorDrawer;