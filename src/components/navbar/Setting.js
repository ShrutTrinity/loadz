import React from 'react'
import styles from './styles/setting.module.scss'
import Button from './Button'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ShopIcon from '@mui/icons-material/Shop';
import PlaceIcon from '@mui/icons-material/Place';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Formcontroller from './Formcontroller';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';



const Setting = ({handleClose}) => {
  const handleClickInside = (event) => {
    event.stopPropagation();
  };
  return (
    <>
      <div className={styles.container} onClick={handleClose} >
        <div className={styles.flotright}  onClick={handleClickInside}>
          <div className={styles.title}>
            Settings
          </div>
          <div className={styles.btns}>
            <Button title={"Ticket Status"} link='/tickets/status' icon={<ConfirmationNumberIcon />} />
            <Button title={"Inspection Ques tions"} icon={<AssignmentTurnedInIcon />} link='/Inspection/all' />
            <Button title={"Materials"} icon={<ShopIcon/>} link='/e-commerce/materials'/>
            <Button title={"Units"} icon={<SquareFootIcon />} link='/unitTemps/units'/>
            <Button title={"Quarries"} icon={<PlaceIcon/>} link='/locations/locals'/>
          </div>
          <div className={styles.tt2}>Inspection Setting</div>
          <div class='flex'>
            <FormControl component="fieldset" variant="standard" sx={{width:'100%'}}>
              <FormGroup>
              <div className={styles.flex2}>
                <Formcontroller label={'Enable Contractors'} />
                <InfoOutlinedIcon />
                </div>
                <div className={styles.flex2}>
                <Formcontroller label={'Employee can Skip'} />
                <InfoOutlinedIcon/>
                </div>
                <div className={styles.flex2}>
                <Formcontroller label={'Enable Notifications'} />
                <InfoOutlinedIcon />
                </div>


              </FormGroup>
               </FormControl>

          </div>
          <div className={styles.tt2}>Time Clock Settings</div>
          <div class='flex'>
            <FormControl component="fieldset" variant="standard" sx={{width:'100%'}}>
              <FormGroup>
              <div className={styles.flex2}>
                <Formcontroller label={'Contractors'} />
                <InfoOutlinedIcon/>
                </div>
                <div className={styles.flex2}>
                <Formcontroller label={'Employees'} />
                <InfoOutlinedIcon/>
                </div>
             
              </FormGroup>
               </FormControl>
          </div>
        </div>
      </div>
    </>
  )
}

export default Setting