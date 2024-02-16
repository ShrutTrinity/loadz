import { useState, useEffect } from 'react';

const useVideoPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isPopupOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPopupOpen]);

  return { isPopupOpen, handleToggle };
};

export default useVideoPopup;
