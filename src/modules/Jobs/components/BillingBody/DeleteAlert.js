
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

const DeleteAlert = ({handleDeleteData,index,closePopUp}) => {

    return (
        <Dialog
            open={true}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{'& .css-1t1j96h-MuiPaper-root-MuiDialog-paper' :  {borderRadius : '16px'}}}
          >
            <DialogContent sx={{padding:'20px 24px 8px 24px'}}>
              <DialogContentText id="alert-dialog-description" sx={{fontSize:'13px',fontWeight:600}}>
                Are you sure you want to delete this item?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button sx={{
                backgroundColor: 'rgb(237, 202, 51)',
                color: 'black',
                padding: '6px 8px',
                marginLeft: '8px',
                borderRadius: '18px',
                fontSize: '13px',
                ":hover": {
                  backgroundColor: 'rgb(237,202,51)'
                }
              }} onClick={() => handleDeleteData(index)}>Confirm</Button>
              <Button sx={{
                backgroundColor: 'rgb(255, 0, 0)',
                color: 'white',
                padding: '6px 8px',
                marginLeft: '8px',
                borderRadius: '18px',
                fontSize: '13px',
                ":hover": {
                  backgroundColor: 'rgb(255, 0, 0)'
                }
              }} onClick={closePopUp} autoFocus>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
    )
}

export default DeleteAlert