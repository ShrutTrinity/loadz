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
          <Route exact path='/subscription/company' element={<Welcome />} />
        </Routes>
      </Router>
    </>
  )
    
}

export default App
