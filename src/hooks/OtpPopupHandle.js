import {useState, useEffect} from 'react';

const OtpPopupHandle = () => {

  const [optPopup, setOtpPopUp] = useState(false)
    
  const handleOtpPopup = () => {
    setOtpPopUp(!optPopup)
  }

  const closeOtpPopup = () => {
    setOtpPopUp(false)
  }

  useEffect(() => {
    document.body.style.overflow = optPopup ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [optPopup]);

  return { optPopup, handleOtpPopup, closeOtpPopup};
}

export default OtpPopupHandle
