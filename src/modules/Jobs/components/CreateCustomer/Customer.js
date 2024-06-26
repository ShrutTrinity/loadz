import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styles from './styles/customer.module.scss';
import ContactFrom from './ContactFrom';
import CommonTextfield from '../TextField/CommonTextfield';

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

const Customer = (props) => {

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
  const handleClickInside = (event) => {
    event.stopPropagation();
  };


  return (
    <>

      <Grid container justifyContent="center" alignItems="center" onClick={props.openCreateUser}
        style={{ height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed', zIndex: 21 }}>
        <Box
          onClick={handleClickInside}
          sx={{
            width: '77vw',
            backgroundColor: 'white',
            borderRadius: '15px',
            height: '90%',
            padding: '20px 3px 20px 20px',
          }}
        >
          <h5 className={styles.addCustomer}>Add new customer</h5>
          <div className={styles.box}>
            <h6 className={styles.enterdetail}>Enter the details below to create a new customer.</h6>
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
                  <h5 className={styles.addCustomer}>Address</h5>
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
                  <h5 className={styles.addCustomer}>Contact</h5>
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
                  aria-label="Default select example"
                  name="state"
                >
                  <option value="" selected  >Net 3</option>
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
              <div className={styles.last}>
                <button className={styles.btn} onClick={props.openCreateUser}>close</button>
                <button className={styles.btn2}>create</button>
              </div>

            </form>
          </div>
        </Box>
      </Grid>

    </>
  );
}

export default Customer;
