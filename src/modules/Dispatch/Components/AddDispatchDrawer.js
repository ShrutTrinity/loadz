import React from 'react';
import AddDispatcherFunction from './AddDispatcherFunction';
import { Drawer } from '@mui/material';

const AddDispatchDrawer = ({ openDrawer, closeDrawer }) => {

  return (
    <>
      <Drawer
        anchor='right'
        open={openDrawer}
        onClose={closeDrawer}
        sx={{
          '& .css-1160xiw-MuiPaper-root-MuiDrawer-paper': {
            width: {
              xs: '100%',
              sm: '50%',
              md: '40%',
              lg: '40%',
              xl: '40%'
            },
          }
        }}
      >
        <AddDispatcherFunction closeDrawer={closeDrawer}/>
      </Drawer>
    </>
  )
}

export default AddDispatchDrawer
