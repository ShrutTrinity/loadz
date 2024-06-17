import React, { useState } from 'react';
import styles from './styles/CreateNewJob.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CustomTextField from '@components/textfield/CustomeTextfield';
import { useFormik } from 'formik';
import Checkbox from '@mui/material/Checkbox';
import SelectUser from './components/SelectCustomer/Select';
import Customer from './components/CreateCustomer/Customer';
import Notifications from './components/Notification/Notifications';
import GoogleMaps from './components/Map/GoogleMaps';
import { Link } from 'react-router-dom';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import NewLocation from './components/AddNewLocation/NewLocation';
import CommonTextfield from './components/TextField/CommonTextfield';

const CreateNewJob = (props) => {
  const [clickOnCreateCustomer, setClickOnCreateCustomer] = useState(false);
  const [addNotification, setAddNotification] = useState(1);
  const [openPopupOrigin, setOpenPopupOrigin] = useState(false)
  const [openPopupDest, setOpenPopupDest] = useState(false)

  const PopupOpen = () => {
    setOpenPopupOrigin(!openPopupOrigin)
  }
  const PopupOpenDest = () => {
    setOpenPopupDest(!openPopupDest)
  }

  const ClosePopup = () => {
    setOpenPopupOrigin(false)
    setOpenPopupDest(false)
  }

  const openCreateUser = () => {
    setClickOnCreateCustomer(!clickOnCreateCustomer);
  }

  const formik = useFormik({
    initialValues: {
      SelectCustomer: '',
      PurchaseOrder: '',
    }
  })

  const bodyStyle = {
    width: `calc(100% - ${props.open ? 290 : 0}px)`,
  }
  if (window.innerWidth <= 1300) {
    bodyStyle.width = '100%';
    var bodyclick = props.handleDrawerClose;
  }

  const addNotificationList = () => {
    setAddNotification(addNotification + 1)
  }

  const removeNotificationList = () => {
    if (addNotification > 1) {
      setAddNotification(addNotification - 1)
    }
  }

  return (
    <>
      {openPopupDest && <NewLocation ClosePopup={ClosePopup} />}
      {openPopupOrigin &&
        <NewLocation ClosePopup={ClosePopup}
          children={<CommonTextfield
            width='100'
            id='id'
            type='text'
            label='Name' required
          />}
        />
      }
      {clickOnCreateCustomer && <Customer openCreateUser={openCreateUser} />}
      <div className={styles.body} style={bodyStyle} onClick={props.textSelectorOpen ? props.toggleTextSelector : bodyclick}   >
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.heading}>
              <Link to="/jobs" className={styles.backLink}>
                <div className={styles.part1}>
                  <ArrowBackIcon fontSize="small" />
                  <span>Back to Jobs Overview</span>
                </div>
              </Link>
              <div className={styles.part2}>
                <div className={styles.headerText}>
                  <h4>Add Job</h4>
                </div>
              </div>
            </div>
            <div className={styles.continueButton}>
              <Link to='/jobs/billing/new' className={styles.link}>
                <button className={styles.nextButton}>
                  Save & Continue
                  <span className={styles.iconForwardButton}>
                    <ArrowForwardIcon />
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div>
            <div className={styles.mainContainer}>
              <div className={styles.partLeft}>
                <div className={styles.upperForm}>
                  <div className={styles.t1}>
                    <label>Select Customer</label>
                    <SelectUser openCreateUser={openCreateUser} />
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
                      children4=<div className={styles.btn}><EditLocationAltIcon onClick={PopupOpen} sx={{ cursor: 'pointer', fontSize: '18px' }} /></div>
                    />
                  </div>
                  <div className={styles.m1}>
                    <CustomTextField
                      name='Destination'
                      label="Destination"
                      placeholder="Destination"
                      type="text"
                      children4=<div className={styles.btn}><EditLocationAltIcon onClick={PopupOpenDest} sx={{ cursor: 'pointer', fontSize: '18px' }} /></div>
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
              <div className={styles.partRight}>
                <GoogleMaps />
              </div>
            </div>
            <hr></hr>

            {/* notifications */}
            {[...Array(addNotification)].map((index) => (
              <Notifications key={index} removeNotificationList={removeNotificationList} addNotificationList={addNotificationList} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateNewJob
