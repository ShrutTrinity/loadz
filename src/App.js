import React from 'react';
import LoginPage from '@modules/Authentication/Login/LoginPage'
import { Route,BrowserRouter as Router, Routes, } from 'react-router-dom'
import Portal from '@modules/CustomerPortal/Portal'
import ForgetPass from '@modules/Authentication/forgetpassword/ForgetPass'
import Subscription from '@modules/subcription/Subscription'
import Termsconditions from '@components/Conditions/Termsconditions'
import Privacy from '@components/Conditions/Privacy';
import Create from '@modules/CustomerPortal/Create';
import Welcome from '@modules/Company/Welcome';
import CreateAccount from '@modules/CreateAccount/newAccount/CreateAccount';
import SetupOfCompany from '@modules/CreateAccount/companySetup/SetupOfCompany';
import Error from '@modules/ErrorPage/Error';
import Customer from '@modules/Jobs/components/CreateCustomer/Customer';
import FunctionList from './modules/Jobs/components/RowEdit/FunctionList';
import Panel from '@modules/DashboardPanel';
import DataTable from './modules/Jobs/components/BillingBody/DataTable';

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
          <Route exact path='/404' element={<Error />} />
          <Route exact path='/*' element={<Panel />} />
          <Route exact path='/cus'   element={<Customer />} />
          <Route exact path='/5' element={<FunctionList />} />
          <Route exact path='/6' element={<DataTable />} />          
        </Routes>
      </Router>
    </>
  )   
}

export default App
