import React, { useState } from 'react'
import styles from './styles/customer.module.scss'
import { TextField, InputAdornment, Avatar, Tooltip, Dialog, DialogContent } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import FactCheckIcon from '@mui/icons-material/FactCheck';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PaymentsIcon from '@mui/icons-material/Payments';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import credit from '@images/credit.png'
import ArchiveIcon from '@mui/icons-material/Archive';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import inspection from '@images/inspection.png'
import CustomerBalance from './Components/CustomerBalance/CustomerBalance';
import ApplyPayment from './Components/ApplyPayment/ApplyPayment';
import CreateCustomer from './Components/CreateCustomer/CreateCustomerModel';
import SettlementReportDialog from './Components/SettelemntReport/SettlementReportDialog';
import ChatIcon from '@mui/icons-material/Chat';

const Customer = ({ open, handleDrawerClose, textSelectorOpen, toggleTextSelector }) => {
  const [BalancePopupOpen, setBalancePopupOpen] = useState(false)
  const [openPaymentDailog, setOpenPaymentDailog] = useState(false);
  const [openCreateCustomerModel, setOpenCreateCustomerModel] = useState(false)
  const [settlementReportDialog, setSettlementReportDialog] = useState(false)
  const [openLeftDrawerForMobileView, setOpenLeftDrawerForMobileView] = React.useState(false);
  const isMobile = (window.innerWidth < 500);


  const handleClick = () => {
    if (!isMobile) {
      handleCloseForLeftDrawer();
    }
  };

  const handleTouchMove = () => {
    if (isMobile) {
      handleCloseForLeftDrawer();
    }
  };

  const handleClickForLeftDrawer = () => {
    console.log(isMobile)
    setOpenLeftDrawerForMobileView(true);
  };

  const handleCloseForLeftDrawer = () => {
    setOpenLeftDrawerForMobileView(false);
  };


  const handleClickOpen = () => {
    setOpenPaymentDailog(true);
  };

  const handleApplyPaymentDailogClose = () => {
    setOpenPaymentDailog(false);
  };

  const BalancePopupRendered = () => {
    setBalancePopupOpen(!BalancePopupOpen)
  }

  const clickFroCreateCustomerModel = () => {
    setOpenCreateCustomerModel(!openCreateCustomerModel)
  }

  const handleSettlementReportDialog = () => {
    setSettlementReportDialog(!settlementReportDialog)
  }

  const bodyStyles = {
    width: `calc(100% - ${open ? 290 : 0}px)`,
    zIndex: 1,
  }; if (window.innerWidth <= 1300) {
    bodyStyles.width = '100%';
    var bodyclick = handleDrawerClose;
  }

  function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  return (
    <>
      {BalancePopupOpen && <CustomerBalance BalancePopupRendered={BalancePopupRendered} />}
      <ApplyPayment isOpen={openPaymentDailog} handleApplyPaymentDailogClose={handleApplyPaymentDailogClose} />
      <CreateCustomer isOpen={openCreateCustomerModel} handleClose={clickFroCreateCustomerModel} />
      <SettlementReportDialog isOpen={settlementReportDialog} handleSettlementReportDialog={handleSettlementReportDialog} />


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
                <Tooltip title="Reconcile Invoices" placement="top">
                  <FactCheckIcon sx={{ cursor: 'pointer' }} />
                </Tooltip>
                <Tooltip title="Customer Balance & Aging Summary" placement="top">
                  <MonetizationOnIcon sx={{ cursor: 'pointer' }} onClick={BalancePopupRendered} />
                </Tooltip>
                <Tooltip title="Apply Payments" placement="top">
                  <PaymentsIcon sx={{ cursor: 'pointer' }} onClick={handleClickOpen} />
                </Tooltip>
                <Tooltip title="Download Pending Reconcile Report" placement="top">
                  <FileDownloadIcon sx={{ cursor: 'pointer' }} />
                </Tooltip>
                <Tooltip title="Create Customer" placement="top">
                  <AddCircleIcon sx={{ cursor: 'pointer' }} onClick={clickFroCreateCustomerModel} />
                </Tooltip>
                <Tooltip title="Credit & Bank Transfer Settlement Report" placement="top">
                  <img
                    src={credit}
                    alt='credit'
                    className={styles.credit}
                    style={{ cursor: 'pointer' }}
                    onClick={handleSettlementReportDialog}
                  />
                </Tooltip>
                <Tooltip title="Archived Customers" placement="top">
                  <ArchiveIcon sx={{ cursor: 'pointer' }} />
                </Tooltip>
                <Tooltip title="Global Invoice Search" placement="top">
                  <TravelExploreIcon sx={{ cursor: 'pointer' }} />
                </Tooltip>
                <Tooltip title="Global Invoiced Ticket Search" placement="top">
                  <ManageSearchIcon sx={{ cursor: 'pointer' }} />
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
            <div className={styles.contentWrapper}>
              <div className={styles.heading}>
                <ChatIcon className={styles.openDailogIcon} onClick={handleClickForLeftDrawer} />
                <Dialog
                  sx={{
                    position:'absolute',
                    left:0,
                    right:0,
                    zIndex: 1,
                    '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper ': {
                      height: '79%',

                    },
                    '& .css-ypiqx9-MuiDialogContent-root': {
                      padding: '20px'
                    },
                    '& .css-yiavyu-MuiBackdrop-root-MuiDialog-backdrop': {
                      backgroundColor: isMobile ? 'unset' : 'set',
                    },
                  }}
                  onTouchMove={handleTouchMove}
                  onClick={handleClick}
                  open={openLeftDrawerForMobileView}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogContent
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
                        <Tooltip title="Reconcile Invoices" placement="top">
                          <FactCheckIcon sx={{ cursor: 'pointer' }} />
                        </Tooltip>
                        <Tooltip title="Customer Balance & Aging Summary" placement="top">
                          <MonetizationOnIcon sx={{ cursor: 'pointer' }} onClick={BalancePopupRendered} />
                        </Tooltip>
                        <Tooltip title="Apply Payments" placement="top">
                          <PaymentsIcon sx={{ cursor: 'pointer' }} onClick={handleClickOpen} />
                        </Tooltip>
                        <Tooltip title="Download Pending Reconcile Report" placement="top">
                          <FileDownloadIcon sx={{ cursor: 'pointer' }} />
                        </Tooltip>
                        <Tooltip title="Create Customer" placement="top">
                          <AddCircleIcon sx={{ cursor: 'pointer' }} onClick={clickFroCreateCustomerModel} />
                        </Tooltip>
                        <Tooltip title="Credit & Bank Transfer Settlement Report" placement="top">
                          <img
                            src={credit}
                            alt='credit'
                            className={styles.credit}
                            style={{ cursor: 'pointer' }}
                            onClick={handleSettlementReportDialog}
                          />
                        </Tooltip>
                        <Tooltip title="Archived Customers" placement="top">
                          <ArchiveIcon sx={{ cursor: 'pointer' }} />
                        </Tooltip>
                        <Tooltip title="Global Invoice Search" placement="top">
                          <TravelExploreIcon sx={{ cursor: 'pointer' }} />
                        </Tooltip>
                        <Tooltip title="Global Invoiced Ticket Search" placement="top">
                          <ManageSearchIcon sx={{ cursor: 'pointer' }} />
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

                  </DialogContent>

                </Dialog>


                Customer Details
              </div>
              <div className={styles.box}>
                <div className={styles.circle}>

                  <img src={inspection} alt='pictureOfInspection' className={styles.image} />

                </div>
                <div className={styles.heading2}>
                  Customer Info
                </div>
                <div className={styles.detail}>
                  Choose a customer to view their invoice details.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Customer
