
import { Checkbox } from "@mui/material"
import styles from './styles/commonTruck.module.scss';
import DisableTextField from "../textfield/DisableTextfield";

const Disabletruck = ({ formik }) => {
  return (
    <div className={styles.truckForm}>
      <div className={styles.detail}>
        <label className={styles.inputNo}>
          <DisableTextField
            label='Truck No.'
            placeholder='Truck No'
            type='text'
            name='truckNo'
            formik={formik}
          />
          <div style={{ color: 'red', marginTop: '-20px', marginLeft: '0', fontSize: '12px' }}>
            {formik.touched.truckNo && formik.errors.truckNo}
          </div>
        </label>
        <label className={styles.inputNo}>
          <DisableTextField
            label='VIN#'
            placeholder='VIN#'
            type='text'
            name='VIN'
            formik={formik}
          />
          <div style={{ color: 'red', marginTop: '-20px', marginLeft: '0', fontSize: '12px' }}>
            {formik.touched.VIN && formik.errors.VIN}
          </div>
        </label>
        <label className={styles.inputNo}>
          <DisableTextField
            label='Color'
            placeholder='Color'
            type='text'
            name='color'
            formik={formik}
          />
          <div style={{ color: 'red', marginTop: '-20px', marginLeft: '0', fontSize: '12px' }}>
            {formik.touched.color && formik.errors.color}
          </div>
        </label>
        <label className={styles.inputNo}>
          <DisableTextField
            label='Year'
            placeholder='Year'
            type='number'
            name='year'
            formik={formik}
          />
          <div style={{ color: 'red', marginTop: '-20px', marginLeft: '0', fontSize: '12px' }}>
            {formik.touched.year && formik.errors.year}
          </div>
        </label>
        <label className={styles.inputNo}>
          <DisableTextField
            label='Manufacturer'
            placeholder='Manufacturer*'
            type='text'
            name='mnufacturer'
            formik={formik}
          />
          <div style={{ color: 'red', marginTop: '-20px', marginLeft: '0', fontSize: '12px' }}>
            {formik.touched.mnufacturer && formik.errors.mnufacturer}
          </div>
        </label>
        <label className={styles.inputNo}>
          <DisableTextField
            label='Model'
            placeholder='Model'
            type='text'
            name='model'
            formik={formik}
          />
          <div style={{ color: 'red', marginTop: '-20px', marginLeft: '0', fontSize: '12px' }}>
            {formik.touched.model && formik.errors.model}
          </div>
        </label>
        <label className={styles.inputNo}>
          <DisableTextField
            label='Insurance Expiry'
            placeholder=''
            type='date'
            name='expiryDate'
            formik={formik}
          />
          <div style={{ color: 'red', marginTop: '-20px', marginLeft: '0', fontSize: '12px' }}>
            {formik.touched.expiryDate && formik.errors.expiryDate}
          </div>
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
