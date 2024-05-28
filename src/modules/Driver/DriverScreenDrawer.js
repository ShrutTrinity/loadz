import React from 'react';
import Drawer from '@mui/material/Drawer';
import DriverFunctions from './DriverFunctions';

const DriverScreenDrawer = ({
  openResponsiveDrawer,
  closeResponsiveDrawer,
  height,
  width,
  openDetail
}) => {

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
        <DriverFunctions openDetail={openDetail} />
      </Drawer>
    </>
  );
};
export default DriverScreenDrawer;