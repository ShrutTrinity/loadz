import React, {  useState } from 'react'
import CustomStepper from '../../components/stepper/CustomStepper'
import styles from './styles/setupPreference.module.scss'
import BoxComponent from '../../components/formBox/Box'
import Video from '../../components/videotag'
import useVideoPopup from '../../hooks/useVideoPopupSecond'
import SwitchMUI from '../../components/switch/SwitchMUI'
import Tags from '../../components/priceTags/index'
import SolidButton from '../../components/button/SolidButton'
import SetupOfCompany from '../companySetup/SetupOfCompany'
import AddDriver from '../CreateAccount/createDriver/AddDriver'
import { useFormik } from 'formik';
import { priceTagsSchema } from '../../components/validation/validationshema'
import { priceTagsSchemaSales } from '../../components/validation/validationshema'

const Preference = () => {

  const { isPopupOpen, handleToggle } = useVideoPopup();
  const [isBack, setIsBack] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [value, setValue] = useState(true)
  

  const veryfySwitchValue = value ? priceTagsSchema : priceTagsSchemaSales 

  const formik = useFormik({
    initialValues: {
      commission: '',
      wage: '',
      waitRate: '',
      salesTax: ''
    },
    validationSchema: veryfySwitchValue, 
    onSubmit: (values) => {
        setIsNext(!isNext)
      
      }
  });

  const handleClick = () => {
    handleToggle();
  };

  const handleSwitchVlue = () => {
    setValue(!value)
  }

  const BackTO_prev_Page = () => {
    setIsBack(!isBack);
    
  };

  return (
    <>
      {
        isPopupOpen && <Video
          className={styles.popup}
          setIsOpen={handleToggle}
          srcLink='https://player.vimeo.com/video/785867727'
          title='COMPANY PREFERENCES'
          discription='Company Setting for Sales Tax, Commission Rates, Waiting Time Rates, and Automatic Invoice time'
        />
      }
      {isBack === true ? <SetupOfCompany /> : isNext === true ? <AddDriver /> :
        <div>
          <CustomStepper currentstep='3' />
          <div className={styles.page}>
            <BoxComponent className={styles.mainContainer}
              handleClick={handleClick}
              children1={
                <h2 className={styles.heading}>SETUP PREFERENCES</h2>
              }
              children3={
                <form onSubmit={formik.handleSubmit}>
                  <div className={styles.companyPreference}>
                    <label className={styles.switchCover}>
                      Do you sell material?
                      <label className={styles.switchLabel}>
                        <SwitchMUI handleSwitchValue={handleSwitchVlue} valueOfSwitch={!value} />
                      </label>
                    </label>
                    {value ?
                      <div>
                        <Tags formik={formik} name='commission' symbol='%' tagTitle='Default Commission Rate' />
                        <Tags formik={formik} name='wage' symbol='$' tagTitle='Default Hourly Wage' />
                        <Tags formik={formik} name='waitRate' symbol='$' tagTitle='Company Wait Rate' />
                      </div>
                      :
                      <div>
                        <Tags formik={formik} name='salesTax' symbol='%' tagTitle='Sales Tax Rate Amount' />
                        <Tags formik={formik} name='commission' symbol='%' tagTitle='Default Commission Rate' />
                        <Tags formik={formik} name='wage' symbol='$' tagTitle='Default Hourly Wage' />
                        <Tags formik={formik} name='waitRate' symbol='$' tagTitle='Company Wait Rate' />
                      </div>
                    }
                    <div className={styles.smallContainer}>
                      <span className={styles.labTitle}>What time should your automatic invoices go out?
                      </span>
                      <div className={styles.labField}>
                        <input type="time" step="number" value="23:59" name="commissionRate" placeholder="0.00" />
                      </div>
                    </div>
                    <div className={styles.buttonContainer}>
                      <SolidButton buttonValue={'Back'} onClick={BackTO_prev_Page} />
                      <SolidButton buttonValue={'NEXT'} onClick={formik.handleSubmit} />
                    </div>
                  </div>
                </form>
              }
            />
          </div>
        </div>
      }
    </>
  )
}

export default Preference
