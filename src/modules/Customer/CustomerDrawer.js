import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import CustomerBalance from './Components/CustomerBalance/CustomerBalance';
import CustomerFunction from './Components/CustomerFunction';

const CustomerDrawer = ({ openResponsiveDrawer, closeResponsiveDrawer, height, width }) => {
  const [BalancePopupOpen, setBalancePopupOpen] = useState(false);

  const BalancePopupRendered = () => {
    setBalancePopupOpen(!BalancePopupOpen)
  }

  return (
    <>
     {BalancePopupOpen && <CustomerBalance BalancePopupRendered={BalancePopupRendered} />}
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
      <CustomerFunction />
    </Drawer>
    </>
  )
}

export default CustomerDrawer;