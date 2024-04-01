import React, { useState } from 'react';
import styles from './styles/billing.module.scss';
import Heading from './components/BillingHeader/Heading';
import BillBody from './components/BillingBody/BillBody';
import AddPopup from './components/BillingBody/AddPopup';
import DeleteAlert from './components/BillingBody/DeleteAlert';

const JobBill = (props) => {
  const [addPersionTypePopUp, setAddPersionTypePopUp] = useState(false);
  const [formData, setFormData] = useState([]);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [editData, setEditData] = useState(null);

  const handlePopUp = () => {
    setAddPersionTypePopUp(!addPersionTypePopUp);
  };

  const handleFormSubmit = (data) => {
    if (editData !== null) {
      const updatedFormData = formData.map((item, index) => index === editData.index ? data : item);
      setFormData(updatedFormData);
      setEditData(null);
    } else {
      setFormData([...formData, data]);
    }
  };

  const handleDelete = (index) => {
    setFormData(prevFormData => prevFormData.filter((_, i) => i !== index));
    setDeleteAlert(!deleteAlert);
  };

  const handleDeleteAlert = (index) => {
    setDeleteIndex(index);
    setDeleteAlert(!deleteAlert);
  };

  const handleEdit = (data) => {
    setEditData({ data, index: formData.findIndex(item => item === data) });
    setAddPersionTypePopUp(true);
  };

  const bodyStyles = {
    width: `calc(100% - ${props.open ? 290 : 0}px)`,
    zIndex: 1,
  };
  if (window.innerWidth <= 1300) {
    bodyStyles.width = '100%';
    var bodyclick = props.handleDrawerClose;
  }

  return (
    <>
      {addPersionTypePopUp && (
        <AddPopup
          closePopUp={handlePopUp}
          onSubmit={handleFormSubmit}
          editData={editData}
        />
      )}
      {deleteAlert && (
        <DeleteAlert
          handleDeleteData={handleDelete}
          index={deleteIndex}
          closePopUp={() => setDeleteAlert(false)}
        />
      )}
      <div className={styles.mainBody}
        style={bodyStyles}
        onClick={props.textSelectorOpen ? props.toggleTextSelector : bodyclick}
      >
        <Heading />
        <div className={styles.bodyWrapper}>
          <BillBody handleBehaviour={handlePopUp} formData={formData} handleDelete={handleDeleteAlert} handleEdit={handleEdit} />
        </div>
      </div>
    </>
  );
};

export default JobBill;