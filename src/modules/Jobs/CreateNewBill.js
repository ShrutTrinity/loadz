import { useState } from 'react';
import styles from './styles/billing.module.scss';
import Heading from './components/BillingHeader/Heading';
import BillBody from './components/BillingBody/BillBody';
import DeleteAlert from './components/BillingBody/DeleteAlert';
import AddSpecialRate from './components/BillingBody/AddSpecialRate';

const CreateNewBill = ({ textSelectorOpen, toggleTextSelector, open, handleDrawerClose }) => {
  const [isOpenSpecialRateDialog, setIsOpenSpecialRateDialog] = useState(false);
  const [openDeleteConfirmationDialog, setOpenDeleteConfirmationDialog] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [formData, setFormData] = useState([]);
  const [editData, setEditData] = useState(null);

  const handleSpecialRateDialog = () => {
    setIsOpenSpecialRateDialog(!isOpenSpecialRateDialog);
  };

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

  const handleDeleteDialog = (index) => {
    setOpenDeleteConfirmationDialog(true);
    setDeleteIndex(index);
  };

  const deleteRow = () => {
    const updatedFormData = formData.filter((item, index) => index !== deleteIndex);
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
        handleConfirmDelete={deleteRow}
      />
      <div className={styles.mainBody}
        style={bodyStyles}
        onClick={textSelectorOpen ? toggleTextSelector : bodyclick}
      >
        <Heading />
        <div className={styles.bodyWrapper}>
          <BillBody
            formData={formData}
            openSpecialRateForm={handleSpecialRateDialog}
            handleDeleteDialog={handleDeleteDialog}
            setEditData={setEditData}
            />
        </div>
      </div>
    </>
  );
};

export default CreateNewBill;