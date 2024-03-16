import React, { useState } from 'react';
import PersistentDrawerLeft from '@components/navbar/header';
import { Route, Routes } from 'react-router-dom';
import Body from '../Dashboard/body';
import Job from '../Jobs/Job';
import AddNew from '../Jobs/AddNew';
const Panel = () => {

  const [open, setOpen] = useState(false);
  const [setting, setSetting] = useState(false);
  const [textSelectorOpen, setTextSelectorOpen] = useState(false)
  
  
    const toggleTextSelector = () => {
      setTextSelectorOpen(!textSelectorOpen);
    };

  const handleOpen = () => {
    setSetting(true)
  }
  const handleClosse = () => {
    console.log("abc")
    setSetting(false)
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <>
      <PersistentDrawerLeft setting={setting} handleClose={handleClosse} handleOpen={handleOpen} open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} textSelectorOpen={textSelectorOpen} toggleTextSelector={toggleTextSelector} />
      <Routes>
        <Route exact path='/' element={<Body handleDrawerClose={handleDrawerClose} textSelectorOpen={textSelectorOpen} toggleTextSelector={toggleTextSelector} open={open} />} />
        <Route exact path='/jobs' element={<Job handleDrawerClose={handleDrawerClose} textSelectorOpen={textSelectorOpen} toggleTextSelector={toggleTextSelector} open={open} />} />
        <Route exact path='/jobs/new' element={<AddNew handleDrawerClose={handleDrawerClose} textSelectorOpen={textSelectorOpen} toggleTextSelector={toggleTextSelector} open={open} />} />
      </Routes>
    </>
  );
};

export default Panel;