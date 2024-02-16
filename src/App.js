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
import Otppage from './modules/OTP/Otppage';
import Index from './components/videotag';
import RecoverPassword from './modules/recoverpassword';
import SetupPreference from './modules/setupPreference';

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
          <Route exact path='/subscription/company/1' element={<Otppage />} />
          <Route exact path='/forgetPassword/id' element={<RecoverPassword />} />
          <Route exact path='/a' element={<Index />} />
          <Route exact path='/b' element={<SetupPreference />} />
        </Routes>
      </Router>
    </>
  )
    
}

export default App
