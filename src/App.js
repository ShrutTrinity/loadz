import React from 'react'
import LoginPage from './modules/signIn/LoginPage'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Portal from './modules/customerportal/Portal'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/customerportal/login' element={<Portal />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
