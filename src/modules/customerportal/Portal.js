import React, { useState } from 'react';
import styles from './styles/portal.module.scss';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { grey } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';


const Portal = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className={styles.root}>
                <div className={styles.container}>
                    <div className={styles.cover}>
                        <div className={styles.card}>
                            <h1 className={styles.heading}>Login</h1>
                            <form>
                                <div className={styles.textField1}>
                                   <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Email"></input>
                                </div>
                                <div className={styles.input}>
                                    <div className={styles.textField1}>
                                        <input className="form-control" id="exampleFormControlInput2" placeholder="Enter your Password"
                                            type={showPassword ? 'text' : 'password'} />
                                    </div>
                                        <div className={styles.passIcon} onClick={togglePasswordVisibility}>
                                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                        </div>
                                </div>
                                <div className={styles.middleLine}>
                                    <div className={styles.firstPart}>
                                        <div className={styles.checkbox}>
                                            <Checkbox sx={{
                                                color: grey[900],
                                                '&.Mui-checked': {
                                                    color: grey[900],
                                                },
                                            }} />
                                        </div>
                                        <div className={styles.label}>Remember Me</div>
                                    </div>
                                    <div className={styles.secondPart}>
                                        <RouterLink className={styles.a} to='/forgetPass'>Forgot Password?</RouterLink>
                                    </div>
                                </div>
                                <div className={styles.rules}>
                                    <p style={{ margin: "0px" }}>Password Requirement*</p>
                                    <ol>
                                        <li>"At Least 1 Lowercase"</li>
                                        <li>"At Least 1 Uppercase"</li>
                                        <li>"At Least 1 Number"</li>
                                        <li>"At Least 1 Special Character (@!#$%&+=)"</li>
                                        <li>"10 Characters Minimum"</li>
                                    </ol>
                                </div>
                                <Button variant="contained" sx={{ backgroundColor: "rgb(237, 202, 51)", borderRadius: "1.125rem", width: "100%", padding: "1.2", marginTop: "1rem", margin: "0 0rem", fontSize: '0.813rem', ":hover": { backgroundColor: "rgb(237,202,51)" } }}>
                                    Login
                                </Button>
                            </form>
                            <div className={styles.bottom}>
                                <RouterLink className={styles.a2} to='/sbscribe'> Don't have an account click here </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portal
