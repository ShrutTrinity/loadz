import React from 'react';
import styles from './style/createCustomer.module.scss';
import Stepr from './Components/Stepr';

const CreateCustomer = () => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.stepperCover}>
          <Stepr />
          <section className={styles.formSection}>
            
          </section>
        </div>
      </div>
    </>
  )
}

export default CreateCustomer;