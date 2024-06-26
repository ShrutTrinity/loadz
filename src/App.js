import React from 'react';
import LoginPage from '@modules/Authentication/Login/LoginPage';
import { Route,BrowserRouter as Router, Routes, } from 'react-router-dom';
import Portal from '@modules/CustomerPortal/Portal';
import ForgetPass from '@modules/Authentication/forgetpassword/ForgetPass';
import Subscription from '@modules/subcription/Subscription';
import Termsconditions from '@components/Conditions/Termsconditions';
import Privacy from '@components/Conditions/Privacy';
import Create from '@modules/CustomerPortal/Create';
import Welcome from '@modules/company/Welcome';
import CreateAccount from '@modules/CreateAccount/newAccount/CreateAccount';
import SetupOfCompany from '@modules/CreateAccount/companySetup/SetupOfCompany';
import Error from '@modules/ErrorPage/Error';
import BaseLayout from '@modules/DashboardPanel';
import CreateCustomer from './modules/Dwolla/CreateCustomer'; 

const App = () => {
 
  return (
   <>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/customerportal/login' element={<Portal />} />
          <Route exact path='/forgetPassword' element={<ForgetPass />} />
          <Route exact path='/subscription' element={<Subscription/>} />
          <Route exact path='/terms' element={<Termsconditions/>} />
          <Route exact path='/privacy' element={<Privacy/>} />
          <Route exact path='/customeportal-signup' element={<Create/>} />
          <Route exact path='/subscription/company/0' element={<Welcome />} />
          <Route exact path='/subscription/company/1' element={<CreateAccount />} />
          <Route exact path='/subscription/company/2' element={<SetupOfCompany />} />
          <Route exact path='/dwolla' element={<CreateCustomer />} />
          <Route exact path='/404' element={<Error />} />
          <Route exact path='/*' element={<BaseLayout />} />
        </Routes>
      </Router>
    </>
  )   
}

export default App
