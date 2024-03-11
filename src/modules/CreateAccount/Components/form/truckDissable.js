
import { Checkbox } from "@mui/material"
import styles from './styles/commonTruck.module.scss';
import DisableTextField from "@components/textfield/DisableTextfield";

const Disabletruck = () => {
  return (
    <div className={styles.truckForm}>
      <div className={styles.detail}>
        <label className={styles.inputNo}>
          <DisableTextField
            label='Truck No.'
            placeholder='Truck No'
            type='text'
            name='truckNo'
            
          />
        
        </label>
        <label className={styles.inputNo}>
          <DisableTextField
            label='VIN#'
            placeholder='VIN#'
            type='text'
            name='VIN'
            
          />
        
        </label>
        <label className={styles.inputNo}>
          <DisableTextField
            label='Color'
            placeholder='Color'
            type='text'
            name='color'
            
          />
         
        </label>
        <label className={styles.inputNo}>
          <DisableTextField
            label='Year'
            placeholder='Year'
            type='number'
            name='year' 
          />
          
        </label>
        <label className={styles.inputNo}>
          <DisableTextField
            label='Manufacturer'
            placeholder='Manufacturer*'
            type='text'
            name='mnufacturer'
            
          />
        
        </label>
        <label className={styles.inputNo}>
          <DisableTextField
            label='Model'
            placeholder='Model'
            type='text'
            name='model'
            
          />
        </label>
        <label className={styles.inputNo}>
          <DisableTextField
            label='Insurance Expiry'
            placeholder=''
            type='date'
            name='expiryDate'
            
          />
        </label>
        <div className={styles.checkBox}>
          <span>Is Dump Truck?</span>
          <Checkbox
          disabled
            required
            name='dumpTruck'
            inputProps={{
                sx:{
              color: 'balck',
              '&.Mui-checked': {
                backgroundColor: 'rgb(237, 202, 51)',
                boxShadow:'gray'
              },
              transform: 'scale(0.8)'
            }
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Disabletruck
