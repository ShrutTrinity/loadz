import React, { useState } from 'react';
import styles from './styles/ownerOperator.module.scss';
import { TextField, InputAdornment, Avatar, Tooltip, Button } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from '@mui/icons-material/Mail';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import inspection from '@images/inspection.png'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Index from '../Jobs/components/switchForJob';
import OwnerOperatorDetail from './Components/OwnerOperatorDetail';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import PaymentsIcon from '@mui/icons-material/Payments';
import AddNewOperator from './Components/AddNewOperator';
import MessageDialog from './Components/MessageDialog';
import ApplyPayment from './Components/ApplyPayment/ApplyPayment';

const OwnerOperator = ({ open, handleDrawerClose, textSelectorOpen, toggleTextSelector }) => {

  const ownerOperatorScreenStyle = {
    drawerButton: {
      color: 'black',
      fontWeight: 300,
    }
  }

  const [ownerOperatorDetailscreen, setOwnerOperatorDetailScreen] = useState(false)
  const [openAddNewOperator, setOpenAddNewOperator] = useState(false);
  const [isCheckedActive, setIsCheckedArchive] = useState(true);
  const [mailDialog, setMailDialog] = useState(false);
  const [openPaymentDailog, setOpenPaymentDailog] = useState(false);

  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearchbarChange = () => {
    setShowSearchBar(true)
  }

  const handleClickOpen = () => {
    setOpenPaymentDailog(true);
  };

  const handleApplyPaymentDailogClose = () => {
    setOpenPaymentDailog(false);
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

  const openownerOperatorDetailScreen = () => {
    setOwnerOperatorDetailScreen(true)
  }

  function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  const bodyStyles = {
    width: `calc(100% - ${open ? 290 : 0}px)`,
    zIndex: 1,
  };
  if (window.innerWidth <= 1300) {
    bodyStyles.width = '100%';
    var bodyclick = handleDrawerClose;
  }

  return (
    <>
      <ApplyPayment
        isOpen={openPaymentDailog}
        handleApplyPaymentDailogClose={handleApplyPaymentDailogClose} />
      <MessageDialog
        openMessageDialog={mailDialog}
        closeMessageDialog={handleMailDialog}
      />
      <AddNewOperator
        open={openAddNewOperator}
        handleClose={CloseFormAddOperator} />
      <div className={styles.container}
        style={bodyStyles}
        onClick={textSelectorOpen ? toggleTextSelector : bodyclick}>
        <div className={styles.backrow}></div>
        <div className={styles.CardWrapper}>
          <div className={styles.contentCard}>
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

              <div className={styles.profile} onClick={openownerOperatorDetailScreen}>
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

            <div className={styles.contentWrapper}>
              {ownerOperatorDetailscreen ? <OwnerOperatorDetail /> :
                <>
                  <div className={styles.heading}>Owner Operators Details</div>
                  <div className={styles.box}>
                    <div className={styles.circle}>
                      <img src={inspection} alt='pictureOfInspection' className={styles.image} />
                    </div>
                    <div className={styles.heading2}>
                      OwnerOperator Info
                    </div>
                    <div className={styles.drawerButton}>
                      <Button
                        style={ownerOperatorScreenStyle.drawerButton}
                      // onClick={handleResponsiveDrawer}
                      >
                        View OwnerOperator Profile...
                      </Button>
                    </div>
                    <div className={styles.detail}>
                      Choose a OwnerOperator to view their profile...
                    </div>
                    {/* <ownerOperatorScreenDrawer
                    openResponsiveDrawer={responsiveDrawer}
                    closeResponsiveDrawer={handleResponsiveDrawer}
                  /> */}
                  </div>
                </>
              }

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default OwnerOperator
