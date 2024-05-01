import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import styles from './style/mileageReport.module.scss';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

const truckArray = [
  'jhon', 'micle', 'sweed'
];

const driverArray = [
  'jhon', 'micle', 'sweed'
];

const createCustomerStyles = {
  selectFiled: {
    borderColor: '#c4c4c4',
    margin: '15px 0',
    padding: '17px 14px 17.5px 10px',
    fontSize: '13px',
    width: '100%',
  },
  button: {
    background: 'rgb(0,0,0)',
    color: 'rgb(237, 202, 51)',
    fontSize: '13px',
    fontWeight: '300',
    margin: '16px 16px',
    width: '20%',
    borderRadius: '20px',
    textAlign: 'right'
  }
}

const ReportMileage = ({ mileageDialogOpen, mileageDialogClose }) => {

  return (
    <Dialog
      open={mileageDialogOpen}
      onClose={mileageDialogClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.headerText}>
            <ContentPasteIcon />
            Report Mileage log
          </span>
        </div>
        <div className={styles.content}>
          <div className={styles.rules}>
            <span>To generate a fuel report, use the search form:</span>
            <span>-  Filter by date range (start to end).</span>
            <span>-  Select specific or all trucks.</span>
            <span>-  Choose a particular driver or view all.</span>
            <span>The report will be exported as comma-separated values (CSV).</span>
          </div>
          <br />
          <br />
          <div className={styles.dateContainer}>
            <div className={styles.dateContent}>
              <label className={styles.labelOfpart}>
                Start Date*
              </label>
              <div className={styles.datePicker2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
            <div className={styles.dateContent}>
              <label className={styles.labelOfpart}>
                End Date*
              </label>
              <div className={styles.datePicker2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
          </div>

          <div className={styles.trucksContainer}>
            <label className={styles.labelOfpart}>
              Trucks:
            </label>
            <div className={styles.selectFields}>
              <select
                className='form-select'
                style={createCustomerStyles.selectFiled}
                defaultValue={''}
                aria-label="Default select example"
                name="state"
              >
                <option disabled></option>
                {truckArray.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.driverContainer}>
            <label className={styles.labelOfpart}>
              Driver:
            </label>
            <div className={styles.selectFields}>
              <select
                className='form-select'
                style={createCustomerStyles.selectFiled}
                defaultValue={''}
                aria-label="Default select example"
                name="state"
              >
                <option disabled></option>
                {driverArray.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className={styles.bottomFunction}>
          <Button onClick={mileageDialogClose} style={createCustomerStyles.button}>Report</Button>
        </div>
      </div>
    </Dialog>
  )
}

export default ReportMileage;