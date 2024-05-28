import React, { useState } from 'react';
import styles from '../Styles/Function.module.scss';
import { TextField, InputAdornment, Avatar, Tooltip } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import PaymentsIcon from '@mui/icons-material/Payments';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import HistoryIcon from '@mui/icons-material/History';
import EmailIcon from '@mui/icons-material/Email';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Archived from '../Archived';
import SubContractorMail from '../SubContractorMail';
import Invitation from '../Invitation';
import InviteUserDialog from './InviteUserDialog';

const Function = () => {
  const [createInvitationDialog, setCreateInvitationDialog] = useState(false);
  const [mailDialog, setMailDialog] = useState(false);
  const [archiveDialog, setArchiveDialog] = useState(false);
  const [invitationDialog, setInvitationDialog] = useState(false);

  const handleArchiveDialog = () => {
    setArchiveDialog(!archiveDialog)
  }

  const handleCreateInvitationDialog = () => {
    setCreateInvitationDialog(!createInvitationDialog)
  }

  const handleMailDialog = () => {
    setMailDialog(!mailDialog)
  }

  const handleInvitationDialog = () => {
    setInvitationDialog(!invitationDialog)
  }

  function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <>
    
    <Archived
        openArchiveDialog={archiveDialog}
        closeArchiveDialog={handleArchiveDialog}
      />
      <SubContractorMail
        mailDialogOpen={mailDialog}
        closeMailDialog={handleMailDialog}
      />
      <InviteUserDialog
        isOpen={createInvitationDialog}
        CreateCustomerPopupRendered={handleCreateInvitationDialog}
      />
      <Invitation
        openInvitationDialog={invitationDialog}
        closeInvitationDialog={handleInvitationDialog}
      />
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
        <div className={styles.title}>
          Subcontractors
        </div>
        <div className={styles.listoficon}>
          <Tooltip title="Archive" placement="top">
            <HistoryIcon
              onClick={handleArchiveDialog}
              sx={{ cursor: 'pointer' }}
            />
          </Tooltip>
          <Tooltip title="Create Invite" placement="top">
            <AddCircleIcon
              sx={{ cursor: 'pointer' }}
              onClick={handleCreateInvitationDialog}
            />
          </Tooltip>
          <Tooltip title="Send Email to All" placement="top">
            <EmailIcon
              sx={{ cursor: 'pointer' }}
              onClick={handleMailDialog}
            />
          </Tooltip>
          <Tooltip title="Invitations" placement="top">
            <ApartmentIcon
              sx={{ cursor: 'pointer' }}
              onClick={handleInvitationDialog}
            />
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
    </>
  )
}

export default Function;