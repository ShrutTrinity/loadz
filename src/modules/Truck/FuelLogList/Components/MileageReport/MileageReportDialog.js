import React from 'react';
import styles from './styles/mileageDialog.module.scss';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Checkbox, FormControlLabel } from '@mui/material';

const customStyle = {
  button: {
    background: 'rgb(0,0,0)',
    color: 'rgb(255, 255, 255)',
    fontSize: '13px',
    fontWeight: '300',
    margin: '16px 16px',
    width: '20%',
    borderRadius: '20px',
    textAlign: 'right'
  }
}

const MileageReportDialog = ({ mileageDialogOpen, mileageDialogClose }) => {
  return (
    <>
      <Dialog
        open={mileageDialogOpen}
        onClose={mileageDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

        sx={{
          '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper ': {
            maxWidth: 'unset',
            width: '68vw',
            borderRadius: '20px'
          }
        }}
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
              <span className={styles.ruleText}>Use the Search form to filter start date to end date, all trucks or by truck no, And all drivers or by driver to export comma separated values fuel report
              </span>
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
                      <DatePicker sx={{ width: '100%' }} />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>
              <div className={styles.dateContent}>
                <label className={styles.labelOfpart}>
                  Final Date*
                </label>
                <div className={styles.datePicker2}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker sx={{ width: '100%' }} />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>
            </div>
            <br />

            <div className={styles.term}>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: 'black',
                      '&.Mui-checked': {
                        color: 'rgb(237,202,51)',
                      },
                    }}
                  />
                }
                label="csv"
              />
            </div>

          </div>
          <div className={styles.bottomFunction}>
            <Button onClick={mileageDialogClose} style={customStyle.button}>Report</Button>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default MileageReportDialog;