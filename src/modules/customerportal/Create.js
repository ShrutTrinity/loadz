import React, { useState } from 'react';
import Logo from '@images/loadzlogo.png';
import styles from './styles/createNew.module.scss';
import SecurityUpdateGoodIcon from '@mui/icons-material/SecurityUpdateGood';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { Link as RouterLink } from 'react-router-dom';

const Create = () => {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className={styles.root}>
        <div className={styles.logoCover}>
          <img className={styles.logo} src={Logo} alt='logo' />
        </div>
        <div className={styles.container}>
          <div>
            <h1 className={styles.heading}>Activate Account</h1>
            <form className={styles.Createform}>
              <div className={styles.inputControl1}>
                <input
                  type="email"
                  className="form-control rounded-0"
                  id="exampleFormControlInput1"
                  placeholder="Enter your Email"></input>
              </div>
              <div className={styles.inputControl2}>
                <div className={styles.mobileIcon}>
                  <SecurityUpdateGoodIcon />
                </div>
                <div className={styles.input2}>
                  <input
                    type={showPassword ? 'tel' : 'password'}
                    className="form-control rounded-0"
                    id="exampleFormControlInput1"
                    placeholder="Enter your Phone">
                  </input>
                </div>
                <div className={styles.passIcon}
                  onClick={togglePasswordVisibility}>
                  {
                    showPassword ? <VisibilityIcon />
                      : <VisibilityOffIcon />
                  }
                </div>
              </div>
              <div className={styles.inputControl2}>
                <div className={styles.input2}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control rounded-0"
                    id="exampleFormControlInput1"
                    placeholder="Password"></input>
                </div>
                <div
                  className={styles.passIcon}
                  onClick={togglePasswordVisibility}>
                  {showPassword ?
                    <VisibilityIcon /> :
                    <VisibilityOffIcon />}
                </div>
              </div>

              <div className={styles.rules}>
                <p>Password Requirement*</p>
                <ol>
                  <li>"At Least 1 Lowercase"</li>
                  <li>"At Least 1 Uppercase"</li>
                  <li>"At Least 1 Number"</li>
                  <li>"At Least 1 Special Character (@!#$%&+=)"</li>
                  <li>"10 Characters Minimum"</li>
                </ol>
              </div>

              <div className={styles.inputControl3}>
                <div className={styles.input2}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control rounded-0"
                    id="exampleFormControlInput1"
                    placeholder="Confirm Password">
                  </input>
                </div>
                <div
                  className={styles.passIcon}
                  onClick={togglePasswordVisibility}>
                  {showPassword ? <VisibilityIcon />
                    : <VisibilityOffIcon />}
                </div>
              </div>

              <div className={styles.defaultPermission}>
                <div className={styles.checkBox}>
                  <Checkbox sx={{
                    padding: '0px',
                    marginRight: '4px',
                    color: grey[900],
                    '&.Mui-checked': {
                      color: grey[900],
                    },
                    '& .MuiSvgIcon-root': { fontSize: 18 },
                  }} defaultChecked />
                </div>
                <p>
                  I agree to receive 2FA codes, account notifications, and app download links from Loadz Online LLC via Twilio. I understand multiple messages may be sent monthly. Standard data rates might apply. Reply 'STOP' to opt-out.
                </p>
              </div>

              <label>
                <div className={styles.inlineContainer}>
                  <Checkbox sx={{
                    padding: '0px',
                    marginRight: '4px',
                    color: grey[900],
                    '&.Mui-checked': {
                      color: grey[900],
                    },
                    '& .MuiSvgIcon-root': { fontSize: 18 },
                  }} />
                  <p>I have read and agree to the
                    <RouterLink to='/privacy'>Privacy Policy
                    </RouterLink> and
                    <RouterLink to='/privacy'>
                      term of use</RouterLink>  and
                    <RouterLink to='/terms'>
                      terms and conditions
                    </RouterLink>.</p>
                </div>
                Check the checkbox if you agree with the terms of use, privacy policy and terms and conditions.
              </label>
              <Button variant="contained"
                sx={{
                  backgroundColor: "rgb(237, 202, 51)",
                  borderRadius: "1.125rem",
                  width: "100%",
                  color: "black",
                  padding: "1.2",
                  marginTop: "10px",
                  marginBottom: "0.5rem",
                  fontSize: '0.813rem',
                  textTransform: 'capitalize',
                  ":hover": { backgroundColor: "rgb(237,202,51)" }
                }}>
                Send OTP
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Create
