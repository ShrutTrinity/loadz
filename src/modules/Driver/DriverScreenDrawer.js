import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import styles from './style/driverScreenDrawer.module.scss';
import { TextField, InputAdornment, Avatar, Tooltip } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from '@mui/icons-material/Mail';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ApartmentIcon from '@mui/icons-material/Apartment';
import RestoreIcon from '@mui/icons-material/Restore';
import Index from '../Jobs/components/switchForJob';
import CreateInvite from './CreateInvite';
import MailDialog from './MailDialog';
import Invitation from './Invitation';
import PriviousDriver from './PriviousDriver';

const DriverScreenDrawer = ({ openResponsiveDrawer, closeResponsiveDrawer, height, width }) => {
  const [createInviteModel, setCreateInviteModel] = useState(false);
  const [mailDialog, setMailDialog] = useState(false);
  const [previousDriverDialog, setPreviousDriverDialog] = useState(false);
  const [invitationDialog, setInvitationDialog] = useState(false);
  const [driverDetailscreen, setDriverDetailScreen] = useState(false);

  const handleCreateModel = () => {
    setCreateInviteModel(!createInviteModel);
  }

  const openDriverDetailScreen = () => {
    setDriverDetailScreen(true);
  }

  const handleMailDialog = () => {
    setMailDialog(!mailDialog);
  }

  const handleInvitationDialog = () => {
    setInvitationDialog(!invitationDialog);
  }

  const handlePreviousDriverDialog = () => {
    setPreviousDriverDialog(!previousDriverDialog);
  }

  function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <>
      <CreateInvite
        openCreateModel={createInviteModel}
        closeCreateModel={handleCreateModel}
      />
      <MailDialog
        openMailDialog={mailDialog}
        closeMailDialog={handleMailDialog}
      />
      <Invitation
        openInvitationDialog={invitationDialog}
        closeInvitationDialog={handleInvitationDialog}
      />
      <PriviousDriver
        openPreviousDriver={previousDriverDialog}
        closePreviousDriver={handlePreviousDriverDialog}
      />
      <Drawer
        anchor="left"
        open={openResponsiveDrawer}
        onTouchMove={closeResponsiveDrawer}
        transitionDuration={300}  
      >
        <div className={styles.drawer}>
          <div className={styles.searchbar}>
            <TextField
              size="small"
              placeholder='Search Customers'
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                },
                '& .MuiInputBase-input': {
                  padding: '5px',
                },
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 1px 2px',
                border: 'none',
                flexGrow: 1,
                width: '100%',
                borderRadius: '20px',
                backgroundColor: 'white',
                '@media (max-width: 1200px)': {
                  width: '100%',
                },
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
                  onClick={handleCreateModel}
                  sx={{ cursor: 'pointer' }}
                />
              </Tooltip>
              <Tooltip title="Send Email to All" placement="top">
                <MailIcon
                  onClick={handleMailDialog}
                  sx={{ cursor: 'pointer' }}
                />
              </Tooltip>
              <Tooltip title="Invitations" placement="top">
                <ApartmentIcon
                  onClick={handleInvitationDialog}
                  sx={{ cursor: 'pointer' }}
                />
              </Tooltip>
              <Tooltip title="Previous Drivers" placement="top">
                <RestoreIcon
                  sx={{ cursor: 'pointer' }}
                  onClick={handlePreviousDriverDialog}
                />
              </Tooltip>
            </div>
          </div>

          <div className={styles.switchCover}>
            <Index label="Active" checked={true} />
            <Index label="Disabled" />
          </div>

          <div className={styles.profile} onClick={openDriverDetailScreen}>
            <Avatar
              sx={{
                height: '40px',
                width: '40px',
                fontWeight: 800,
                fontSize: '16px',
                color: 'black',
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
  );
}

export default DriverScreenDrawer;
