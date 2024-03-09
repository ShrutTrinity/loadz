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


const Setting = ({handleClose}) => {
  

  const handleClickInside = (event) => {
   
    event.stopPropagation();
  };
  return (
    <>
      <div className={styles.container}onClick={handleClose} >
        <div className={styles.flotright}  onClick={handleClickInside}>
          <div className={styles.title}>
            Settings
          </div>
          <div className={styles.btns}>
            <Button title={"Ticket Status"} icon={<ConfirmationNumberIcon />} />
            <Button title={"Inspection Questions"} icon={<AssignmentTurnedInIcon />} />
            <Button title={"Materials"} icon={<ShopIcon />} />
            <Button title={"Units"} icon={<SquareFootIcon />} />
            <Button title={"Quarries"} icon={<PlaceIcon />} />
          </div>
          <div className={styles.tt2}>Inspection Setting</div>
          <div class='flex'>
            <FormControl component="fieldset" variant="standard" sx={{width:'100%'}}>
              <FormGroup>
                <Formcontroller label={'Enable Contractors'} />
                <Formcontroller label={'Employee can Skip'} />
                <Formcontroller label={'Enable Notifications'} />
              </FormGroup>
               </FormControl>

          </div>
          <div className={styles.tt2}>Time Clock Settings</div>
          <div class='flex'>
            <FormControl component="fieldset" variant="standard" sx={{width:'100%'}}>
              <FormGroup>
                <Formcontroller label={'Contractors'} />
                <Formcontroller label={'Employees'} />
              </FormGroup>
               </FormControl>
          </div>
        </div>
      </div>
    </>
  )
}

export default Setting