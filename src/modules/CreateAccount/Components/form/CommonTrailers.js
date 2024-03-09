import CustomTextField from "../textfield/CustomeTextfield";
import styles from './styles/commonTrailers.module.scss';

const trolyType = ['Belly Dump', 'End Dump', 'Cement', 'Box']

const CommonTrailers = ({ formik }) => {
  return (
    <>
      <div className={styles.truckForm}>
        <div className={styles.detail}>
          <label className={styles.inputNo}>
            Trailer Type.<span className={styles.requiredAll}>*</span>
            <select
              className="form-select"
              style={{  borderColor: '#c4c4c4', padding: '9px 14px 13px 9px', fontSize: '15px', borderRadius: '5px' }}
              aria-label="Default select example"
              name="trailerType"
            >
              <option value="" style={{ fontSize: '13px', fontFamily: 'sans-serif' }}>Flatbed</option>
              {trolyType.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <label className={styles.inputNo}>
            <CustomTextField
              label='Trailer No.'
              placeholder='Trailer No.'
              type='number'
              name='trailerNo'
              formik={formik}
            />
            <div style={{ color: 'red', marginTop: '-20px', marginLeft: '0', fontSize: '12px' }}>
              {formik.touched.trailerNo && formik.errors.trailerNo}
            </div>
          </label>

        </div>
      </div>
    </>
  )
}

export default CommonTrailers
