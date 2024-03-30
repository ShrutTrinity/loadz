import React from 'react';
import styles from './Styles/customerbalance.module.scss';
import PrintIcon from '@images/PrintIcon.svg';
import { FormControlLabel, Switch } from '@mui/material';
import BalanceTable from '../BalanceTable/BalanceTable';
import loadzlogo from '@images/loadzlogo.png'

const CustomerBalance = () => {
    var date = new Date();
    var Fulldate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    const handlePrint = () => {
        const printContent = document.getElementById('print').innerHTML;
        const originalContent = document.body.innerHTML;
        document.body.innerHTML = printContent;
        window.print();
        document.body.innerHTML = originalContent;
    };
    return (
        <>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.customerDetails} id='print'>
                        <div className={styles.iconbg} onClick={handlePrint}>
                            <img src={PrintIcon} alt='print' className={styles.printicon} />
                        </div>
                        <FormControlLabel control={<Switch sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': {
                                color: 'rgb(237, 202, 51)',
                            },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                backgroundColor: 'rgb(237, 202, 51)',
                            },
                        }} />} label="Expand Balance Sheet" />
                    </div>
                    <div className={styles.detail}>
                        <h2 className={styles.heading}>CUSTOMER BALANCE & AGING SUMMARY 2 </h2>
                        <div className={styles.date}>
                            As of : {Fulldate}
                        </div>
                        <BalanceTable />
                        <div className={styles.flex}>
                            <div className={styles.date2} >
                                <b> As of </b> : {Fulldate}
                            </div>
                            <div className={styles.rightFooter}>
                                    <h3 className={styles.text}>Powered by </h3>
                                    <img src={loadzlogo} className={styles.LoadzLogo} alt='logo'/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};


export default CustomerBalance;
