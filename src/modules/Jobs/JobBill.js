import React, { useState } from 'react';
import styles from './styles/billing.module.scss';
import Heading from './components/BillingHeader/Heading';
import BillBody from './components/BillingBody/BillBody';
import AddPopup from './components/BillingBody/AddPopup';

const JobBill = () => {

  const [addPersionTypePopUp, setAddPersionTypePopUp] = useState(false)
  const [formData, setFormData] = useState([]);

  const handlePopUp = () => {
    setAddPersionTypePopUp(!addPersionTypePopUp)
  }

  const handleFormSubmit = (data) => {
    setFormData([ ...formData, data]);
  };

  const handleDelete = (index) => {
    setFormData(formData.filter((item, i) => i !== index))
  }

  return (
    <>
     {addPersionTypePopUp && <AddPopup closePopUp={handlePopUp} onSubmit={handleFormSubmit}/>}
      <div className={styles.mainBody}>
        <Heading />
        <div className={styles.bodyWrapper}>
          <BillBody handleBehaviour={handlePopUp} formData={formData} handleDelete={handleDelete}/>
        </div>
      </div>
    </>
  )
}

export default JobBill