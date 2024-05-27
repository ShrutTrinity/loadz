import React from 'react'
import styles from './styles/paymentintro.module.scss'
import loadz from '@images/loadz_fp.jpg'
import phonetransition from '@images/phoneTransition.png'


const PaymentIntro = ({ open, handleDrawerClose, textSelectorOpen, toggleTextSelector }) => {
  const bodyStyles = {
    width: `calc(100% - ${open ? 300 : 0}px)`,
    zIndex: 1,
  };
  if (window.innerWidth <= 1300) {
    bodyStyles.width = '100%';
    var bodyclick = handleDrawerClose;
  }
  return (
    <>
      <div className={styles.container} style={bodyStyles}
        onClick={textSelectorOpen ? toggleTextSelector : bodyclick}>
        <div className={styles.flexitem1}>
          <img src={loadz} alt='loadz' className={styles.img} />
          <div className={styles.heading}>Get Started With<br /> Loadz Fast Pay</div>
          <div className={styles.intro}>Loadz Fast Pay allows you to <br /> effortlessly pay & recieve online<br />  payments for your invoices.</div>
          <div className={styles.intro2}>Accept All Major Credit Cards, <br />ACH, & Apple Pay</div>
          <button className={styles.btn}>Get Started Today!</button>
        </div>

        <div className={styles.flexitem2}>
          <img src={phonetransition} alt='loadz' className={styles.img2} />
          <div className={styles.heading}>** Maximum of $15 processing fee on each transaction when your customers signs up to be a Loadz Member.
          </div>

        </div>
      </div>
    </>
  )
}

export default PaymentIntro
