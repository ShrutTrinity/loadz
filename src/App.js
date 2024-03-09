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
import Error from './components/navbar/Error';
import VerticalComponent from './components/navbar/VerticalComponent';

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
          <Route exact path='/404' element={<Error />} />
          <Route exact path='/405' element={<VerticalComponent />} />
        </Routes>
      </Router>
    </>
  )   
}

export default App
