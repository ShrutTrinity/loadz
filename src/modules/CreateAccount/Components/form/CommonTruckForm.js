import { Checkbox } from "@mui/material"
import styles from './styles/commonTruck.module.scss';
import CustomTextField from "@components/textfield/CustomeTextfield";

const CommonTruckForm = ({ formik }) => {
  const pagestyle = {
    formik: {
      color: 'red',
      marginTop: '-20px',
      marginLeft: '0',
      fontSize: '12px'
    }
  }
  return (
    <div className={styles.truckForm}>
      <div className={styles.detail}>
        <label className={styles.inputNo}>
          <CustomTextField
            label='Truck No.'
            placeholder='Truck No'
            type='text'
            name='truckNo'
            formik={formik}
          />
          <div style={pagestyle.formik}>
            {formik.touched.truckNo && formik.errors.truckNo}
          </div>
        </label>
        <label className={styles.inputNo}>
          <CustomTextField
            label='VIN#'
            placeholder='VIN#'
            type='text'
            name='VIN'
            formik={formik}
          />
          <div style={pagestyle.formik}>
            {formik.touched.VIN && formik.errors.VIN}
          </div>
        </label>
        <label className={styles.inputNo}>
          <CustomTextField
            label='Color'
            placeholder='Color'
            type='text'
            name='color'
            formik={formik}
          />
          <div style={pagestyle.formik}>
            {formik.touched.color && formik.errors.color}
          </div>
        </label>
        <label className={styles.inputNo}>
          <CustomTextField
            label='Year'
            placeholder='Year'
            type='number'
            name='year'
            formik={formik}
          />
          <div style={pagestyle.formik}>
            {formik.touched.year && formik.errors.year}
          </div>
        </label>
        <label className={styles.inputNo}>
          <CustomTextField
            label='Manufacturer'
            placeholder='Manufacturer*'
            type='text'
            name='mnufacturer'
            formik={formik}
          />
          <div style={pagestyle.formik}>
            {formik.touched.mnufacturer && formik.errors.mnufacturer}
          </div>
        </label>
        <label className={styles.inputNo}>
          <CustomTextField
            label='Model'
            placeholder='Model'
            type='text'
            name='model'
            formik={formik}
          />
          <div style={pagestyle.formik}>
            {formik.touched.model && formik.errors.model}
          </div>
        </label>
        <label className={styles.inputNo}>
          <CustomTextField
            label='Insurance Expiry'
            placeholder=''
            type='date'
            name='expiryDate'
            formik={formik}
          />
          <div style={pagestyle.formik}>
            {formik.touched.expiryDate && formik.errors.expiryDate}
          </div>
        </label>
        <div className={styles.checkBox}>
          <span>Is Dump Truck?</span>
          <Checkbox
            required
            name='dumpTruck'
            sx={{
              color: 'balck',
              '&.Mui-checked': {
                color: 'rgb(237, 202, 51)',
              },
              transform: 'scale(0.8)'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default CommonTruckForm
