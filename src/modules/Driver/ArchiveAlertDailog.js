import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

const  ArchiveAlertDialog = (props) => {
  const{open,onClose} = props
  const dailogstyle={
    title:{
      backgroundColor:'black',
      color:'white',
      fontSize:'14px',
      fontWeight:'400',
      padding:'16px 24px 0px 24px'
    },
    action:{
      backgroundColor:'black',
      display:'flex',
      justifyContent: 'center',
    },
    yesbtn:{
        backgroundColor:'red',
        color:'black',
        textTransform:'none',
        padding:'4px 15px',
        width:'40%',
        fontWeight:300,
        fontSize:'13px',
        margin:0,
        borderRadius:'20px'
    },
    nobtn:{
        backgroundColor:'rgb(237, 202, 51)',
        color:'black',
        textTransform:'none',
        padding:'4px 15px',
        fontWeight:'300',
        fontSize:'13px',
        margin:0,
        width:'40%',
        borderRadius:'20px'
    }
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
       
      >
        <DialogTitle id="alert-dialog-title" style={dailogstyle.title} >
          {"Are you sure you want to remove?"}
        </DialogTitle>
        <DialogActions style={dailogstyle.action}>
          <Button onClick={onClose} style={dailogstyle.nobtn} autoFocus>
            No
          </Button>
          <Button onClick={onClose} style={dailogstyle.yesbtn}>Yes</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ArchiveAlertDialog