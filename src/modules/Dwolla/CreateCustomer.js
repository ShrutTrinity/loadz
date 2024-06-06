import React, { useState } from 'react';
import styles from './style/createCustomer.module.scss';
import Stepr from './Components/Stepr';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

const businessTypes = [
  { value: 10, label: 'Sole Proprietorship' },
  { value: 20, label: 'Partnership' },
  { value: 30, label: 'Corporation' },
  { value: 40, label: 'LLC' },
];

const businessClass = [
  { value: 1, label: 'Food retail and service' },
  { value: 2, label: 'Manufacturing' },
  { value: 3, label: 'Business to business' },
  { value: 4, label: 'Services - other' },
  { value: 5, label: 'Entertainment and media' },
  { value: 6, label: 'Home and garden' },
  { value: 7, label: 'Baby' },
  { value: 8, label: 'Travel' },
  { value: 9, label: 'Clothing, accessories, and shoes' },
  { value: 10, label: 'Health and personal care' },
  { value: 11, label: 'Beauty and fragrances' },
  { value: 12, label: 'Computers, accessories, and services' },
  { value: 13, label: 'Retail' },
  { value: 14, label: 'Toys and hobbies' },
  { value: 15, label: 'Pets and animals' },
  { value: 16, label: 'Arts, crafts, and collectibles' },
  { value: 17, label: 'Financial services and products' },
  { value: 18, label: 'Government' },
  { value: 19, label: 'Vehicle sales' },
  { value: 20, label: 'Nonprofit' },
  { value: 21, label: 'Vehicle service and accessories' },
  { value: 22, label: 'Electronics and telecom' },
  { value: 23, label: 'Books and magazines' },
  { value: 24, label: 'Religion and spirituality (for profit)' },
  { value: 25, label: 'Sports and outdoors' },
  { value: 26, label: 'Gifts and flowers' },
]

const industryArray = [
  { value: 1, label: 'Gift, card, novelty, and souvenir shops' },
  { value: 2, label: 'Nursery plants and flowers' },
  { value: 3, label: 'Party supplies' },
  { value: 4, label: 'Florist' },
  { value: 5, label: 'Gourmet foods' },
]

const states = [
  { value: '1', label: 'Alabama' },
  { value: '2', label: 'Alaska' },
  { value: '3', label: 'Arizona' },
  { value: '4', label: 'Arkansas' },
  { value: '5', label: 'California' },
  { value: '6', label: 'Colorado' },
  { value: '7', label: 'Connecticut' },
  { value: '8', label: 'Delaware' },
  { value: '9', label: 'Florida' },
  { value: '10', label: 'Georgia' },
  { value: '11', label: 'Hawaii' },
  { value: '12', label: 'Idaho' },
  { value: '13', label: 'Illinois' },
  { value: '14', label: 'Indiana' },
  { value: '15', label: 'Iowa' },
  { value: '16', label: 'Kansas' },
  { value: '17', label: 'Kentucky' },
  { value: '18', label: 'Louisiana' },
  { value: '19', label: 'Maine' },
  { value: '20', label: 'Maryland' },
  { value: '21', label: 'Massachusetts' },
  { value: '22', label: 'Michigan' },
  { value: '23', label: 'Minnesota' },
  { value: '24', label: 'Mississippi' },
  { value: '25', label: 'Missouri' },
  { value: '26', label: 'Montana' },
  { value: '27', label: 'Nebraska' },
  { value: '28', label: 'Nevada' },
  { value: '29', label: 'New Hampshire' },
  { value: '30', label: 'New Jersey' },
  { value: '31', label: 'New Mexico' },
  { value: '32', label: 'New York' },
  { value: '33', label: 'North Carolina' },
  { value: '34', label: 'North Dakota' },
  { value: '35', label: 'Ohio' },
  { value: '36', label: 'Oklahoma' },
  { value: '37', label: 'Oregon' },
  { value: '38', label: 'Pennsylvania' },
  { value: '39', label: 'Rhode Island' },
  { value: '40', label: 'South Carolina' },
  { value: '41', label: 'South Dakota' },
  { value: '42', label: 'Tennessee' },
  { value: '43', label: 'Texas' },
  { value: '44', label: 'Utah' },
  { value: '45', label: 'Vermont' },
  { value: '46', label: 'Virginia' },
  { value: '47', label: 'Washington' },
  { value: '48', label: 'West Virginia' },
  { value: '49', label: 'Wisconsin' },
  { value: '50', label: 'Wyoming' },
];


