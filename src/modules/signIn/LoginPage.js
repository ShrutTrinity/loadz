import React, { useState } from 'react'
import styles from './styles/loginPage.module.scss'
import TextField from '@mui/material/TextField';
import { grey } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Logo from './images/loadzlogo.png'
import { Link as RouterLink } from 'react-router-dom';

const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className={styles.root}>
                <div className={styles.mainContainer}>
                    <div className={styles.card}>
                        <div className={styles.cardDetail}>
                            <img className={styles.logo} src={Logo} alt='logo' />
                            <h6 className={styles.heading}>Login to your account</h6>
                            <form>
                                <div className={styles.formControl1}>
                                    <TextField id="standard-basic" required label="Email&nbsp; " variant="standard" InputProps={{ disableUnderline: true ,
                                        endAdornment: (<div className={styles.icon}><EmailIcon /></div>) }} />
                                </div>
                                <div className={styles.formControl1}>
                                    <TextField id="standard-basic" required label="Password &nbsp;" variant="standard" type={showPassword ? 'text' : 'password'}
                                        InputProps={{
                                            disableUnderline: true,
                                            endAdornment: (
                                                <div className={styles.icon} onClick={togglePasswordVisibility}>
                                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                </div>
                                            ),
                                        }}
                                    />
                                </div>
                                <div className={styles.bottomform}>
                                    <div className={styles.checkbox}>
                                        <Checkbox sx={{
                                            marginLeft: '-0.5rem',
                                            color: grey[900],
                                            '&.Mui-checked': {
                                                color: grey[900],
                                            },
                                        }} />
                                        <div className={styles.label}>Remember Me</div>
                                    </div>
                                    <RouterLink className={styles.a} to='/forgetPass'>Forgot Password?</RouterLink>
                                </div>
                                <Button variant="contained" sx={{ backgroundColor: "black", ":hover": { backgroundColor: "black" }, borderRadius: "1.125rem", width: "16rem", padding: "1.2", marginTop: "1rem", margin: "0 0rem" }}>
                                    Login
                                </Button>
                            </form>

                            <div className={styles.bottomdetail}>
                                <span>Don't have an account?</span>
                                <RouterLink className={styles.a2} to='/subscription'>
                                    Create an account
                                </RouterLink>
                            </div>
                            <RouterLink className={styles.a2} style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }} to='/customerportal/login'>
                                Want to Pay Hauling Invoices?
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <span style={{ color: 'white' }}>V1.0.0/ v1.0.1</span>
            </div>
            <div className={styles.toolbar}>
                <div className={styles.toolbarDetail}>
                <div className={styles.toolbarDetail}>
                    <RouterLink to='/terms' className={styles.bottomLink}>Terms and conditions</RouterLink>
                    <RouterLink  className={styles.bottomLink} to='/privacy'>Privacy Policy</RouterLink>
                </div>
                </div>
            </div>
        </>
    )
}
export default LoginPage