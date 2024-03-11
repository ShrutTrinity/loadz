import React from 'react';
import styles from './styles/box.module.scss';
import help from '@images/help.svg';


const Box = ({ children1, children3 ,handleClick}) => {

    return (
        <>
            <div className={styles.frameRoot}>
                <div className={styles.subRoot}>
                    <div className={styles.mainContainer}>
                        <div className={styles.header}>
                            {children1}
                            <div className={styles.content2}>
                                <img src={help} className={styles.helpLogo} onClick={handleClick} alt='helpLogo' />
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
