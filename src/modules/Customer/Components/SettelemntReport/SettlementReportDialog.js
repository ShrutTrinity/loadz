import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styles from './styles/settlementreport.module.scss';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const reportDialogButtonStyle = {
  button: {
    backgroundColor: 'rgb(237, 202, 51)',
    borderRadius: '18px',
    border: '1px solid black',
    color: 'black',
    fontSize: '13px'
  }
}

const SettlementReportDialog = ({ isOpen, handleSettlementReportDialog }) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleSettlementReportDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': { borderRadius: '16px' } }}
      >
        <DialogTitle id="alert-dialog-title">
          {"Credit & Bank Transfer Settlement Report"}
        </DialogTitle>
        <DialogContent>
          <div className={styles.content}>
            <div className={styles.part1}>
              <label className={styles.labelOfpart1}>
                Start Date*
              </label>
              <div className={styles.datePicker}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>

            <div className={styles.part1}>
              <label className={styles.labelOfpart1}>
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
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSettlementReportDialog}
            style={reportDialogButtonStyle.button}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSettlementReportDialog}
            style={reportDialogButtonStyle.button}
          >
            Download
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default SettlementReportDialog;