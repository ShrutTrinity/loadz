import React from 'react';
import styles from '../forgetpassword/styles/forgetpassword.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import Card from '@components/card/Card';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



const RecoverPassword = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showPassword2, setShowPassword2] = React.useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };
    return (
        <>
            <div className={styles.container}>
                <Card>
                    <h6 className={styles.recover}>Reset Your Password</h6>
                    <form >
                        <div className={styles.multiInput}>
                            <TextField
                                sx={{
                                    marginLeft: "0.7rem",
                                    borderBottom: '0',
                                    zIndex: '2',
                                    '& .MuiInputLabel-root': {
                                        fontSize: 13,
                                    },
                                }}
                                InputProps={{
                                    disableUnderline: true,
                                    endAdornment: (
                                        <div className={styles.icon} onClick={togglePasswordVisibility2}>
                                            {showPassword2 ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                        </div>
                                    ),
                                }}
                                type={showPassword2 ? 'text' : 'password'}
                                id="password"
                                name="password"
                                label="Password"
                                required
                                variant="standard"
                            />
                        </div>


                        <div className={styles.multiInput}>
                            <TextField
                                sx={{
                                    marginLeft: "0.7rem",
                                    borderBottom: '0',
                                    zIndex: '2',
                                    '& .MuiInputLabel-root': {
                                        fontSize: 13,
                                    },
                                }}
                                type={showPassword ? 'text' : 'password'}
                                InputProps={{
                                    disableUnderline: true,
                                    endAdornment: (
                                        <div className={styles.icon} onClick={togglePasswordVisibility}>
                                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                        </div>
                                    ),
                                }}
                                id="confirmPassword"
                                name="confirmPassword"
                                label="Confirm Password"
                                required
                                variant="standard"
                            />
                        </div>

                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                textTransform: 'none',
                                backgroundColor: "black",
                                borderRadius: 18,
                                width: "14rem",
                                ":hover": { backgroundColor: "black" }
                            }}
                        >
                           
                                <RouterLink to="/" className={styles.resetlink}>Reset my password</RouterLink>
                            
                                
                            
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

export default RecoverPassword;