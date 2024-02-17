import React from 'react'
import styles from './styles/card.module.scss';
import  {Link} from 'react-router-dom'
const Card = (props) => {
  return (
    <div className={styles.cardcontainer}>
      <div className={styles.card}>
        <h2 className={styles.title}>{props.title}</h2>
        <div className={styles.innerBox}>
          <div className={styles.boxTitle}>EMPLOYEE - OWNER DRIVER</div>
          <p className={styles.price}>{props.price}</p>
        </div>
        <div className={styles.keyFeatures}>
         <p className={styles.bulletPoint}>Key Features:</p>
          <li> <span className={styles.bulletPoint}>{props.bulletPoint}</span></li>
        </div>
        <Link to='/subscription/company/0' className={styles.btntext}>
        <button className={styles.startFreeButton}>Start for Free</button>
        </Link>
        <p className={styles.trialText}>30 day free trial to start</p>
      </div>
    </div>    
  )
}

export default Card
