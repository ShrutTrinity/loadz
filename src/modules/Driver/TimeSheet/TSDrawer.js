import { Drawer } from '@mui/material';
import React from 'react'
import TimeSheetFunction from './TimeSheetFunction';

const TSDrawer = (props) => {
  const { openResponsiveDrawer, closeResponsiveDrawer, height, width,timeSheetDetail } = props
  return (
    <>
      <Drawer
        anchor='left'
        open={openResponsiveDrawer}
        onTouchMove={closeResponsiveDrawer}
        PaperProps={{
          sx: {
            position: 'absolute',
            top: `calc(50% - ${height / 2}px)`,
            left: `calc(50% - ${width / 2}px)`,
            height: `${height}px`,
            width: `${width}px`,
            transform: 'translate(-50%, -0%)',
            transition: 'transform 0.3s ease-in-out',
          },
        }}
        ModalProps={{
          hideBackdrop: true,
        }}
      >
        <TimeSheetFunction timeSheetDetail={timeSheetDetail}/>
      </Drawer>
    </>
  )
}

export default TSDrawer;