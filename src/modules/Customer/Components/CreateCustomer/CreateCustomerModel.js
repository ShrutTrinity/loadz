import React, { useState } from 'react';
import styles from './styles/createCustomer.module.scss';
import ContactFrom from './ContactFrom';
import CommonTextfield from '@Jobs/components/TextField/CommonTextfield';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';

const statesArray = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida',
  'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
  'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
  'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const netarray = [
  'Net 7', 'Net 15', 'Net 30', 'Net 45', 'Net 60'
]

const createCustomerStyles = {
  selectFiled: {
    borderColor: '#c4c4c4',
    margin: '15px 0',
    boxShadow: 'none',
    padding: '17px 14px 17.5px 10px',
    fontSize: '13px',
    width: '100%',
  }
}

const CreateCustomer = ({ isOpen, handleClose }) => {
  const [contactForms, setContactForms] = useState([{ index: 0 }]);

  const handleAddForm = () => {
    const newIndex =
      contactForms.length > 0 ?
        contactForms[contactForms.length - 1].index + 1 : 1;
    setContactForms(prevForms => [...prevForms, { index: newIndex }]);
  };

  const handleRemove = (indexToRemove) => {
    setContactForms(prevForms => prevForms.filter(form => form.index !== indexToRemove));
  };

  return (
    <>
      <Dialog
        sx={{
          '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper ': {
            maxWidth: 'unset',
            borderRadius: '16px'
          }
        }}
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ m: 0, p: 2, fontWeight: 400 }} id="customized-dialog-title">
          <div className={styles.addCustomer}>
            <h4>Create Customer</h4>
            <button className={styles.savebtn}>Save</button>
          </div>
        </DialogTitle>
        <DialogContent >
          <div className={styles.box}>
            <div className={styles.header}>
              <div>
                <h4 className={styles.newCustomer}>New Customer</h4>
                <h6 className={styles.enterdetail}>Customer Details</h6>
              </div>

            </div>
            
            <form className={styles.form}>
              <div className={styles.textfields}>
                <CommonTextfield
                  id='name'
                  name='name'
                  type='name'
                  label='Customer Name'
                  width='32.2'
                  required
                />
                <CommonTextfield
                  width='32.2'
                  id='email'
                  name='email'
                  type='email'
                  label='Customer Email'
                  required
                />
                <CommonTextfield
                  width='32.2'
                  id='phone'
                  name='phone'
                  type='phone'
                  label='Customer Phone'
                  variant='outlined'
                />
                <div style={{ width: '100%', margin: '5px' }}>
                  <h5 className={styles.heading}>Address</h5>
                </div>
                <CommonTextfield
                  width='24'
                  id='address'
                  name='address'
                  type='address'
                  label='Address'
                />
                <CommonTextfield
                  width='24'
                  id='city'
                  name='city'
                  type='city'
                  label='City'
                  variant='outlined'
                />
                <div className={styles.selectFields}>
                  <select
                    className='form-select'
                    style={createCustomerStyles.selectFiled}
                    defaultValue={''}
                    aria-label="Default select example"
                    name="state"
                  >
                    <option value="" disabled >Select a State</option>
                    {statesArray.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <CommonTextfield
                  width='24'
                  id='zip'
                  name='zip'
                  type='zip'
                  label='Zip'
                  variant='outlined'
                />
                <div style={{ width: '100%', margin: '5px' }}>
                  <h5 className={styles.heading}>Contact</h5>
                </div>
                <div className={styles.line} >
                  {contactForms.map((form, index) => (
                    <ContactFrom
                      key={form.index}
                      index={form.index}
                      handleAddForm={handleAddForm}
                      handleRemove={handleRemove}
                    />
                  ))}
                </div>
                <CommonTextfield
                  width='32'
                  id='website'
                  name='website'
                  type='website'
                  label='Website'
                  variant='outlined'
                />
                <div className={styles.selectFiledsforNet}>
                  <select
                    className="form-select"
                    style={{
                      borderColor: '#c4c4c4',
                      padding: '17px 14px 18px 10px',
                      fontSize: '13px',
                      width: '100%',
                      margin: '15px 0'
                    }}
                    defaultValue={2}
                    aria-label="Default select example"
                    name="state"
                  >
                    {netarray.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <CommonTextfield
                  width='32'
                  id='creditLimit'
                  name='creditLimit'
                  type='creditLimit'
                  label='Credit Limit'
                  variant='outlined'
                />
                <CommonTextfield
                  width='97'
                  id='customerNotes'
                  name='customerNotes'
                  type='textarea'
                  label='Customer Notes'
                  variant='outlined'
                />
              </div>

              <div className={styles.last}>
                <button
                  className={styles.btn}
                  onClick={handleClose}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog >
    </>
  );
}
export default CreateCustomer;