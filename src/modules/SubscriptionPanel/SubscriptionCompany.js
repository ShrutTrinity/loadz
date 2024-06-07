import React from 'react';
import styles from './style/screen.module.scss';
import { Link } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import CloudIcon from '@mui/icons-material/Cloud';
import Wallet from '@images/wallet.png';

const SubscriptionCompany = ({ open, handleDrawerClose, textSelectorOpen, toggleTextSelector }) => {

  const bodyStyles = {
    width: `calc(100% - ${open ? 290 : 0}px)`,
    zIndex: 1,
  }; if (window.innerWidth <= 1300) {
    bodyStyles.width = '100%';
    var bodyclick = handleDrawerClose;
  }

  return (
    <>
      <div
        className={styles.body}
        style={bodyStyles}
        onClick={textSelectorOpen ? toggleTextSelector : bodyclick}
      >
        <h4 className={styles.heading}>
          Subscription
        </h4>
        <section className={styles.screen}>
          <div className={styles.professionalDetail}>
            <section className={styles.part1}>
              <div className={styles.currentPlan}>
                <span>Current plan</span>
                <h5>Professional</h5>
              </div>
              <div className={styles.status}>
                <span>Subscription status</span>
                <h4 className={styles.freeTrial}>Free Trial</h4>
                <h6 className={styles.day}>29-day free trial</h6>
                <Link className={styles.link}>Need more time ?</Link>
              </div>
              <div className={styles.paymentDisplay}>
                <div className={styles.payment}>
                  $299.99
                  <span className={styles.subDetail}>per Month</span>
                </div>
                <div className={styles.paymentProcess}>
                  <Button
                    variant='contained'
                    sx={{
                      background: 'rgb(237, 202, 51)',
                      color: 'black',
                      fontSize: '13px',
                      textTransform: 'capitalize',
                      borderRadius: '18px'
                    }}
                  >
                    Change Plan
                  </Button>
                  <Link className={styles.link}>Cancel/Downgrade Subscription</Link>
                </div>
              </div>
            </section>
            <section className={styles.part2}>
              <Avatar sx={{ bgcolor: 'rgb(237, 202, 51)', fontSize: '18.5714px', width: '56px', height: '56px' }}>D</Avatar>
              <div className={styles.email}>
                email@gmail.com
              </div>
              <Button
                variant='contained'
                sx={{
                  fontSize: '13px',
                  background: 'rgb(237, 202, 51)',
                  color: 'black',
                  borderRadius: '18px',
                  mt: '16px',
                  textTransform: 'capitalize'
                }}
              >
                Manage Payment Methods
              </Button>
            </section>
          </div>

          <div className={styles.resource}>
            <h4 className={styles.resourceHeader}>Subscription resource</h4>
            <div className={styles.resourceList}>
              <div className={styles.driver}>
                <AddCircleOutlineIcon />
                <h4 className={styles.resourceName}>Drivers</h4>
                <num>25</num>
              </div>
              <div className={styles.driver}>
                <CreditCardIcon />
                <h4 className={styles.resourceName}>Owner Operator Drivers</h4>
                <num>25</num>
              </div>
              <div className={styles.driver}>
                <VpnKeyIcon />
                <h4 className={styles.resourceName}>Web Users</h4>
              </div>
              <div className={styles.driver}>
                <CloudIcon />
                <h4 className={styles.resourceName}>Tickets Count</h4>
                <num>0</num>
              </div>
            </div>
          </div>

          <div className={styles.transactions}>
            <section className={styles.transactionsHeader}>
              <img src={Wallet} alt='wallet Icon' />
              <span className={styles.headingText}>Transactions</span>
            </section>
          </div>
        </section>
      </div>
    </>
  )
}

export default SubscriptionCompany
