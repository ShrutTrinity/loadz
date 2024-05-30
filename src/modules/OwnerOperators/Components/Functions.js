import React, { useState } from 'react';
import styles from '../styles/Function.module.scss';
import { TextField, InputAdornment, Avatar, Tooltip } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from '@mui/icons-material/Mail';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Index from '@Jobs/components/switchForJob';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import PaymentsIcon from '@mui/icons-material/Payments';
import ApplyPayment from './ApplyPayment/ApplyPayment';
import MessageDialog from './MessageDialog';
import AddNewOperator from './AddNewOperator';

const Functions = ({detailScreen}) => {

  const [openAddNewOperator, setOpenAddNewOperator] = useState(false);
  const [isCheckedActive, setIsCheckedArchive] = useState(true);
  const [mailDialog, setMailDialog] = useState(false);
  const [openPaymentDialog, setOpenPaymentDialog] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearchbarChange = () => {
    setShowSearchBar(true);
  };
  const handleClickOpen = () => {
    setOpenPaymentDialog(true);
  };
  const handleToggle = () => {
    setIsCheckedArchive(prevChecked => !prevChecked);
  };
  const handleMailDialog = () => {
    setMailDialog(!mailDialog);
  };
  const OpenFormAddOperator = () => {
    setOpenAddNewOperator(true);
  };
  
  const CloseFormAddOperator = () => {
    setOpenAddNewOperator(false);
  };
  const handleApplyPaymentDialogClose = () => {
    setOpenPaymentDialog(false);
  };

  function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <>
      <ApplyPayment
        isOpen={openPaymentDialog}
        handleApplyPaymentDialogClose={handleApplyPaymentDialogClose}
      />
      <MessageDialog
        openMessageDialog={mailDialog}
        closeMessageDialog={handleMailDialog}
      />
      <AddNewOperator
        open={openAddNewOperator}
        handleClose={CloseFormAddOperator}
      />
      <div className={styles.drawer}>
        <div className={styles.searchbar}>
          <TextField
            size="small"
            placeholder='Search Customers'
            variant="outlined"
            sx={{
              "& input::placeholder": {
                fontSize: "13px"
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(0, 0, 0, 0.23)',
              },
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
          <div className={styles.listoficon}>
            <Tooltip title="Reconcile Owner Operator Invoices" placement="top">
              <FactCheckIcon
                sx={{ cursor: 'pointer' }}
              />
            </Tooltip>
            <Tooltip title="Create Invite" placement="top">
              <AddCircleIcon
                onClick={OpenFormAddOperator}
                sx={{ cursor: 'pointer' }}
              />
            </Tooltip>
            <Tooltip title="Send Email to All" placement="top">
              <MailIcon
                onClick={handleMailDialog}
                sx={{ cursor: 'pointer' }}
              />
            </Tooltip>
            <Tooltip title="Apply Payments" placement="top">
              <PaymentsIcon sx={{ cursor: 'pointer' }} onClick={handleClickOpen} />
            </Tooltip>
            <Tooltip title="Global Invoice Search" placement="top">
              <TravelExploreIcon sx={{ cursor: 'pointer' }} onClick={handleSearchbarChange} />
            </Tooltip>
            <Tooltip title="Global Ticket Invoice Search" placement="top">
              <TravelExploreIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>

          </div>
          {showSearchBar &&
            <>
              <TextField
                size="small"
                placeholder='Global Invoice Search'
                variant="outlined"
                sx={{
                  "& input::placeholder": {
                    fontSize: "13px"
                  },
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(0, 0, 0, 0.23)',
                  },
                  '& .css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root': {
                    borderRadius: '5px',
                  },
                  '& .css-1ua80n0-MuiInputBase-input-MuiOutlinedInput-input': {
                    padding: '5px 0'
                  },
                  border: 'none',
                  justifyContent: 'flex-end',
                  width: '90%',
                  borderRadius: '20px',
                  backgroundColor: 'white',
                  '@media (max-width: 1200px)': {
                    width: '100%',
                  }
                }}
              />
              <SearchIcon sx={{ color: 'black' }} />
            </>
          }
        </div>

        <div className={styles.switchCover}>
          <Index label1="Active" label2='Archive' checked={isCheckedActive} onChange={handleToggle} />
        </div>

        <div className={styles.profile} onClick={detailScreen}>
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
          <div className={styles.profileDetails}>
            <div className={styles.name}>
              kent dodds
            </div>
            <div className={styles.balance}>
              Balance: <span className={styles.value}>$0.00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Functions
