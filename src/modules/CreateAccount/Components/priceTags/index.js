import styles from "./styles/tag.module.scss";

const index = ({ tagTitle, symbol, name, formik }) => {
  return (
    <label className={styles.labelContainer}>
      <div className={styles.smallContainer}>
        <span className={styles.labTitle}>{tagTitle}</span>
        <div className={styles.error}>
          <div className={styles.labField}>
            <input
              type="number"
              step="number"
              name={name}
              placeholder="0.00"
              {...formik.getFieldProps(name)} XX
            />
            <span className={styles.symbolOfPercent}>{symbol}</span>
          </div>
          <div
            style={{
              color: 'red',
              marginTop: '2px',
              marginLeft: '15px',
              fontSize: '12px'
            }}>
            {formik.touched[name] && formik.errors[name]}
          </div>
        </div>
      </div>
    </label>
  )
}

export default index
