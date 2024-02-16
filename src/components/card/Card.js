import React from 'react';
import Logo from '../../images/loadzlogo.png';
import styles from '../../modules/signIn/styles/loginPage.module.scss';

const Card = ({children,button}) => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.card}>
            {button}
                <div className={styles.cardDetail}>
                        <img className={styles.logo} src={Logo} alt='logo' />
                        {children}
                </div>
            </div>
        </div>
    )
}

export default Card
