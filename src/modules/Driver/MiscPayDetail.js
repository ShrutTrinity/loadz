import React from 'react'
import MiscpayContainer from './MiscpayContainer'
import styles from './style/MiscPay.module.scss'

const MiscPayDetail = (props) => {
  return (
    <>
      <div className={styles.box} style={{height:`${props.height}px`}} >
        <MiscpayContainer />
        <MiscpayContainer />
        <MiscpayContainer />
        <MiscpayContainer />
        <MiscpayContainer />
      </div>
    </>
  )
}

export default MiscPayDetail
