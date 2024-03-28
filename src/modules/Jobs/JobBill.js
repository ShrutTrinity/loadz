import React, { useState } from 'react';
import styles from './styles/billing.module.scss';
import Heading from './components/BillingHeader/Heading';
import BillBody from './components/BillingBody/BillBody';
import AddPopup from './components/BillingBody/AddPopup';

const JobBill = () => {

  const [addPersionTypePopUp, setAddPersionTypePopUp] = useState(false)

  const handlePopUp = () => {
    setAddPersionTypePopUp(!addPersionTypePopUp)
  }

  return (
    <>
     {addPersionTypePopUp && <AddPopup closePopUp={handlePopUp}/>}
      <div className={styles.mainBody}>
        <Heading />
        <div className={styles.bodyWrapper}>
          <BillBody handleBehaviour={handlePopUp}/>
        </div>
      </div>
    </>
  )
}

export default JobBill