const allStyle = {
  labelStyle: {
    fontSize: '13px'
  },

}

const CreateCustomer = () => {

  const [businessType, setBusinessTypes] = useState('');
  const [businessClassification, setBusinessClassification] = useState('');
  const [industry, setIndustry] = useState('');
  const [state, setState] = useState('');

  const handleChangeType = (event) => {
    setBusinessTypes(event.target.value);
  };

  const handleChangeClassification = (event) => {
    setBusinessClassification(event.target.value);
  }

  const handleIndustry = (event) => {
    setIndustry(event.target.value);
  }

  const handleState = (event) => {
    setState(event.target.value);
  }

  return (
    <>
      <div className={styles.body}>
        <div className={styles.stepperCover}>
          <Stepr />
        </div>
        <section className={styles.formSection}>
          <h4 className={styles.formHeading}>
            Business Information
          </h4>

          {/*  */}
          <div className={styles.businessDetail}>
            <FormControl required sx={{ m: 1, width: '100%' }}>
              <InputLabel
                id="demo-simple-select-required-label" style={allStyle.labelStyle}
              >
                Business Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={businessType}
                label="BusinessType"
                required
                onChange={handleChangeType}
                sx={{
                  "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
                    padding: '13px 8px !important'
                  },
                }}
              >
                {businessTypes.map((type) => (
                  <MenuItem key={type.value} value={type.value} style={allStyle.menuItemStyle}>
                    <span style={allStyle.labelStyle}>{type.label}</span>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, width: '100%' }}>
              <TextField
                id="outlined-basic"
                label="Legal Business Name"
                variant="outlined" required
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '100%' }}>
              <TextField
                id="outlined-basic"
                label="Legal Business Name"
                variant="outlined" required
              />
            </FormControl>
          </div>

          {/*  */}
          <div className={styles.industryInformation}>
            <FormControl required sx={{ m: 1, width: '100%' }}>
              <InputLabel
                id="demo-simple-select-required-label" style={allStyle.labelStyle}
              >
                Business Classification
              </InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={businessClassification}
                label="BusinessType"
                required
                onChange={handleChangeClassification}
                sx={{
                  "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
                    padding: '13px 8px !important'
                  },
                }}
              >
                {businessClass.map((type) => (
                  <MenuItem key={type.value} value={type.value} style={allStyle.menuItemStyle}>
                    <span style={allStyle.labelStyle}>{type.label}</span>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl required sx={{ m: 1, width: '100%' }}>
              <InputLabel
                id="demo-simple-select-required-label" style={allStyle.labelStyle}
              >
                Industry
              </InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={industry}
                label="BusinessType"
                required
                onChange={handleIndustry}
                sx={{
                  "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
                    padding: '13px 8px !important'
                  },
                }}
              >
                {industryArray.map((type) => (
                  <MenuItem key={type.value} value={type.value} style={allStyle.menuItemStyle}>
                    <span style={allStyle.labelStyle}>{type.label}</span>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          {/*  */}
          <div className={styles.addressInformation}>
            <FormControl sx={{ m: 1, width: '100%' }}>
              <TextField
                id="outlined-basic"
                label="Address 1"
                variant="outlined"
                required
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '50%' }}>
              <TextField
                id="outlined-basic"
                label="Address 2 (Optional)"
                variant="outlined"
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '50%' }}>
              <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
                required
              />
            </FormControl>
            <FormControl required sx={{ m: 1, width: '50%' }}>
              <InputLabel
                id="demo-simple-select-required-label" style={allStyle.labelStyle}
              >
                State
              </InputLabel>
              <Select
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                value={state}
                label="BusinessType"
                required
                onChange={handleState}
                sx={{
                  "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
                    padding: '13px 8px !important'
                  },
                }}
              >
                {states.map((type) => (
                  <MenuItem key={type.value} value={type.value} style={allStyle.menuItemStyle}>
                    <span style={allStyle.labelStyle}>{type.label}</span>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width: '50%' }}>
              <TextField
                id="outlined-basic"
                label="Postal Code"
                variant="outlined"
                required
              />
            </FormControl>
          </div>

        </section>
      </div>
    </>
  )
}

export default CreateCustomer;