import React, { useState } from 'react'
import CustomStepper from '../../components/stepper/CustomStepper'
import BoxComponent from '../../components/formBox/Box'
import styles from './styles/addDriver.module.scss'
import Video from '../../components/videotag'
import SwitchMUI from '../../components/switch/SwitchMUI'
import useVideoPopupSecond from '../../hooks/useVideoPopupSecond'
import CommonDriverForm from '../../components/form/commonDriverForm'
import { useFormik } from 'formik';
import { getValidationSchemaforforth } from '../../components/validation/validationshema'
import SolidButton from '../../components/button/SolidButton'
import Preference from '../setupPreference/Preference'
import Disabledriverform from '../../components/form/Disabledriverform'
import IncludeTruck from '../addTruck/IncludeTruck'



const AddDriver = () => {

  const [driverCount, setdriverCount] = useState(1);
  const [isBack, setIsBack] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [value, setValue] = useState(true)



  const { isPopupOpen, handleToggle } = useVideoPopupSecond();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      Hourlywage: '',
      CommissionRate: ''
    },
    validationSchema: getValidationSchemaforforth,
    onSubmit: (values) => {
      console.log(values)
      to_Next_Page()

    },
  });

  const handleClick = () => {
    handleToggle();
  };
  const handleAddContact = () => {
    setdriverCount((prevCount) => prevCount + 1);
  };
  const BackTO_prev_Page = () => {
    setIsBack(!isBack);
  };

  const to_Next_Page = () => {
    setIsNext(!isNext)
  }
  const handleSwitchVlue = () => {
    setValue(!value)
  }

  return (
    <>
      {
        isPopupOpen && <Video
          className={styles.popup}
          setIsOpen={handleToggle}
          srcLink='https://player.vimeo.com/video/785867673'
          title='ADD DRIVERS'
          discription='Add drivers to your profile. You may change pay rate and commission rates if necessary.'
        />
      }
      {isBack === true ? <Preference /> : isNext === true ? <IncludeTruck /> :
      <div>
        <CustomStepper currentstep="4" />
        <div className={styles.page}>
          <BoxComponent className={styles.mainContainer}
            handleClick={handleClick}
            children1={
              <h2 className={styles.heading}>ADD DRIVERS</h2>
            }
            children3={
              <div className={styles.conatainer}>
                <label className={styles.switchCover}>
                  Do you have drivers?
                  <label className={styles.switchLabel}>
                    <SwitchMUI handleSwitchValue={handleSwitchVlue} valueOfSwitch={value} />
                  </label>
                </label>
                { value ? [...Array(driverCount)].map((index) => (
                  <CommonDriverForm key={index} formik={formik} />
                )) : [...Array(driverCount)].map((index)=>(
                  <Disabledriverform key={index}/>
                ))
                }
                <div className={styles.flexitems}>
                  <div className={styles.add}>
                    <span className={styles.plusicon} onClick={handleAddContact}>+</span>
                    Add another content</div>

                  <div style={{ display: 'flex' }}>
                    <div style={{ marginRight: '10px' }}>
                      <SolidButton buttonValue='Back' onClick={BackTO_prev_Page} />
                    </div>

                    <SolidButton buttonValue='Next' type='submit' onClick={value ? formik.handleSubmit : to_Next_Page}  />


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

export default AddDriver
