import React,{useState} from 'react'
import CustomStepper from '../../components/stepper/CustomStepper'
import BoxComponent from '../../components/formBox/Box'
import styles from './styles/setup.module.scss'
import Video from '../../components/videotag'
import useVideoPopup from '../../hooks/useVideopopup'
import CustomTextField from '../../components/textfield/CustomeTextfield'
import companyLogoImage from '../../images/upload_logo.svg';
import Send from '../../components/uploadFile/Send';
import FilePopUp from '../../components/uploadPopUp';

const SetupOfCompany = () => {

  const { isPopupOpen, handleToggle } = useVideoPopup();
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClickOpen = (event) => {
    event.stopPropagation();
    setShowPopUp(true)
  };
  const handleClosePop = () => {
    setShowPopUp(false);
  }
  
  const handleImageSelect = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowPopUp(false)
  };

  const handleClick = () => {
    handleToggle();
  };

  return (
    <>
      {
        isPopupOpen && <Video
          className={styles.popup}
          setIsOpen={handleToggle}
          srcLink='https://player.vimeo.com/video/785867516'
          title='SETUP PREFERENCES'
          discription='Company Setting for Sales Tax, Commission Rates, Waiting Time Rates, and Automatic Invoice time'
        />
      }
      {showPopUp && <FilePopUp
        imageUrlforPopUp={selectedImage || companyLogoImage}
        onSelect={handleImageSelect}
        onClose={handleClosePop}
      />}
      <CustomStepper currentstep='2' />
      <BoxComponent className={styles.mainContainer}
        handleClick={handleClick}
        children1={
          <h2 className={styles.heading}>COMPANY SETUP</h2>
        }
        children3={
          <form>
            <div className={styles.mainDiv}>
              <div className={styles.firstHalf}>
                <CustomTextField
                  label="Company Name"
                  placeholder="Company Name"
                  type="text"
                />
                <CustomTextField
                  label="Business Name (DBA)"
                  placeholder="Business Name (DBA)"
                  type="text"
                />
                <div className={styles.combiner}>
                  <div className={styles.Address}>
                    <CustomTextField
                      label="Address"
                      placeholder="Address"
                      type="text"
                    />
                  </div>
                  <div className={styles.Address}>
                    <CustomTextField
                      label="City"
                      placeholder="City"
                      type="text"
                    />
                  </div>
                  <div className={styles.selector}>
                    <label className={styles.formLabel1}>State<span className={styles.requiredAll}>*</span></label>
                    <select className="form-select"
                      style={
                        { height: '60%', borderColor: '#c4c4c4' }
                      }
                      arialabel="Default select example" >
                      <option> Select a State </option>
                    </select>
                  </div>
                  <div className={styles.zipCode}>
                    <CustomTextField
                      label="Zip"
                      placeholder="Zip"
                      type="text"
                    />
                  </div>
                </div>
                <div className={styles.combiner}>
                  <CustomTextField
                    label="Telephone"
                    placeholder="phone"
                    type="tel"
                  />
                  <CustomTextField
                    label="Company Email"
                    placeholder="Email of company"
                    type="tel"
                  />
                </div>
              </div>
              <Send className={styles.uploadimg} children={selectedImage ? <img src={selectedImage} alt='Selecte persion' onClick={handleClickOpen} /> : <img src={companyLogoImage} alt='Default Company logo' onClick={handleClickOpen} />} />
            </div>
          </form>
        }
      />
    </>
  )
}

export default SetupOfCompany