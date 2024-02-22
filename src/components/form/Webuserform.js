import React from 'react'
import styles from './styles/webuserform.module.scss'
import CustomTextField from '../textfield/CustomeTextfield'

const comtypes = ['email']
const usertypes= ['Power Dispatcher','Dispatcher']

const Webuserform = ({formik}) => {
    return (
        <>     <div className={styles.formOuter}>
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
        <div className={styles.div} style={{marginTop:'-5px'}}>  
                  
            <label className={styles.label}> Communication<span className={styles.requiredAll}>*</span></label>
            <select
              className="form-select"
              style={{ borderColor: '#c4c4c4', padding: '10px 14px 13px 10px', fontSize: '13px', borderRadius: '5px' }}
              aria-label="Default select example"
              name="communication"
  
            >
              <option value="" style={{ fontSize: '13px', fontFamily: 'sans-serif' }}>Phone</option>
              {comtypes.map((type, index) => (
                <option style={{fontSize: '13px'}} key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
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
          <div className={styles.div2} style={{marginTop:'-5px'}}>  
                  
                  <label className={styles.label}> User Type</label>
                  <select
                    className="form-select"
                    style={{ borderColor: '#c4c4c4', padding: '10px 14px 13px 10px', fontSize: '13px', borderRadius: '5px' }}
                    aria-label="Default select example"
                    name="usertype"
                    {...formik.getFieldProps('usertype')}
                  >
                  <option value='' disabled selected style={{color:'gray'}}> Select user type</option>
                    {usertypes.map((type, index) => (
                      <option style={{fontSize: '13px'}} key={index}  value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
      
      
                <div style={{ color: 'red', marginBottom: '16px', fontSize: '12px' }}>
                  {formik.touched.usertype && formik.errors.usertype}
                </div>
                </div>
      
        
        
        </div>

    </div>
</>
    )
}

export default Webuserform
