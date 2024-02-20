import styles from "./styles/tag.module.scss";

const index = ({tagTitle, symbol}) => {
    return (
        <label className={styles.labelContainer}>
            <div className={styles.smallContainer}>
                <span className={styles.labTitle}>{tagTitle}</span>
                <div className={styles.labField}>
                    <input type="number" step="number" name="commissionRate" placeholder="0.00" />
                    <span className={styles.symbolOfPercent}>{symbol}</span>
                </div>
            </div>
        </label>
    )
}

export default index
