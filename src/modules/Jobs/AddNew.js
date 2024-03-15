import React, {useState} from 'react';
import styles from './styles/addNew.module.scss';
import Index from '@components/Footer/Index';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CustomTextField from '@components/textfield/CustomeTextfield';
import { useFormik } from 'formik';
import Checkbox from '@mui/material/Checkbox';
import SelectUser from './components/SelectCustomer/Select';
import Customer from './components/CreateCustomer/Customer';

const AddNew = () => {
  const [clickOnCreateCustomer, setClickOnCreateCustomer] = useState(false);

    const openCreateUser = () => {
        setClickOnCreateCustomer(!clickOnCreateCustomer);
    }

  const formik = useFormik({
    initialValues: {
      SelectCustomer: '',
      PurchaseOrder: '',
    }
  })

  return (
    <>
    {clickOnCreateCustomer && <Customer openCreateUser={openCreateUser} />}
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.heading}>
              <div className={styles.part1}>
                <ArrowBackIcon fontSize="small" />
                <span>Back to Jobs Overview</span>
              </div>
              <div className={styles.part2}>
                <div className={styles.headerText}>
                  <h4>Add Job</h4>
                </div>
              </div>
            </div>
            <div className={styles.continueButton}>
              <button className={styles.nextButton}>
                Save & Continue
                <span className={styles.iconForwardButton}>
                  <ArrowForwardIcon />
                </span>
              </button>
            </div>
          </div>
          <div>
            <div className={styles.mainContainer}>
              <div className={styles.partLeft}>
                <div className={styles.upperForm}>
                  <div className={styles.t1}>
                    <label>Select Customer</label>
                    <SelectUser openCreateUser={openCreateUser}/>
                  </div>
                  <div className={styles.t1}>
                    <CustomTextField
                      name='PurchaseOrder'
                      label="Purchase Order"
                      placeholder="Purchase Order"
                      type="text"
                      formik={formik}
                    />
                  </div>
                </div>
                <div className={styles.middelForm1}>
                  <div className={styles.m1}>
                    <CustomTextField
                      name='Origin'
                      label="Select Quarry Pit or Create an Origin"
                      placeholder="Select Quarry Pit or Create an Origin"
                      type="text"
                      formik={formik}
                    />
                  </div>
                  <div className={styles.m1}>
                    <CustomTextField
                      name='Destination'
                      label="Destination"
                      placeholder="Destination"
                      type="text"
                      formik={formik}
                    />
                  </div>
                </div>
                <div className={styles.middelForm1}>
                  <div className={styles.m1}>
                    <CustomTextField
                      name='FulFillmentWarning'
                      label="FulFillment Warning"
                      placeholder="FulFillment Warning"
                      type="text"
                      formik={formik}
                    />
                  </div>
                  <div className={styles.m1}>
                    <CustomTextField
                      name='FulFillmentTotal'
                      label="FulFillment Total"
                      placeholder="FulFillment Total"
                      type="text"
                      formik={formik}
                    />
                  </div>
                </div>
                <div className={styles.bottomform}>
                  <CustomTextField
                    name='Notes'
                    label="Notes"
                    placeholder="Notes"
                    type="text"
                    formik={formik}
                  />
                </div>
                <div className={styles.checkMarks}>
                  <label className={styles.l1}>
                    <Checkbox
                      {...formik.getFieldProps('rememberMe')}
                      sx={{
                        marginLeft: '-0.5rem',
                        color: 'black',
                        '&.Mui-checked': {
                          color: 'rgb(237, 202, 51)',
                        },
                      }}
                    />
                    <div className={styles.label1}>Scale Ticket Number Required ?</div>
                  </label>
                  <label className={styles.l1}>
                    <Checkbox
                      {...formik.getFieldProps('rememberMe')}
                      sx={{
                        marginLeft: '-0.5rem',
                        color: 'black',
                        '&.Mui-checked': {
                          color: 'rgb(237, 202, 51)',
                        },
                      }}
                    />
                    <div className={styles.label1}>Display Customer Name on Driver Tickets ?</div>
                  </label>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className={styles.notificationContent}>
              <div>
                <div className={styles.heading}>
                  <div className={styles.object}>
                    <span>Notifications</span>
                  </div>
                  <div className={styles.s1}>
                    <Checkbox
                      {...formik.getFieldProps('rememberMe')}
                      sx={{
                        marginLeft: '-0.5rem',
                        color: 'black',
                        '&.Mui-checked': {
                          color: 'rgb(237, 202, 51)',
                        },
                      }}
                    />
                    <div className={styles.label1}>Fulfillment Warning</div>
                  </div>
                  <div className={styles.s1}>
                    <Checkbox
                      {...formik.getFieldProps('rememberMe')}
                      sx={{
                        marginLeft: '-0.5rem',
                        color: 'black',
                        '&.Mui-checked': {
                          color: 'rgb(237, 202, 51)',
                        },
                      }}
                    />
                    <div className={styles.label1}>Fulfillment Total</div>
                  </div>
                  <div className={styles.s1}>
                    <Checkbox
                      {...formik.getFieldProps('rememberMe')}
                      sx={{
                        marginLeft: '-0.5rem',
                        color: 'black',
                        '&.Mui-checked': {
                          color: 'rgb(237, 202, 51)',
                        },
                      }}
                    />
                    <div className={styles.label1}>First Load of the Day</div>
                  </div>
                  <div className={styles.s1}>
                    <Checkbox
                      {...formik.getFieldProps('rememberMe')}
                      sx={{
                        marginLeft: '-0.5rem',
                        color: 'black',
                        '&.Mui-checked': {
                          color: 'rgb(237, 202, 51)',
                        },
                      }}
                    />
                    <div className={styles.label1}>Delays</div>
                  </div>
                </div>
                <div className={styles.notificationContent}>
                  <div className={styles.nt1}>
                    <CustomTextField
                      name='name'
                      label="Name"
                      placeholder="Name"
                      type="text"
                      formik={formik}
                    />
                  </div>
                  <div className={styles.nt1}>
                    <CustomTextField
                      name='email'
                      label="Email"
                      placeholder="Email"
                      type="text"
                      formik={formik}
                    />
                  </div>
                  <div className={styles.nt1}>
                    <CustomTextField
                      name='phone'
                      label="Phone"
                      placeholder="Phone"
                      type="text"
                      formik={formik}
                    />
                  </div>
                  <div className={styles.buttons}>
                  <button style={{
                    height: '40px',
                    width: '40px',
                    fontSize: '25px',
                    border: 'none',
                    borderRadius: ' 50%',
                    backgroundColor: 'rgb(237, 202, 51)',
                    boxShadow: ' 4px 4px 9px -6px #222rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px'
                  }}>+</button >
                  <button style={{
                    height: '40px',
                    width: '40px',
                    fontSize: '25px',
                    border: 'none',
                    borderRadius: ' 50%',
                    boxShadow: ' 4px 4px 9px -6px #222rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px'
                  }}>-</button >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Index />
    </>
  )
}

export default AddNew
