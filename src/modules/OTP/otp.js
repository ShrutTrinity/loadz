import React from 'react'
import styles from '../forgetpassword/styles/forgetpassword.module.scss'

const otp = () => {
  return (
    <div>
       <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardContainer}>
            <div className={styles.logo}>
              <img className={styles.logoImage} src={Logo} alt='logo' />
            </div>

            <h6 className={styles.recover}>Recover Your Password</h6>
            <div className={styles.multiInput}>
              <TextField required sx={{marginLeft:"0.7rem",borderBottom:'0'}} InputProps={{disableUnderline:true}} id="standard-basic" label="Email &nbsp;" variant="standard" />
              <div className={styles.icon}>
                <EmailIcon sx={{ fontSize: 20 }} />

              </div>

            </div>
        
            <Button variant="contained"   sx={{  textTransform: 'none',backgroundColor:"black",borderRadius:18,width:"14rem",":hover":{backgroundColor:"black"}}}>
            <RouterLink to="#" className={styles.resetlink}>Send reset link</RouterLink>
            
            </Button>
            <div>
              <div className={styles.link}>
              
              <RouterLink to="/" >{'Go Back To Login'}</RouterLink>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default otp
