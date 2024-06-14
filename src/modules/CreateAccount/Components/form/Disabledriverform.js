import React from 'react'
import styles from './styles/commonDriverForm.module.scss'
import DisableTextField from '@components/textfield/DisableTextfield'

const Disabledriverform = () => {
  return (
    <>
      <div className={styles.formOuter}>
        <div className={styles.userDetail}>
          <div className={styles.div}>
            <DisableTextField
              name='firstName'
              className={styles.firstname}
              label="First Name"
              placeholder="First Name"
              type="text"
            />
          </div>
          <div className={styles.div}>
            <DisableTextField
              label="Middle Name"
              placeholder="Middle Name"
              type="text"
            /></div>
          <div className={styles.div}>
            <DisableTextField
              name='lastName'
              label="Last Name"
              placeholder="Last Name"
              type="text"
            />
          </div>

          <div className={styles.div}>
            <DisableTextField
              name='phone'
              label="Phone"
              placeholder="Phone"
              type="number"
            />
          </div>
          <div className={styles.div2}>
            <DisableTextField
              name='Hourlywage'
              label="Hourly Wage($)"
              placeholder="Hourly Wage($)"
              type="text"
            />
          </div>
          <div className={styles.div2}>
            <DisableTextField
              name='CommissionRate'
              label="Commission Rate(%)"
              placeholder="Commission Rate(%)"
              type="text"
            />
          </div>

        </div>

      </div>
    </>
  )
}

export default Disabledriverform
