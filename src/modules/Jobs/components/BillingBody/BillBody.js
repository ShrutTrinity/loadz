import React, { useState } from 'react';
import styles from './styles/billBody.module.scss';
import CustomTextFiled from '../TextField/CustomTextFiled';
import SwitchMUI from '../CustomSwitch/Switch';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Add from '../AddButton/Add';
import Button from '@mui/material/Button';
import DataTable from './DataTable';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const allStyle = {
  btns: {
    backgroundColor: 'rgb(237, 202, 51)',
    padding: '11px 50px',
    fontSize: '16px',
    color: 'black',
    '&:hover': {
      backgroundColor: 'rgb(237, 202, 51)'
    },
    '@media (max-width: 766px)': { fontSize: '4px', padding: '11px 30px' }
  }
}

const BillBody = ({ formData, setEditData, openSpecialRateForm, handleDeleteDialog }) => {
  const [value, setValue] = useState(true);
  const [valueOfCommission, setValueOfCommission] = useState(false);
  const [valueOfTax, setValueOfTax] = useState(true);
  const [valueOfCharging, setValueOfCharging] = useState(false);
  const [unit, setUnit] = useState('');

  const handleEditData = (rowData) => {
    setEditData(rowData);
    openSpecialRateForm();
  };

  const handleChange = (event) => {
    setUnit(event.target.value);
  };

  const toggleSwitch = (setter) => {
    setter(prev => !prev);
  };

  const Card = ({ heading, children }) => (
    <div className={styles.cardiner}>
      <h2 className={styles.cardinerHeading}>{heading}</h2>
      {children}
    </div>
  );

  const SwitchWithLabel = ({ label, value, onChange }) => (
    <div className={styles.switch1}>
      <p className={styles.switchLabel}>{label}</p>
      <SwitchMUI handleSwitchValue={onChange} valueOfSwitch={!value} />
    </div>
  );

  const TextInputWithLabel = ({ label, placeholder, type = 'text', ...rest }) => (
    <div className={styles.textContainer}>
      <CustomTextFiled label={label} placeholder={placeholder} type={type} {...rest} />
    </div>
  );

  return (
    <div className={styles.body}>
      <div className={styles.cardContainer}>
        <Card heading="Material Rates">
          <h3 className={styles.h3}>Select the material being hauled</h3>
          <TextInputWithLabel name='materials' label='Materials' placeholder='Select a materials' />
          <div className={styles.cardDetail}>
            <SwitchWithLabel label="Are You Selling The Material?" value={value} onChange={() => toggleSwitch(setValue)} />
            <SwitchWithLabel label="Is It Taxable?" value={valueOfTax} onChange={() => toggleSwitch(setValueOfTax)} />
          </div>
          {!value && (
            <div className={styles.conditionalContainer}>
              <TextInputWithLabel
                id='invoice-rate'
                name='invoice-rate'
                type='number'
                label='Material Invoice Rate'
                placeholder='$0.00'
              />
              <span>Enter the Material Invoice Rate</span>
              <TextInputWithLabel
                id='cost-rate'
                name='cost-rate'
                type='number'
                label='Material Cost Rate'
                placeholder='$0.00'
              />
            </div>
          )}
        </Card>

        <Card heading="Hauling Rates">
          <h3 className={styles.h3}>Select the Unit of Measure that will appear on your invoice.</h3>
          <div className={styles.textContainer}>
            <Select
              value={unit}
              name="persionTypeValue"
              onChange={handleChange}
              required
              sx={{ width: '100%', background: 'white' }}
            >
              <MenuItem value="Subcontractor">Subcontractor</MenuItem>
              <MenuItem value="Owner Operator">Owner Operator</MenuItem>
            </Select>
          </div>
          <TextInputWithLabel name='materials' label='Unit Invoice Rate' placeholder='$0.00' type='number' />
          <div className={styles.conditionalSate2}>
            <SwitchWithLabel label="Do you pay In-House Drivers commission?" value={valueOfCommission} onChange={() => toggleSwitch(setValueOfCommission)} />
            {
              valueOfCommission && <TextInputWithLabel
                name='DriverRate'
                label='Driver Hourly Rate'
                placeholder='$0.00'
                type='number' />
            }
            <p className={styles.condition}>If you are paying hourly wages on this job, select “No”. (This Only Applies To In-house Drivers)</p>
            {
              !value && <SwitchWithLabel
                label="Are you charging your customer for hauling?"
                value={valueOfCharging}
                onChange={() => toggleSwitch(setValueOfCharging)} />
            }
            <TextInputWithLabel name='Unit-Cost-Rate' label='Unit Cost Rate' placeholder='$0.00' type='number' />
          </div>
        </Card>

        <Card heading="Owner Operator / Subcontractor Rates">
          <TextInputWithLabel
            name='materials'
            label='Subcontractor Unit Cost Rate'
            placeholder='$0.00'
            type='number'
          />
          <TextInputWithLabel
            name='materials'
            label='Owner Operator Unit Cost Rate'
            placeholder='$0.00'
            type='number'
          />
          <div className={styles.note}>
            <InfoOutlinedIcon size='large' />
            <p className={styles.noteText}>
              If you need to set a different rate for an owner operator or subcontractor, simply enter it and it will take precedence over the job-specified rate for that particular driver.
            </p>
          </div>
        </Card>
      </div>

      <div className={styles.operatoroutter}>
        <h2 className={styles.operatoroutterHeading}>Owner Operator / Subcontractor Special Rates</h2>
        <p className={styles.operatoroutterSubtitle}>Please enter your special rates for owner-operators, and subcontractors here. Doing so will update the job rates of each individual.</p>
      </div>

      {formData && (
        <div className={styles.table}>
          <DataTable formData={formData} handleEdit={handleEditData} handleDeleteDialog={handleDeleteDialog} />
        </div>
      )}

      <div className={styles.bottomFunctions}>
        <div className={styles.addRates}>
          <Add buttonBehaviour={openSpecialRateForm} />Add
        </div>
        <div className={styles.functionBtns}>
          <Button variant="contained" style={allStyle.btns}>
            Close
          </Button>
          <Button variant="contained" style={allStyle.btns}>
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BillBody;