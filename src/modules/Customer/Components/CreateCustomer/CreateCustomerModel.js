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
const CreateCustomer = (props) => {
  const [count, setCount] = useState(1);
  const [contactForms, setContactForms] = useState([{ index: 1 }]);
  console.log(contactForms)
  const handleChange = () => {
    setCount(prevCount => prevCount + 1);
    setContactForms(prevForms => [...prevForms, { index: count + 1 }]);
  };
  const handleChangedecrese = (indexToRemove) => {
    if (count > 1) {
      setContactForms(prevForms => {
        setCount(count - 1)
        const updatedForms = prevForms.filter(form => form.index !== indexToRemove);
        return updatedForms.map((form, index) => ({
          ...form,
          index: index + 1
        }));
      });
    }
  };
  return (
    <>
      <Dialog
        sx={{
          '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper ': {
            maxWidth: 'unset'
          }
        }}
        open={props.isOpen}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ m: 0, p: 2, fontWeight: 400 }} id="customized-dialog-title">
          <h4 className={styles.addCustomer}>Create Customer</h4>
        </DialogTitle>
        <DialogContent >

          <div className={styles.box}>
            <div className={styles.header}>
              <div>
                <h4 className={styles.newCustomer}>New Customer</h4>
                <h6 className={styles.enterdetail}>Customer Details</h6>
              </div>
              <button className={styles.savebtn}>Save</button>

            </div>
            <br />
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
                <div style={{ width: '100%', margin: '30px 0 5px 0' }}>
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
                <select
                  className='form-select'
                  style={{ borderColor: '#c4c4c4', margin: '15px 0', padding: '13px 14px 13px 10px', fontSize: '13px', width: '24%' }}
                  aria-label="Default select example"
                  name="state"
                >
                  <option value="" selected disabled >Select a State</option>
                  {statesArray.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <CommonTextfield
                  width='24'
                  id='zip'
                  name='zip'
                  type='zip'
                  label='Zip'
                  variant='outlined'
                />
                <div style={{ width: '100%', margin: '30px 0 5px 0' }}>
                  <h5 className={styles.heading}>Contact</h5>
                </div>
                <div className={styles.line} >
                  {contactForms.map((form, index) => (
                    <ContactFrom index={index} handleChange={handleChange} handleChangedecrese={handleChangedecrese} />
                  ))}
                </div>
                <CommonTextfield
                  width='98'
                  id='website'
                  name='website'
                  type='website'
                  label='Website'
                  variant='outlined'
                />
                <select
                  className="form-select"
                  style={{
                    borderColor: '#c4c4c4', padding: '13px 14px 13px 10px', fontSize: '13px', width: '49%', margin: '15px 0'
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
                <CommonTextfield
                  width='48'
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
                  type='customerNotes'
                  label='Customer Notes'
                  variant='outlined'
                />
              </div>
              <button className={styles.savebtn}>Save</button>
              <div className={styles.last}>
                <button className={styles.btn} onClick={props.handleClose}>close</button>

              </div>

            </form>
          </div>
        </DialogContent>


      </Dialog >
    </>
  );
}
export default CreateCustomer;