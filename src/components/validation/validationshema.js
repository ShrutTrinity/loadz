import * as Yup from 'yup';

const getValidationSchema = () => {
  return Yup.object().shape({

    email: Yup.string().email('Invalid email address',).required('Email is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    password: Yup.string().required('password is required').min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/,
        'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character',
      ),
    termsAndConditions: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
    privacyPolicy: Yup.boolean().oneOf([true], 'You must accept the privacy policy'),

  });
};

const getValidationSchemaforsecond = () => {
  return Yup.object().shape({

    position: Yup.string().required('Position is required'),
    companyName: Yup.string().required('Company Name is required'),
    businessName: Yup.string(),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zip: Yup.string().required('Zip is required'),
    phone: Yup.string().required('Telephone is required'),
    cemail: Yup.string().email('Invalid email address').required('Company Email is required'),
    condition: Yup.boolean().oneOf([false], 'Please accept the conditions'),
  });
};

const getValidationSchemaforforth = () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  return Yup.object().shape({
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone Number is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    Hourlywage:Yup.string().required('Hourly Wage required'),
    CommissionRate:Yup.string().required('Commission Rate required')
  });

};

const getValidationSchemaforsix = () => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  return Yup.object().shape({
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone Number is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    usertype:Yup.string().required('Usertype is required'),

  });
};



export { getValidationSchema, getValidationSchemaforsecond, getValidationSchemaforforth,getValidationSchemaforsix};
const priceTagsSchema = () => {
  return Yup.object().shape({
    commission: Yup.string().required('Default Commission Rate is required'),
    wage: Yup.string().required('Default Hourly Wage is required'),
    waitRate: Yup.string().required('Company Wait Rate is required'),
    salesTax: Yup.string().required('Sales Tax Rate Amount is required')
  })
}

const addTruckSchema = () => {
  return Yup.object().shape({
    truckNo: Yup.string().required('Truck No Required'),
    VIN: Yup.string().required('Truck VIN # Required'),
    color: Yup.string().required('Truck Color Required'),
    year: Yup.string().required('Truck Year Required'),
    mnufacturer: Yup.string().required('Truck manufacturer Required'),
    model: Yup.string().required('Truck Model Required'),
    expiryDate: Yup.string().required('Insurance Expire Date Required'),
    trailerNo: Yup.string().required('Trailer No Required')
  })
}

export { getValidationSchema,getValidationSchemaforsecond,priceTagsSchema,addTruckSchema};
