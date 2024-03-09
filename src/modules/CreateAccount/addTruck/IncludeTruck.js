import React, { useState } from 'react'
import CustomStepper from '../Components/stepper/CustomStepper'
import styles from './styles/truck.module.scss'
import BoxComponent from '../Components/formBox/Box'
import useVideoPopup from '../../../hooks/useVideopopup'
import Video from '../Components/videotag'
import CommonTruckForm from '../Components/form/CommonTruckForm'
import CommonTrailers from '../Components/form/CommonTrailers'
import SolidButton from '../../../components/button/SolidButton'
import { useFormik } from 'formik'
import { addTruckSchema } from '../../../validation/validationshema'
import AddDriver from '../createDriver/AddDriver'
import Disabletruck from '../Components/form/truckDissable'
import Disabletrailer from '../Components/form/trailerDissable'
import Webuser from '../web-user/Webusers'
import SwitchMUI from '../Components/switch/SwitchMUI'

const IncludeTruck = () => {

  const { isPopupOpen, handleToggle } = useVideoPopup();
  const [TruckCount, setTruckCount] = useState(1);
  const [TrailerCount, setTrailerCount] = useState(1);
  const [nextPage, setNextPage] = useState(false);
  const [prevPage, setPrevPage] = useState(false);
  const [skip, setSkip] = useState(false);
  const [value, setValue] = useState(true)
  const [value2, setValue2] = useState(true)

  const formik = useFormik({
    initialValues: {
      truckNo: '',
      VIN: '',
      color: '',
      year: '',
      mnufacturer: '',
      model: '',
      expiryDate: '',
      trailerNo: '',
    },
    validationSchema: addTruckSchema,
    onSubmit: (values) => {
      setNextPage(!nextPage)
    },
  });

  const handleClick = () => {
    handleToggle();
  };

  const addTruck = () => {
    setTruckCount((prevCount) => prevCount + 1)
  }

  const addTrailers = () => {
    setTrailerCount((prevCount) => prevCount + 1)
  }
  const to_Next_Page = () =>{
    setNextPage(!nextPage)
  
  }
  const back_To_Page = () => {
    setPrevPage(!prevPage)
  }

  const skipThis_Page = () => {
    setSkip(!skip)
  }
  const handleSwitchVlue = () => {
    setValue(!value)
  }
  const handleSwitchVlue2 = () => {
    setValue2(!value2)
  }
  return (
    <>
      {
        isPopupOpen && <Video
          className={styles.popup}
          setIsOpen={handleToggle}
          srcLink='https://player.vimeo.com/video/785867571'
          title='ADD TRUCKS & TRAILERS'
          discription='Add Trucks and Trailers to your profile. The more complete the information is in this step the better the reports will serve you.'
        />
      }
      {nextPage ? <Webuser />: prevPage ? <AddDriver /> : skip ? <Webuser /> :
        <div>
          <CustomStepper currentstep='5' />
          <div className={styles.page}>
            <BoxComponent className={styles.mainContainer}
              handleClick={handleClick}
              children1={
                <h2 className={styles.heading}>ADD TRUCKS</h2>
              }
              children3={
                <div className={styles.container}>
                  <label className={styles.switchCover}>
                    Do you have Trucks ?
                    <label className={styles.switchLabel}>
                      <SwitchMUI valueOfSwitch={value} handleSwitchValue={handleSwitchVlue} />
                    </label>
                  </label>
                  {value ? [...Array(TruckCount)].map((index) => (
                    <CommonTruckForm formik={formik} key={index} />
                  )) : [...Array(TruckCount)].map((index) => (
                    <Disabletruck key={index} />
                  ))}
                  <div className={styles.TruckAddbutton} style={{ margin: '44px 0' }}>
                    <div className={styles.add} onClick={addTruck}>
                      <span className={styles.plusicon}>+</span>
                      Add another content
                    </div>
                  </div>

                  <label className={styles.switchCover}>
                    Do you have Trailers ?
                    <label className={styles.switchLabel}>
                      <SwitchMUI valueOfSwitch={value2}  handleSwitchValue={handleSwitchVlue2} />
                    </label>
                  </label>
                  {value2 ? [...Array(TrailerCount)].map((index) => (
                    <CommonTrailers formik={formik} key={index} />
                  )) : [...Array(TrailerCount)].map((index) => (
                    <Disabletrailer  key={index} />
                  ))}
                  <div className={styles.bottomContainer}>
                    <div className={styles.TruckAddbutton}>
                      <div className={styles.add} onClick={addTrailers}>
                        <span className={styles.plusicon}>+</span>
                        Add another content
                      </div>
                    </div>
                    <div className={styles.buttons}>
                      <SolidButton buttonValue={'Skip'} onClick={skipThis_Page} />
                      <SolidButton buttonValue={'Back'} onClick={back_To_Page} />
                      <SolidButton buttonValue={'next'} onClick={value ? formik.handleSubmit : to_Next_Page} />
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

export default IncludeTruck
