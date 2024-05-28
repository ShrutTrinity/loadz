import React, { useState } from 'react'
import styles from './styles/customer.module.scss'
import inspection from '@images/inspection.png'
import CustomerBalance from './Components/CustomerBalance/CustomerBalance';
import ChatIcon from '@mui/icons-material/Chat';
import CustomerDrawer from './CustomerDrawer';
import useDimensions from '@hooks/useDimensions';
import CustomerFunction from './Components/CustomerFunction';


const Customer = ({ open, handleDrawerClose, textSelectorOpen, toggleTextSelector }) => {
  const [BalancePopupOpen, setBalancePopupOpen] = useState(false)
  const [responsiveDrawer, setResponsiveDrawer] = useState(false)
  const [ref, dimensions] = useDimensions();

  const handleResponsiveDrawer = () => {
    setResponsiveDrawer(!responsiveDrawer)
  }

  const BalancePopupRendered = () => {
    setBalancePopupOpen(!BalancePopupOpen)
  }

  const bodyStyles = {
    width: `calc(100% - ${open ? 290 : 0}px)`,
    zIndex: 1,
  }; if (window.innerWidth <= 1300) {
    bodyStyles.width = '100%';
    var bodyclick = handleDrawerClose;
  }

  return (
    <>
      {BalancePopupOpen && <CustomerBalance BalancePopupRendered={BalancePopupRendered} />}
      <CustomerDrawer 
         height={dimensions.height}
         width={dimensions.width}
         openResponsiveDrawer={responsiveDrawer}
         closeResponsiveDrawer={handleResponsiveDrawer}
      />

      <div className={styles.container}
        style={bodyStyles}
        onClick={textSelectorOpen ? toggleTextSelector : bodyclick}>
        <div className={styles.backrow}></div>
        <div className={styles.CardWrapper}>
          <div className={styles.contentCard}>
            {/* <div className={styles.drawer}>
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
            </div> */}

            <div className={styles.drawerContainer}>
              <CustomerFunction />
            </div>


            <div className={styles.contentWrapper} ref={ref}>
              <div className={styles.heading}>
                <ChatIcon className={styles.openDailogIcon} onClick={handleResponsiveDrawer} />
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
