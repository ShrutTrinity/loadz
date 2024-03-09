import React, { useState } from 'react'
import CustomStepper from '../Components/stepper/CustomStepper'
import BoxComponent from '../Components/formBox/Box'
import styles from './styles/webuser.module.scss'
import Video from '../Components/videotag'
import useVideoPopupSecond from '../../../hooks/useVideoPopupSecond'
import { useFormik } from 'formik';
import {  getValidationSchemaforsix } from '../../../validation/validationshema'
import SolidButton from '../../../components/button/SolidButton'
import LoginPage from '../../Authentication/Login/LoginPage'
import { Link } from 'react-router-dom'
import Webuserform from '../Components/form/Webuserform'
import IncludeTruck from '../addTruck/IncludeTruck'

const Webuser = () => {
  const [webcount, setWebcount] = useState(1);
  const [isBack, setIsBack] = useState(false);
  const [isNext, setIsNext] = useState(false);

  const { isPopupOpen, handleToggle } = useVideoPopupSecond();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      usertype: '',
  
    },
    validationSchema: getValidationSchemaforsix,
    onSubmit: (values) => {
      console.log(values)
      to_Next_Page()

    },
  });

  const handleClick = () => {
    handleToggle();
  };
  const handleAddContact = () => {
    setWebcount((prevCount) => prevCount + 1);
  };
  const BackTO_prev_Page = () => {
    setIsBack(!isBack);
  };

  const to_Next_Page = () => {
    setIsNext(!isNext)
    console.log("check")
  }
 

  return (
    <>
      {
        isPopupOpen && <Video
          className={styles.popup}
          setIsOpen={handleToggle}
          srcLink='https://player.vimeo.com/video/785867732'
          title='ADD WEB USERS'
          discription='Add additional portal users. New users must be assigned a user permission role; Administrator, Power Dispatcher, or Dispatcher Role.'
        />
      }
      {isBack === true ? <IncludeTruck /> : isNext === true ? <LoginPage /> :
      <div>
        <CustomStepper currentstep="6" />
        <div className={styles.page}>
          <BoxComponent className={styles.mainContainer}
            handleClick={handleClick}
            children1={
              <h2 className={styles.heading}>ADD WEB USERS</h2>
            }
            children3={
              <div className={styles.conatainer}>
              
             {  [...Array(webcount)].map((index) => (
                  <Webuserform key={index} formik={formik} />
                )) }
                
                <div className={styles.flexitems}>
                  <div className={styles.add}>
                    <span className={styles.plusicon} onClick={handleAddContact}>+</span>
                    Add another user</div>

                  <div style={{ display: 'flex' }}>
                  <div style={{ marginRight: '10px' }}>
                     <Link to='/'> <SolidButton buttonValue='Skip'/></Link>
                    </div>
                    <div style={{ marginRight: '10px' }}>
                      <SolidButton buttonValue='Back' onClick={BackTO_prev_Page} />
                    </div>
                   

                    <SolidButton buttonValue='Next' type='submit' onClick={ formik.handleSubmit}  />


                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
      }
    </>
  )
}

export default Webuser
