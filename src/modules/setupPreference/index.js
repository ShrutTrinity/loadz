import React , { useState }  from 'react';
import styles from './styles/setupPreference.module.scss'



const SetupPreference = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleToggle = () => {
    setIsSwitchOn(!isSwitchOn);
  };
  return (
    <>
      <form className={styles.form}>
        <div className={styles.companySetup}>
          <label className={styles.label}>
            Do you sell material?
            
          </label>
          <div className={`custom-toggle-switch ${isSwitchOn ? 'on' : 'off'}`} onClick={handleToggle}>
      <div className="circle"></div>
      <span className="label">{isSwitchOn ? 'Yes' : 'No'}</span>
    </div>
        </div>
      </form>
    </>
  );
};

export default SetupPreference;
