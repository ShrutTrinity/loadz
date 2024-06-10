import React, { useEffect, useState } from 'react';
import PersistentDrawerLeft from '@components/navbar/header';
import { Route, Routes } from 'react-router-dom';
import Body from '../Dashboard/body';
import Job from '../Jobs/Job';
import AddNew from '../Jobs/AddNew';
import JobBill from '../Jobs/JobBill';
import Index from '@components/Footer/Index';
import Customer from '../Customer/Customer';
import UninvoicedBody from '../Uninvoiced/UninvoicedBody';
import AddTruckAndTrailer from '../Truck/AddTruckAndTrailer';
import Addtruckform from '../Truck/AddTruckFrom/Addtruckform';
import DpsLogs from '../Truck/TrafficStops/DpsLogs';
import TrafficShop from '../Truck/TrafficStops/TrafficShop';
import TrailerScreen from '../Truck/AddTrailerScreen/TrailerScreen';
import UserList from '../Users/UserList';
import FuelLog from '../Truck/FuelLogList/FuelLog';
import NewFuelLog from '../Truck/FuelLogList/Components/FuelNewLog/NewFuelLog';
import InspectionScreen from '../Truck/Inspection/InspectionScreen';
import DriversScreen from '../Driver/DriversScreen';
import SubContractor from '../SubContractor/SubContractor';
import TimeSheetScreen from '../Driver/TimeSheet/TimeSheetScreen';
import OwnerOperator from '../OwnerOperators/OwnerOperator';
import PaymentIntro from '../LoadzPayment/PaymentIntro';
import Profile from '../MyAccount/Profile';
import DispatchScreen from '../Dispatch/DispatchScreen';
import TemplateScreen from '../Dispatch/Template/TemplateScreen';
import Request from '../Dashboard/Request';
import SubscriptionCompany from '../SubscriptionPanel/SubscriptionCompany';
import Tickets from '../Tickets/Tickets';
import AddTicket from '../Tickets/AddTicket';
import Inspection from '../Inspection/Inspection';

const BaseLayout = () => {

  const [open, setOpen] = useState(false);
  const [setting, setSetting] = useState(false);
  const [textSelectorOpen, setTextSelectorOpen] = useState(false);

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

  const handleDrawerOpen = (event) => {
    setOpen(true);
    event.stopPropagation()
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
      <PersistentDrawerLeft
        setting={setting}
        handleClose={handleClosse}
        handleOpen={handleOpen}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        textSelectorOpen={textSelectorOpen}
        toggleTextSelector={toggleTextSelector} />
      <Routes>
        <Route
          exact
          path='/dashboard'
          element={
            <Body
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />}
        />
        <Route
          exact
          path='/request'
          element={
            <Request
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />}
        />
        <Route
          exact
          path='/jobs'
          element={
            <Job
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />}
        />
        <Route
          exact
          path='/jobs/new'
          element={
            <AddNew
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />}
        />
        <Route
          exact
          path='/customers'
          element={
            <Customer
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />}
        />
        <Route
          exact
          path='/jobs/billing/new'
          element={
            <JobBill
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />}
        />
        <Route
          exact
          path='/uninvoiced'
          element={
            <UninvoicedBody
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />}
        />
        <Route
          exact
          path='/Truck/all'
          element={
            <AddTruckAndTrailer
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />}
        />
        <Route
          exact
          path='/truck/modal'
          element={
            <Addtruckform
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />}
        />
        <Route
          exact

          path='/dps/logs'
          element={
            <DpsLogs
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />
          }
        />
        <Route
          exact
          path='/dps/logs/new'
          element={
            <TrafficShop
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />
          }
        />
        <Route
          exact
          path='/Typehaul/all'
          element={
            <TrailerScreen
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />}
        />
        <Route
          exact
          path='/users'
          element={
            <UserList
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />
          }
        />
        <Route
          exact
          path='/mileages/logs'
          element={
            <FuelLog
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />
          }
        />
        <Route
          exact
          path='/mileages/logs/new'
          element={
            <NewFuelLog
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />
          }
        />
        <Route
          exact
          path='/inspections'
          element={
            <InspectionScreen
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />
          }
        />
        <Route
          exact
          path='/drivers'
          element={
            <DriversScreen
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />
          }
        />
        <Route
          exact
          path='/sub-contractor'
          element={
            <SubContractor
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />
          }
        />
        <Route
          exact
          path='/timesheet'
          element={
            <TimeSheetScreen
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />
          }
        />

        <Route
          exact
          path='/ownerops'
          element={
            <OwnerOperator
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />
          }
        />
        <Route
          exact
          path='/dwolla/intro'
          element={
            <PaymentIntro
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />
          }
        />
        <Route
          exact
          path='/account'
          element={
            <Profile
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />
          }
        />
        <Route
          exact
          path='/dispatch'
          element={
            <DispatchScreen
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />
          }
        />
        <Route
          exact
          path='/dispatch/template'
          element={
            <TemplateScreen
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />
          }
        />
        <Route
          exact
          path='/subscriptions-company'
          element={
            <SubscriptionCompany
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />
          }
        />
        <Route
          exact
          path='/tickets/status'
          element={
            <Tickets
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />
          }
        />
        <Route
          exact
          path='/tickets/status/new'
          element={
            <AddTicket
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />
          }
        />
        <Route
          exact
          path='/Inspection/all'
          element={
            <Inspection
              handleDrawerClose={handleDrawerClose}
              textSelectorOpen={textSelectorOpen}
              toggleTextSelector={toggleTextSelector}
              open={open}
            />
          }
        />
      </Routes>
      <Index />
    </>
  );
};

export default BaseLayout;