import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles/loginPage.module.scss';
import TextField from '@mui/material/TextField';
import { grey } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link as RouterLink } from 'react-router-dom';
import Card from '../../card/Card';

const versions = "V1.0.0/ v1.0.1"
const LoginPage = () => {
    const formik = useFormik({
        initialValues: {
            password: '',
            rememberMe: false,
        },
        validationSchema: Yup.object({
            password: Yup.string().min(8, 'Password is too short')
         
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className={styles.root}>
        <Card>
          <h6 className={styles.heading}>Login to your account</h6>
          <form>
            <div className={styles.formControl1}>
              <TextField id="standard-basic" required label="Email"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (<div className={styles.icon}><EmailIcon /></div>)
                }} />
            </div>
            <div className={styles.formControl1}>
              <TextField id="standard-basic" required label="Password"
                variant="standard"
                type={showPassword ? 'text' : 'password'}
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
                <div className={styles.label1}>Remember Me</div>
              </div>
              <RouterLink className={styles.a} to='/forgetPass'>Forgot Password?</RouterLink>
            </div>
            <Button variant="contained"
              sx={{
                backgroundColor: "black",
                ":hover": { backgroundColor: "black" },
                borderRadius: "1.125rem",
                width: "16rem",
                padding: "1.2",
                margin: "0 0rem",
                fontWeight: '300',
                textTransform: 'capitalize'
              }}>
              Login
            </Button>
          </form>

          <div className={styles.bottomdetail}>
            <span style={{ fontSize: '13px' }}>Don't have an account?</span>
            <RouterLink className={styles.a2} to='/subscription'>
              Create an account
            </RouterLink>
          </div>
          <RouterLink className={styles.a2}
            style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}
            to='/customerportal/login'>
            Want to Pay Hauling Invoices?
          </RouterLink>
        </Card>
        <span style={{ color: 'white' }}>{versions}</span>
      </div>
      <div className={styles.toolbar}>
        <div className={styles.toolbarDetail}>
          <RouterLink to='/terms' className={styles.bottomLink}>Terms and conditions</RouterLink>
          <RouterLink className={styles.bottomLink} to='/privacy'>Privacy Policy</RouterLink>
        </div>
      </div>
    </>
  )
}
export default LoginPage