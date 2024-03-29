import React, { useEffect, useState } from 'react';
import PersistentDrawerLeft from '@components/navbar/header';
import { Route, Routes } from 'react-router-dom';
import Body from '../Dashboard/body';
import Job from '../Jobs/Job';
import AddNew from '../Jobs/AddNew';
import JobBill from '../Jobs/JobBill';
import Index from '@components/Footer/Index';
import NewLocation from '../Jobs/components/AddNewLocation/NewLocation';
import Mobiletable from '../Jobs/components/JobDataTable/mobiletable';
import Customer from '../Customer/Customer';

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
  
  useEffect(() => {
    if (window.innerWidth >= 1300) {
      setOpen(true)
    }
  }, []);

  return (
    <>
      <PersistentDrawerLeft setting={setting} handleClose={handleClosse} handleOpen={handleOpen} open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} textSelectorOpen={textSelectorOpen} toggleTextSelector={toggleTextSelector} />
      <Routes>
        <Route exact path='/dashboard' element={<Body handleDrawerClose={handleDrawerClose} textSelectorOpen={textSelectorOpen} toggleTextSelector={toggleTextSelector} open={open} />} />
        <Route exact path='/jobs' element={<Job handleDrawerClose={handleDrawerClose} textSelectorOpen={textSelectorOpen} toggleTextSelector={toggleTextSelector} open={open} />} />
        <Route exact path='/jobs/new' element={<AddNew handleDrawerClose={handleDrawerClose} textSelectorOpen={textSelectorOpen} toggleTextSelector={toggleTextSelector} open={open} />} />
        <Route exact path='/customers' element={<Customer handleDrawerClose={handleDrawerClose} textSelectorOpen={textSelectorOpen} toggleTextSelector={toggleTextSelector} open={open} />} />
        <Route ezxact path='/k' element={<Mobiletable handleDrawerClose={handleDrawerClose} textSelectorOpen={textSelectorOpen} toggleTextSelector={toggleTextSelector} open={open} />} />
        <Route exact path='/jobs/billing/new' element={<JobBill />} />
      </Routes>
      <Index/>  
      </>
  );
};

export default Panel;