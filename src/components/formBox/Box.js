import React, { useState } from 'react';
import styles from './styles/box.module.scss';
import help from '../../images/help.svg';
import LoginPage from '../../modules/signIn/LoginPage'

const Box = ({ children1, children2, children3 }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    };

    return (
        <>
            <div className={styles.frameRoot}>
                <div className={styles.subRoot}>
                    <div className={styles.mainContainer}>
                        <div className={styles.header}>
                            {children1}
                            <div className={styles.content2}>
                                <img src={help} className={styles.helpLogo} onClick={handleClick}  alt='helpLogo' />
                                {isOpen && <LoginPage videoLink={children2} />}
                            </div>
                        </div>
                    </div>
                    {children3}
                </div>
            </div>
        </>
    )
}

export default Box
