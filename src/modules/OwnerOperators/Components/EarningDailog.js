import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Button, DialogTitle } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CustomTextFiled from '@Jobs/components/TextField/CustomTextFiled';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const EarnignDailog = ({ open, onClose }) => {
  const DailogStyle = {
    title: {
      fontWeight: '300',
      display:'flex',
      justifyContent:'space-between'
    },
    contaxt: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '20px',
      fontWeight: '300'
    },
    flexdiv: {
      display: 'flex',
      width:'100%',
      gap:'10px',
      justifyContent: 'center',
      // alignItems:'center',
    },
    textfield:{
      width:'20%'
    },
    icon:{
      marginTop: '10px'
    },
    closebtn:{
      color:'rgb(237, 202, 51)',
      fontSize:'13px',
      fontWeight:'300',
      textTransform: 'none',
    }
  }
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper ': {
            maxWidth: 'unset',
            width: '80%',
            borderRadius: '20px',
            fontSize: '10px !important'
          }
        }}
      >
        <DialogTitle id="alert-dialog-title" style={DailogStyle.title}>
          {"Owner Operator Earnings"}
          <CloseIcon onClick={onClose}/>
        </DialogTitle>
        <DialogContent style={DailogStyle.contaxt}>
          <label>
            Select a date range to view earnings</label>
          <div style={DailogStyle.flexdiv}>
            <DateRangeIcon style={DailogStyle.icon} />
            <div style={DailogStyle.textfield}>
              <CustomTextFiled type='date' />
            </div>
            <div style={DailogStyle.textfield}>
              <CustomTextFiled type='date' />
            </div>
            <SearchIcon style={DailogStyle.icon}/>
          </div>

        </DialogContent>
        <DialogActions>
          <Button
          style={DailogStyle.closebtn}
            onClick={onClose}
          >
            Close
          </Button>

        </DialogActions>
      </Dialog>
    </>
  );
}

export default EarnignDailog;