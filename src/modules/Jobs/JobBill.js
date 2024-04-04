import { useState } from 'react';
import styles from './styles/billing.module.scss';
import Heading from './components/BillingHeader/Heading';
import BillBody from './components/BillingBody/BillBody';
import AddPopup from './components/BillingBody/AddPopup';
import DeleteAlert from './components/BillingBody/DeleteAlert';

const JobBill = ({ textSelectorOpen, toggleTextSelector, open, handleDrawerClose }) => {
  const [isOpenSpecialRateDialog, setIsOpenSpecialRateDialog] = useState(false);
  const [openDeleteConfirmationDialog, setOpenDeleteConfirmationDialog] = useState(false);
  const [formData, setFormData] = useState([]);

  const handleSpecialRateDialog = () => {
    setIsOpenSpecialRateDialog(!isOpenSpecialRateDialog);
  };

  const handleDeleteDialog = () => {
    setOpenDeleteConfirmationDialog(!openDeleteConfirmationDialog)
  }

  const handleFormSubmit = (data) => {
    setFormData([...formData, data]);
  };

  const handleDelete = (index) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    setFormData(updatedFormData);
    setOpenDeleteConfirmationDialog(false);
  };

  const bodyStyles = {
    width: `calc(100% - ${open ? 290 : 0}px)`,
    zIndex: 1,
  };
  if (window.innerWidth <= 1300) {
    bodyStyles.width = '100%';
    var bodyclick = handleDrawerClose;
  }


  return (
    <>
      <AddPopup
        isOpen={isOpenSpecialRateDialog}
        handleSpecialRateDialog={handleSpecialRateDialog}
        handleFormSubmit={handleFormSubmit}
      />
      <DeleteAlert
        isOpen={openDeleteConfirmationDialog}
        closeDeleteConfirmationDialog={() => setOpenDeleteConfirmationDialog(false)}
        handleDelete={(index) => handleDelete(index)}
      />
      <div className={styles.mainBody}
        style={bodyStyles}
        onClick={textSelectorOpen ? toggleTextSelector : bodyclick}
      >
        <Heading />
        <div className={styles.bodyWrapper}>
          <BillBody
            formData={formData}
            handleDelete={handleDelete}
            openSpecialRateForm={handleSpecialRateDialog}
            handleDeleteDialog={handleDeleteDialog} />
        </div>
      </div>
    </>
  );
};

export default JobBill;