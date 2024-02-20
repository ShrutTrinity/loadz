import React from 'react'
import CustomStepper from '../../components/stepper/CustomStepper'
import BoxComponent from '../../components/formBox/Box'
import styles from './styles/addDriver.module.scss'
import Video from '../../components/videotag'
import SwitchMUI from '../../components/switch/SwitchMUI'
import useVideoPopup from '../../hooks/useVideopopup'

const AddDriver = () => {
  const { isPopupOpen, handleToggle } = useVideoPopup();

  const handleClick = () => {
    handleToggle();
  };

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
      <CustomStepper currentstep="4" />
      <BoxComponent className={styles.mainContainer}
        handleClick={handleClick}
        children1={
          <h2 className={styles.heading}>ADD DRIVERS</h2>
        }
        children3={
          <div className={styles.conatainer}>
            <label className={styles.switchCover}>
              Do you sell material?
              <label className={styles.switchLabel}>
                <SwitchMUI />
              </label>
            </label>
          </div>
        }
      />
    </>
  )
}

export default AddDriver
