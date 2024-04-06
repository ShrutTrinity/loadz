import { useState } from 'react';
import styles from './styles/billing.module.scss';
import Heading from './components/BillingHeader/Heading';
import BillBody from './components/BillingBody/BillBody';
import DeleteAlert from './components/BillingBody/DeleteAlert';
import AddSpecialRate from './components/BillingBody/AddSpecialRate';

const JobBill = ({ textSelectorOpen, toggleTextSelector, open, handleDrawerClose }) => {
  const [isOpenSpecialRateDialog, setIsOpenSpecialRateDialog] = useState(false);
  const [openDeleteConfirmationDialog, setOpenDeleteConfirmationDialog] = useState(false);
  const [formData, setFormData] = useState([]);
  const [editData, setEditData] = useState(null);

  const handleSpecialRateDialog = () => {
    setIsOpenSpecialRateDialog(!isOpenSpecialRateDialog);
  };

  const handleDeleteDialog = () => {
    setOpenDeleteConfirmationDialog(!openDeleteConfirmationDialog)
  }

  const handleFormSubmit = (data) => {
    if (editData) {
      // If editData is present, update the existing data
      const updatedFormData = formData.map(item => item === editData ? data : item);
      setFormData(updatedFormData);
      setEditData(null); // Reset editData after update
    } else {
      // Otherwise, add new data
      setFormData([...formData, data]);
    }
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
      <AddSpecialRate
        isOpen={isOpenSpecialRateDialog}
        handleSpecialRateDialog={handleSpecialRateDialog}
        handleFormSubmit={handleFormSubmit}
        editData={editData}
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
            handleDeleteDialog={handleDeleteDialog}
            setEditData={setEditData}
            />
        </div>
      </div>
    </>
  );
};

export default JobBill;