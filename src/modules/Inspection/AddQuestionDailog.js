import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import StarIcon from '@mui/icons-material/Star';
import ErrorIcon from '@mui/icons-material/Error';

const AddQuestionDailog = (props) => {


  const { open, handleClose } = props

  const dailogstyle = {
    title: {
      backgroundColor: 'rgb(237, 202, 51)',
      fontSize: '14px'
    },
    content: {
      margin: '10px 0px'
    },
    icons: {
      display: 'flex',
      gap: '30px',
      fontSize: '14px',
      alignItem: 'center',
    },
    req: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
  return (
    <>
      <Dialog
        sx={{
          '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
            borderRadius: '20px',
            minWidth:'40%',
            maxWidth:'unset'
          }
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={dailogstyle.title}>
          {"New Question"}
        </DialogTitle>
        <DialogContent style={dailogstyle.content}>
          <div style={dailogstyle.icons}>
            <span style={dailogstyle.req}>
              required <ErrorIcon className="icon" sx={{ color: 'red' }} />
            </span>
            <span style={dailogstyle.req}>
              suggested
              <StarIcon className="icon star" sx={{ color: 'rgb(237, 202, 51)' }} />
            </span>
          </div>
          <hr/>

        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddQuestionDailog
