import React from 'react';
import styles from './styles/billing.module.scss';
import Heading from './components/BillingHeader/Heading';
import BillBody from './components/BillingBody/BillBody';

const JobBill = () => {
  return (
    <>
      <div className={styles.mainBody}>
        <Heading />
        <div className={styles.bodyWrapper}>
          <BillBody />
        </div>
      </div>
    </>
  )
}

export default JobBill