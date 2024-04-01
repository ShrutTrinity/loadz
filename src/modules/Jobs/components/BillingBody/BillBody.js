import React, { useState } from 'react'
import styles from './styles/billBody.module.scss'
import CustomTextFiled from '../TextField/CustomTextFiled'
import SwitchMUI from '../CustomSwitch/Switch'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Add from '../AddButton/Add';
import Button from '@mui/material/Button';
import DataTable from './DataTable';

const BillBody = (props) => {

  const [value, setValue] = useState(true)
  const [valueOfCommission, setValueOfCommission] = useState(false)
  const [valueOfTax, setValueOfTax] = useState(true)
  const [valueOfCharging, setValueOfCharging] = useState(false)

  const handleSwitchVlue = () => {
    setValue(!value)
    if (value === false) {
      setValueOfTax(true)
    }
    if (value === true) {
      setValueOfTax(false)
    }
  }

  const handleCommissionSitchValue = () => {
    setValueOfCommission(!valueOfCommission)
  }

  const handleTaxSwitch = () => {
    setValueOfTax(!valueOfTax)
  }

  const handleCharging = () => {
    setValueOfCharging(!valueOfCharging)
  }


  return (
    <>
      <div className={styles.body}>
        <div className={styles.cardContainer}>
          {/* 1 */}
          <div className={styles.cardiner}>
            <h2 className={styles.cardinerHeading}>Material Rates</h2>
            <h3 className={styles.h3}>Select the material being hauled</h3>
            <div className={styles.textContainer}>
              <CustomTextFiled name='materials' label='Materials' placeholder='Select a materials' />
            </div>
            <div className={styles.cardDetail}>
              <div className={styles.container}>
                <div className={styles.switch1}>
                  <p className={styles.switchLabel}>Are You Selling The Material?</p>
                  <SwitchMUI handleSwitchValue={handleSwitchVlue} valueOfSwitch={!value} />
                </div>
                <div className={styles.switch2}>
                  <p className={styles.switchLabel}>Is It Taxable?</p>
                  <SwitchMUI handleSwitchValue={handleTaxSwitch} valueOfSwitch={!valueOfTax} />
                </div>
              </div>
            </div>
            {!value &&
              <div className={styles.conditionalContainer}>
                <CustomTextFiled
                  id='invoice-rate'
                  name='invoice-rate'
                  type='number'
                  label='Material Invoice Rate'
                  placeholder='$0.00'
                />
                <span>Enter the Material Invoice Rate</span>

                <div className={styles.containerFirst}>
                  <CustomTextFiled
                    id='cost-rate'
                    name='cost-rate'
                    type='number'
                    label='Material Cost Rate'
                    placeholder='$0.00'
                  />
                </div>
              </div>
            }
          </div>


          {/* 2 */}
          <div className={styles.cardiner}>
            <h2 className={styles.cardinerHeading}>Hauling Rates</h2>
            <h3 className={styles.h3}>Select the Unit of Measure that will appear on your invoice.</h3>
            <div className={styles.textContainer}>
              <CustomTextFiled name='materials' label='Units' placeholder='Select a materials' />
            </div>
            <div className={styles.textContainer}>
              <CustomTextFiled name='materials' label='Unit Invoice Rate' placeholder='$0.00' type='number' />
            </div>
            <div className={styles.conditionalSate2}>
              <div className={styles.cardDetail}>
                <div className={styles.switch1}>
                  <p className={styles.switchLabel}>Do you pay In-House Drivers commission?</p>
                  <SwitchMUI handleSwitchValue={handleCommissionSitchValue} valueOfSwitch={!valueOfCommission} />
                </div>
              </div>
              {valueOfCommission &&
                <div className={styles.textContainerDriverRate}>
                  <CustomTextFiled name='DriverRate' label='Driver Hourly Rate' placeholder='$0.00' type='number' />
                </div>
              }
              <div>
                <p className={styles.condition}>If you are paying hourly wages on this job, select “No”. (This Only Applies To In-house Drivers)</p>
              </div>
              {!value &&
                <div className={styles.cardDetail}>
                  <div className={styles.switch1}>
                    <p className={styles.switchLabel}>Are you charging your customer for hauling ?</p>
                    <SwitchMUI handleSwitchValue={handleCharging} valueOfSwitch={!valueOfCharging} />
                  </div>
                </div>
              }
              <div className={styles.textContainer}>
                <CustomTextFiled name='Unit-Cost-Rate' label='Unit Cost Rate' placeholder='$0.00' type='number' />
              </div>
            </div>
          </div>


          {/* 3 */}
          <div className={styles.cardiner}>
            <h2 className={styles.cardinerHeading}>Owner Operator / Subcontractor Rates</h2>
            <div className={styles.textContainer}>
              <CustomTextFiled name='materials' label='Subcontractor Unit Cost Rate' placeholder='$0.00' type='number' />
            </div>
            <div className={styles.textContainer}>
              <CustomTextFiled name='materials' label='Owner Operator Unit Cost Rate' placeholder='$0.00' type='number' />
            </div>

            <div className={styles.note}>
              <InfoOutlinedIcon size='large' />
              <p className={styles.noteText}>If you need to set a different rate for an owner operator or subcontractor, simply enter it and it will take precedence over the job-specified rate for that particular driver.</p>
            </div>
          </div>

        </div>

        <div className={styles.operatoroutter}>
          <h2 className={styles.operatoroutterHeading}>
            Owner Operator / Subcontractor Special Rates
          </h2>
          <p className={styles.operatoroutterSubtitle}>Please enter your special rates for owner-operators, and subcontractors here. Doing so will update the job rates of each individual.</p>
        </div>

        {
          props.formData !== null &&
          <div className={styles.table}>
            <DataTable formData={props.formData} handleDelete={props.handleDelete} handleEdit={props.handleEdit} />
          </div>
        }

        <div className={styles.bottomFunctions}>

          <div className={styles.addRates}>
            <Add buttonBehaviour={props.openSpecialRateForm} />Add
          </div>

          <div className={styles.functionBtns}>
            <Button variant="contained" sx={{
              backgroundColor: 'rgb(237, 202, 51)',
              '&:hover': { backgroundColor: 'rgb(237, 202, 51)' },
              padding: '11px 50px',
              fontSize: '16px',
              color: 'black',
              '@media (max-width: 766px)': {
                fontSize:'4px',
                padding:'11px 30px'
              }
            }}
            >Close</Button>
            <Button variant="contained" sx={{
              backgroundColor: 'rgb(237, 202, 51)',
              '&:hover': { backgroundColor: 'rgb(237, 202, 51)' },
              padding: '11px 50px',
              fontSize: '16px',
              color: 'black',
              '@media (max-width: 766px)': {
                fontSize:'4px',
                padding:'11px 30px'
              }
            }}>Create</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BillBody