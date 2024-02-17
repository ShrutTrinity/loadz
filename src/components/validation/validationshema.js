import * as Yup from 'yup';

const getValidationSchema = () => {
  return Yup.object().shape({
    email: Yup.string().email('Invalid email address',console.log('check')).required('Email is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character'
      )
      .required('Password is required'),
    termsAndConditions: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
    privacyPolicy: Yup.boolean().oneOf([true], 'You must accept the privacy policy'),
  });
};

export default getValidationSchema;
