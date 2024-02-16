import React from 'react';
import styles from './styles/forgetpassword.module.scss';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import Card from '../../components/card/Card';


const ForgetPass = () => {
  

  return (
    <>
      <div className={styles.container}>
        
          <Card>
            <h6 className={styles.recover}>Recover Your Password</h6>
            <form >
              <div className={styles.multiInput}>
                <TextField
                  sx={{ marginLeft: "0.7rem", borderBottom: '0', zIndex: '2' ,'& .MuiInputLabel-root': {
                                        fontSize: 13,
                                    },}}
                  type='email'
                  InputProps={{ disableUnderline: true }}
                  id="email"
                  name="email"
                  label="Email"
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
                sx={{ textTransform: 'none', backgroundColor: "black", borderRadius: 18, width: "14rem", ":hover": { backgroundColor: "black" } }}
              >
                <RouterLink to="#" className={styles.resetlink}>Send reset link</RouterLink>
              </Button>
            </form>
            <div>
              <div className={styles.link}>
                <RouterLink to="/" >{'Go Back To Login'}</RouterLink>
              </div>
            </div>
          </Card>
          </div>
    </>
  );
}

export default ForgetPass;
