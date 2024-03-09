
import DisableTextField from "../../../../components/textfield/DisableTextfield";
import styles from './styles/commonTrailers.module.scss';

const trolyType = ['Belly Dump', 'End Dump', 'Cement', 'Box']

const Disabletrailer = () => {
  return (
    <>
      <div className={styles.truckForm}>
        <div className={styles.detail}>
          <label className={styles.inputNo}>
            Trailer Type.<span className={styles.requiredAll}>*</span>
            <select
            disabled
              className="form-select"
              style={{  cursor:'no-drop', padding: '9px 14px 13px 9px', color:'#b3b3b3', backgroundColor:'#d1d1d1', fontSize: '15px', borderRadius: '5px' }}
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
            <DisableTextField
              label='Trailer No.'
              placeholder='Trailer No.'
              type='number'
              name='trailerNo'
            />
            
          </label>

        </div>
      </div>
    </>
  )
}

export default Disabletrailer
