import React, { useState } from 'react'
import styles from './Styles/archive.module.scss';
import DialogActions from '@mui/material/DialogActions';
import { Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { Dialog, DialogContent } from '@mui/material'
import inspection from '@images/inspection.png';
import ChatIcon from '@mui/icons-material/Chat';
import ArchiveDrawer from './ArchiveDrawer';
import ArchiveResponsiveDrawer from './Components/ArchiveResponsiveDrawer';
import useDimensions from '@hooks/useDimensions.js';

const allStyle = {
  button: {
    color: 'rgb(237,202,51)',
    fontSize: '13px',
    fontWeight: '300',
    textTransform: 'capitalize',
    padding: '6px 16px',
    background: 'rgb(255,255,255)',
    width: '100%',
    justifyContent: 'end'
  },
  textFieldStyle: {
    margin: '6px 0',
    background: 'rgb(255,255,255)',
    fontSize: '13px',
    width: '100%'
  }
}

const Archived = ({ openArchiveDialog, closeArchiveDialog }) => {

  const [responsiveDrawer, setResponsiveDrawer] = useState(false);
  const [ref, dimensions] = useDimensions();

  const handleResponsiveDrawer = () => {
    console.log('hello')
    setResponsiveDrawer(true);
  }

  return (
    <>
    <ArchiveResponsiveDrawer 
       height={dimensions.height}
       width={dimensions.width}
       openResponsiveDrawer={responsiveDrawer}
       closeResponsiveDrawer={handleResponsiveDrawer}
    />
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

                  <div className={styles.drawerContainer}>
                    <ArchiveDrawer />
                  </div>

                  <div className={styles.contentWrapper} ref={ref}>
                    <div className={styles.heading}>
                      <ChatIcon className={styles.openDailogIcon} onClick={handleResponsiveDrawer} />
                      Subcontractors Details
                    </div>
                    <div className={styles.box}>
                      <div className={styles.circle}>
                        <img src={inspection} alt='pictureOfInspection' className={styles.image} />
                      </div>
                      <div className={styles.heading2}>
                        Subcontractors Info
                      </div>
                      <div className={styles.detail}>
                        Select a subcontractor to view invoices info...
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
            Close
          </Button>
        </DialogActions>
      </Dialog >
    </>
  )
}

export default Archived;
