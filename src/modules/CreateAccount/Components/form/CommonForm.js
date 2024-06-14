import React from 'react'
import styles from './styles/commonform.module.scss'
import NorequiredTextField from '@components/textfield/NorequiredTextfield'
import CustomTextField from '@components/textfield/CustomeTextfield'

const CommonForm = ({formik}) => {
  const pagestyle = {
    formik: {
      color: 'red',
      marginTop: '-16px',
      marginBottom: '16px',
      fontSize: '12px'
    }
  }
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
                  <div style={pagestyle.formik}>
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
                  <div style={pagestyle.formik}>
                    {formik.touched.lastName && formik.errors.lastName}
                  </div></div>

                </div>
                <div className={styles.userDetail}>
                <div className={styles.div2}>
             <CustomTextField
                name='email'
                    formik={formik}
                    label="Email"
                    placeholder="Email"
                    type="text"
                />
                 <div style={pagestyle.formik}>
                    {formik.touched.email && formik.errors.email}
                  </div></div>
                <div className={styles.div2}>
                 <CustomTextField
                 name='position'
                     formik={formik}
                    label="Position"
                    placeholder="Position"
                    type="text"
                />
                <div style={pagestyle.formik}>
                    {formik.touched.position && formik.errors.position}
                  </div>
                </div>
                
                </div>

            </div>
        </>
    )
}

export default CommonForm
