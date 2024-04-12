import React from 'react'
import styles from './addtruckform.module.scss'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CustomTextFiled from '../../Jobs/components/TextField/CustomTextFiled';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const Addtruckform = () => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.heading}>
              <Link to="/truck/all" className={styles.backLink}>
                <div className={styles.part1}>
                  <ArrowBackIcon fontSize="small" />
                  <span className={styles.backbtn}>Back to Truck</span>
                </div>
              </Link>
              <div className={styles.part2}>
                <div className={styles.headerText}>
                  <h4 className={styles.title}>Add Truck</h4>
                </div>
              </div>
            </div>
          </div>
          <form>
            <div className={styles.flexform}>
              <div className={styles.formpart1}>
                <div className={styles.width}>
                  <CustomTextFiled
                    required={"required"}
                    id='Truck Number'
                    name='Truck Number'
                    type='trucknumber'
                    label='Truck Number'
                    placeholder='Truck Number'
                  />
                </div>
                <div className={styles.width}>
                  <CustomTextFiled
                    id=' vinNumber'
                    name='VIN Number'
                    type='VIN Number'
                    label='VIN Number'
                    placeholder='VIN Number'
                  />
                </div>
                <div className={styles.width}>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      defaultValue={10}
                    >
                      <MenuItem value={10} >Active</MenuItem>
                      <MenuItem value={20}>Unactive</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={styles.width}>
                <InputLabel id="demo-simple-select-label">Driver</InputLabel>
                  <FormControl fullWidth>
                    <Select 
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                    >
                      <MenuItem value={10} >No Driver </MenuItem>
                      <MenuItem value={20}> ABC</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={styles.width}>
                  <CustomTextFiled
                    id='truckcolor'
                    name='Truck Color'
                    type='text'
                    label='Truck Color'
                    placeholder='Truck Color'
                  />
                </div>
                <div className={styles.width}>
                  <CustomTextFiled
                    id='truckmake'
                    name='Truck Make'
                    type='text'
                    label='Truck Make'
                    placeholder='Truck Make'
                  />
                </div>
                <div className={styles.width}>
                  <CustomTextFiled
                    id='cost-rate'
                    name='Truck Model'
                    type='text'
                    label='Truck Model'
                    placeholder='Truck Model'
                  />
                </div>
                <div className={styles.width}>
                <InputLabel id="demo-simple-select-label">Driver</InputLabel>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                    >
                      <MenuItem value={10} >xyz </MenuItem>
                      <MenuItem value={20}> ABC</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={styles.width}>
                  <CustomTextFiled
                    id='cost-rate'
                    name='cost-rate'
                    type='number'
                    label='Material Cost Rate'
                    placeholder='$0.00'
                  />
                </div>
                <div className={styles.width}>
                  <CustomTextFiled
                    id='cost-rate'
                    name='cost-rate'
                    type='date'
                    label='Material Cost Rate'
                    placeholder=''
                  />
                  </div>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Is Dump Truck" />
              </div>
              <div className={styles.formpart2}>

              </div>
            </div>
          </form>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default Addtruckform



