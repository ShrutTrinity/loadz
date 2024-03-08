import React from 'react';
import LoginPage from './modules/signIn/LoginPage'
import { Route,BrowserRouter as Router, Routes, } from 'react-router-dom'
import Portal from './modules/customerportal/Portal'
import ForgetPass from './modules/forgetpassword/ForgetPass'
import Subscription from './modules/subcription/Subscription'
import Termsconditions from './modules/signIn/Termsconditions'
import Privacy from './modules/signIn/Privacy'
import Create from './modules/customerportal/Create';
import Welcome from './modules/company/Welcome';
import CreateAccount from './modules/newAccount/CreateAccount';
import SetupOfCompany from './modules/companySetup/SetupOfCompany';
import NavigationBar from './components/navbar/NavigationBar';
import Body from './components/navbar/body';
import ProfileDetail from './components/navbar/ProfileDetail';
import Setting from './components/navbar/Setting';
import Button from './components/navbar/Button';

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
          <Route exact path='/nav' element={<NavigationBar />} />
          <Route exact path='/body' element={<Body />} />
          <Route exact path='/Setting' element={<Setting />} />
          <Route exact path='/btn' element={<Button />} />
          <Route exact path='/body1' element={<ProfileDetail />} />
        </Routes>
      </Router>
    </>
  )   
}

export default App
