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

            <div className={styles.drawerContainer}>
              <CustomerFunction />
            </div>

            <div className={styles.contentWrapper} ref={ref}>
              <div className={styles.heading}>
                <ChatIcon className={styles.openDialogIcon} onClick={handleResponsiveDrawer} />
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
