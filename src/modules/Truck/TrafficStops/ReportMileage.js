import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import styles from './style/mileageReport.module.scss';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { MenuItem, Select } from '@mui/material';

const truckArray = [
  'thon','jhon', 'micle', 'sweed'
];

const driverArray = [
  'dhon','jhon', 'micle', 'sweed'
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
  },
  selectList: {
    fontSize: '13px',
  }
}

const ReportMileage = ({ mileageDialogOpen, mileageDialogClose }) => {

  const [driverName, setDriverName] = useState('');
  const [truck, setTruck] = useState('');

  const handleDriverName = (event) => {
    setDriverName(event.target.value);
  }

  const handleTruck = (event) => {
    setTruck(event.target.value);
  }

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
          <div className={styles.dateContainer}>
            <div className={styles.dateContent}>
              <label className={styles.labelOfpart}>
                Start Date*
              </label>
              <div className={styles.datePicker2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker slotProps={{ textField: { size: 'small' } }} />
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
                    <DatePicker slotProps={{ textField: { size: 'small' } }} />
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
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={truck}
                defaultValue='10'
                onChange={handleTruck}
                required
                size='small'
                sx={{
                  width: '100%',
                  margin: '0px 0 8px',
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(0, 0, 0, 0.23)',
                  },
                  backgroundColor: 'rgb(255,255,255)'
                }}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 96,
                      borderRadius: '12px'
                    },
                  },
                }}
              >
                {truckArray.map((truck, index) => (
                  <MenuItem key={index} value={truck} style={createCustomerStyles.selectList}>
                    {truck}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>

          <div className={styles.driverContainer}>
            <label className={styles.labelOfpart}>
              Driver:
            </label>
            <div className={styles.selectFields}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={driverName}
                defaultValue='10'
                onChange={handleDriverName}
                required
                size='small'
                sx={{
                  width: '100%',
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(0, 0, 0, 0.23)',
                  },
                  backgroundColor: 'rgb(255,255,255)'
                }}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 96,
                      borderRadius: '12px'
                    },
                  },
                }}
              >
                {driverArray.map((driver, index) => (
                  <MenuItem key={index} value={driver} style={createCustomerStyles.selectList}>
                    {driver}
                  </MenuItem>
                ))}
              </Select>
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