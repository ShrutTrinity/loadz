import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import styles from './styles/editcompanyinfo.module.scss'
import profile from '@images/profile.jpg';
import CustomTextFiled from '@Jobs/components/TextField/CustomTextFiled';
import { useState } from 'react';
import FilePopUp from '../../CreateAccount/Components/uploadPopUp';
import ImageUploadLogo from '@images/upload-image.svg';
import Formcontroller from '../../../components/navbar/Formcontroller';
import FileUpload from '../../OwnerOperators/Components/FileUpload';
import CommonTextfield from '@Jobs/components/TextField/CommonTextfield'

const EditCompanyInfo = ({ open, onClose }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileSelect1 = (fileURL, file) => {
    console.log('File selected for the first FileUpload component:', file);
  };
  const handleFileSelect2 = (fileURL, file) => {
    console.log('File selected for the first FileUpload component:', file);
  };
  const handleClosePop = () => {
    setShowPopUp(false);
  }

  const handleImageSelect = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowPopUp(false);
  };

  const handleClickOpen = (event) => {
    event.stopPropagation();
    setShowPopUp(true);
  };
  return (
    <>
      <FilePopUp
        open={showPopUp}
        imageUrlforPopUp={selectedImage || ImageUploadLogo}
        onSelect={handleImageSelect}
        onClose={handleClosePop}
      />
      <Dialog
        sx={{
          '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
            maxWidth: '950px',
            borderRadius: '20px'
          }
        }}
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <CloseIcon className={styles.closeicon} onClick={onClose} />
        </DialogTitle>
        <DialogContent sx={{ padding: '10px' }}>
          <div className={styles.heading}>
            Edit Company Profile
          </div>
          <div className={styles.flex}>
            <div className={styles.left}>
              <div className={styles.textFields}>
                <CustomTextFiled
                  name='cname'
                  type='text'
                  label='Company Name'
                  width='100'
                  placeholder='Company Name'
                />
                <CustomTextFiled
                  name='address'
                  type='text'
                  label='Address'
                  width='100'
                  placeholder='Address'
                />
                <CustomTextFiled
                  name='city'
                  type='text'
                  label='City'
                  width='31.5'
                  placeholder='City'
                />
                <CustomTextFiled
                  name='state'
                  type='number'
                  label='State'
                  width='31.5'
                  placeholder='State'
                />
                <CustomTextFiled
                  name='zip'
                  type='number'
                  label='Zip'
                  width='31.5'
                  placeholder='Zip'
                />
                <CustomTextFiled
                  name='cemail'
                  type='email'
                  label='Company Email'
                  width='48'
                  placeholder='Phone'
                />
                <CustomTextFiled
                  name='cphone'
                  type='number'
                  label='Company Phone'
                  width='48'
                  placeholder='Company Phone'
                />
                <CustomTextFiled
                  name='waitrate'
                  type='number'
                  label='Company Wait Rate'
                  width='48'
                  placeholder='Phone'
                />
                <CustomTextFiled
                  name='taxrate'
                  type='number'
                  label='Company Tax Rate'
                  width='48'
                  placeholder='Phone'
                />
                <CustomTextFiled
                  name='driverrate'
                  type='number'
                  label='Default Driver Hourly Rate'
                  width='48'
                  placeholder='Phone'
                />
                <CustomTextFiled
                  name='phone'
                  type='number'
                  label='Default Driver Commission Rate'
                  width='48'
                  placeholder='Phone'
                />
                <div style={{ width: '48%' }}>
                  Job Default Ticket Scale?
                  <Formcontroller />
                </div>
                <div style={{ width: '48%' }}>
                  Job Default Selling Material?
                  <Formcontroller />
                </div>
                <div style={{ width: '48%' }}>
                  Job Default Show Customer on Tickets?
                  <Formcontroller />
                </div>
                <div style={{ width: '48%' }}>
                  Apply payment owner operator invoices automatic reconciliation ?
                  <Formcontroller />
                </div>
              </div>
              <div className={styles.documentUpload}>
                <div className={styles.heading2}>
                  Tax / Insurance Documents
                </div>
                <div className={styles.uploadContainer}>
                  <FileUpload id="fileInput1" disabled={true} onFileSelect={handleFileSelect1} text='Upload Owner Operator Logo' height='150' width='150' />
                  <FileUpload id="fileInput2" disabled={true} onFileSelect={handleFileSelect2} text='Upload Owner Operator Logo' height='150' width='150' />
                </div>
                <button className={styles.btn2}>Update</button>
              </div>
            </div>
            <div className={styles.updateimg}>
              <div className={styles.imgdiv} onClick={handleClickOpen}>
                {selectedImage ? (
                  <img src={selectedImage} alt='profile' className={styles.profile} />
                ) : (
                  <img src={profile} alt='profile' className={styles.profile} />
                )}
              </div>
              <div className={styles.switches}>
                <div className={styles.heading2}>
                  Inspection Settings
                </div>
                <div className={styles.contorl}>
                  <Formcontroller label='Enable Contractors' />
                  <Formcontroller label='Employee can Skip' />
                  <Formcontroller label='Enable Notifications' />
                </div>
                <div className={styles.heading2}>
                  Time Clock Settings
                </div>
                <div className={styles.contorl}>
                  <Formcontroller label='Contractors' />
                  <Formcontroller label='Employees' />
                </div>
              </div>
              <div className={styles.heading2}>
                Configure Tickets Auto Batch Schedule.
              </div>
              <button className={styles.btn2}>Configure Ticket Auto Batch </button>
              <div className={styles.batch}>Batches run at 17:00 Hrs (05:00 pm CST) everyday</div>
              <div className={styles.lastpart}>
                <div className={styles.heading3}>
                  Set the schedule for Driver Payroll.
                </div>
                <button className={styles.btn3} disabled>Set time to create payroll</button>
                <div className={styles.batch2}>Batches run at 23:59 Hrs (11:59 pm CST) Sunday</div>
                <div className={styles.heading3}>
                  Configure Invoice Automation Schedule.
                </div>
                <Formcontroller label='Invoice Automation' />
                <Formcontroller label='Auto Send Invoices' />
                <button className={styles.invoiceBtn} disabled>Configure Invoice Automation</button>
                <div className={styles.batch2}>Invoices run at 23:59 Hrs (11:59 pm CST) Friday</div>
                <div className={styles.heading3}>
                  Configure Credit & Bank Transfer Daily Settlement Report
                </div>
                <Formcontroller label='Configure recipient email address for Daily Settlement Report' />
                <CommonTextfield
                  id='name'
                  name='name'
                  type='name'
                  placeholder='Input your Email Addre'
                  width='90'
                />
                <div className={styles.heading3}>
                  Configure users to receive a copy of Receipts
                </div>
                <CommonTextfield
                  id='name'
                  name='name'
                  type='name'
                  placeholder='Input your Email Addre'
                  width='90'
                />
              </div>
            </div>
          </div>

        </DialogContent>

      </Dialog>
    </>
  );
}


export default EditCompanyInfo
