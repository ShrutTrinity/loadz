import React from 'react';
import styles from './styles/otppage.module.scss';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import Card from '../../components/card/Card';
import Reversebtn from '../../components/button/Reversebtn';

const Otppage = ({childrenForCloseOtp}) => {
  const email = ' fenikothadiya@gmail.com'


  return (
    <>
      <div className={styles.container}>

        <Card button={<Reversebtn onBack={childrenForCloseOtp}/>} >
        <h6 className={styles.recover}>Please Enter OTP we've send to <br />
          <b style={{ fontWeight: 700 }}>{email} </b>
        </h6>
        <form >
          <div className={styles.multiInput}>
            <TextField
              sx={{
                marginLeft: "0.7rem", borderBottom: '0', zIndex: '2',
                '& .MuiInputLabel-root': {
                  fontSize: 13,
                },
              }}
       
              InputProps={{ disableUnderline: true }}
              type='number'
              label="OTP"
              required
              variant="standard"
            />

            <div className={styles.icon}>
              <EmailIcon sx={{ fontSize: 20 }} />
            </div>
          </div>

          <Button
            type="submit"
            variant="contained"
            sx={{ textTransform: 'none', marginTop: '10px', backgroundColor: "black", borderRadius: 18, width: "14rem", ":hover": { backgroundColor: "black" } }}
          >
            <RouterLink to="/subscription/company/2" className={styles.resetlink}>Verify OTP</RouterLink>
          </Button>
        </form>
        <div>
          <div className={styles.link}>
            <RouterLink className={styles.link} to="/subscription/company/2" >{'Resend OTP'}</RouterLink>
          </div>
        </div>
      </Card>
    </div >
    </>
  );
}

export default Otppage;
