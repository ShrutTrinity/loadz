import React from 'react'
import styles from './Styles/archive.module.scss';
import DialogActions from '@mui/material/DialogActions';
import { Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { TextField, InputAdornment, Dialog, DialogContent } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import inspection from '@images/inspection.png'

const allStyle = {
  button: {
    background: 'rgb(237,202,51)',
    color: 'rgb(0,0,0)',
    fontSize: '13px',
    fontWeight: '300',
    textTransform: 'capitalize',
    borderRadius: '18px',
    padding: '6px 16px',
  },
  textFieldStyle: {
    margin: '6px 0',
    background: 'rgb(255,255,255)',
    fontSize: '13px',
    width: '100%'
  }
}

const Archived = ({ openArchiveDialog, closeArchiveDialog }) => {

  return (
    <>
      <Dialog
        open={openArchiveDialog}
        onClose={closeArchiveDialog}
        aria-describedby="alert-dialog-slide-description"

        sx={{
          '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper ': {
            maxWidth: 'unset',
            maxHeight: 'unset',
            width: '100vw',
            height: '100vh',
            borderRadius: '0px',
            margin: '0px'
          }
        }}
      >
        <DialogContent
          sx={{
            padding: '0px',
          }}>
          <div className={styles.body}>
            <header className={styles.header}>
              <p className={styles.heading}>Subcontractor Archive</p>
              <div
                className={styles.headingIcon}
                onClick={closeArchiveDialog}
              >
                <ClearIcon />
              </div>
            </header>

            <div className={styles.container}>
              <div className={styles.backrow}></div>
              <div className={styles.CardWrapper}>
                <div className={styles.contentCard}>
                  <div className={styles.drawer}>
                    <div className={styles.searchbar}>
                      <TextField
                        size="small"
                        placeholder='Search Customers'
                        variant="outlined"
                        sx={{
                          '& .css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root': {
                            borderRadius: '20px',
                          },
                          '& .css-1ua80n0-MuiInputBase-input-MuiOutlinedInput-input': {
                            padding: '5px'
                          },
                          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 1px 2px;',
                          border: 'none',
                          flexGrow: 1,
                          width: '100%',
                          borderRadius: '20px',
                          backgroundColor: 'white',
                          '@media (max-width: 1200px)': {
                            width: '100%',
                          }
                        }}
                        InputProps={{

                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon sx={{ color: 'black' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                  </div>

                  <div className={styles.contentWrapper}>
                    <div className={styles.box}>
                      <div className={styles.circle}>
                        <img src={inspection} alt='pictureOfInspection' className={styles.image} />
                      </div>
                      <div className={styles.heading2}>
                        Driver Info
                      </div>
                      <div className={styles.detail}>
                        Choose a driver to view their profile...
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>


          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={closeArchiveDialog}
            style={allStyle.button}
          >
            Send Message
          </Button>
        </DialogActions>
      </Dialog >
    </>
  )
}

export default Archived;
