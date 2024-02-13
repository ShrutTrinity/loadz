import React from 'react';
import Logo from '../images/loadzlogo.png';
import styles from '../modules/signIn/styles/loginPage.module.scss';

const Card = ({children}) => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.card}>
                <div className={styles.cardDetail}>
                        <img className={styles.logo} src={Logo} alt='logo' />
                        {children}
                </div>
            </div>
        </div>
    )
}

export default Card
