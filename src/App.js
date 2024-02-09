import React from 'react'
import LoginPage from './modules/signIn/LoginPage'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Portal from './modules/customerportal/Portal'
import ForgetPass from './modules/forgetpassword/ForgetPass'
import Subscription from './modules/subcription/Subscription'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/customerportal/login' element={<Portal />} />
          <Route exact path='/forgetPass' element={<ForgetPass />} />
          <Route exact path='/subscription' element={<Subscription/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
