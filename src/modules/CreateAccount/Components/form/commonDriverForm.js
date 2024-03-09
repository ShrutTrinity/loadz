import React from 'react'
import styles from './styles/commonDriverForm.module.scss'
import CustomTextField from '../textfield/CustomeTextfield'
import NorequiredTextField from '../textfield/NorequiredTextfield'
const CommonDriverForm = ({formik}) => {
  return (
    <>
    <div className={styles.formOuter}>
                <div className={styles.userDetail}>
                <div className={styles.div}>
                <CustomTextField
                    formik={formik}
                    name='firstName'
                    className={styles.firstname}
                    label="First Name"
                    placeholder="First Name"
                    type="text"
                />
                  <div style={{ color: 'red',marginTop: '-16px', marginBottom: '16px', fontSize: '12px' }}>
                    {formik.touched.firstName && formik.errors.firstName}
                  </div>
                  </div>
                  <div className={styles.div}>                
                   <NorequiredTextField
                 
                    label="Middle Name"
                    placeholder="Middle Name"
                    type="text"
                /></div>
                <div className={styles.div}>            
                     <CustomTextField
                    name='lastName'
                     formik={formik}
                    label="Last Name"
                    placeholder="Last Name"
                    type="text"
                />
                  <div style={{ color: 'red',marginTop: '-16px', marginBottom: '16px', fontSize: '12px' }}>
                    {formik.touched.lastName && formik.errors.lastName}
                  </div>
                  </div>

                <div className={styles.div}>
             <CustomTextField
                name='phone'
                    formik={formik}
                    label="Phone"
                    placeholder="Phone"
                    type="number"
                />
                 <div style={{ color: 'red',marginTop: '-16px', marginBottom: '16px', fontSize: '12px' }}>
                    {formik.touched.phone && formik.errors.phone}
                  </div>
                  </div>
                <div className={styles.div2}>
                 <CustomTextField
                 name='Hourlywage'
                     formik={formik}
                    label="Hourly Wage($)"
                    placeholder="Hourly Wage($)"
                    type="text"
                />
                <div style={{ color: 'red',marginTop: '-16px', marginBottom: '16px', fontSize: '12px' }}>
                    {formik.touched.Hourlywage && formik.errors.Hourlywage}
                  </div>
                </div>
                <div className={styles.div2}>
                 <CustomTextField
                 name='CommissionRate'
                     formik={formik}
                    label="Commission Rate(%)"
                    placeholder="Commission Rate(%)"
                    type="text"
                />
                <div style={{ color: 'red',marginTop: '-16px', marginBottom: '16px', fontSize: '12px' }}>
                    {formik.touched.CommissionRate && formik.errors.CommissionRate}
                  </div>
                </div>
                
                </div>

            </div>
        </>
    )
}

export default CommonDriverForm
