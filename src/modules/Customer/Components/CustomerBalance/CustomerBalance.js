import React, { useState } from 'react';
import styles from './Styles/customerbalance.module.scss';
import PrintIcon from '@images/PrintIcon.svg';
import { FormControlLabel, Switch } from '@mui/material';
import BalanceTable from '../BalanceTable/BalanceTable';
import loadzlogo from '@images/loadzlogo.png'
import CloseIcon from '@mui/icons-material/Close';

const CustomerBalance = ({ BalancePopupRendered }) => {
    var date = new Date();
    var Fulldate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

    const [switchOn, setSwitchOn] = useState(false);

    const handleSwitchChange = () => {
        setSwitchOn(!switchOn);
    };

    const handlePrint = () => {
        const printContent = document.getElementById('print').innerHTML;
        const originalContent = document.body.innerHTML;
        document.body.innerHTML = printContent;
        window.print();
        document.body.innerHTML = originalContent;
    };

    const handleClickInside = (event) => {
        event.stopPropagation();
    };
    return (
        <>
            <div className={styles.container} onClick={BalancePopupRendered}>
                <div className={styles.box} onClick={handleClickInside}>
                    <div className={styles.flex}>
                        <div className={styles.customerDetails} >
                            <div className={styles.iconbg} onClick={handlePrint}>
                                <img src={PrintIcon} alt='print' className={styles.printicon} />
                            </div>
                            <FormControlLabel control={<Switch checked={switchOn} onChange={handleSwitchChange} sx={{
                                '& .MuiSwitch-switchBase.Mui-checked': {
                                    color: 'rgb(237, 202, 51)',
                                },
                                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                    backgroundColor: 'rgb(237, 202, 51)',
                                },
                            }} />} label="Expand Balance Sheet" />
                        </div>
                        {!switchOn && <CloseIcon sx={{ margin: '10px', cursor: 'pointer' }} onClick={BalancePopupRendered} />}
                    </div>
                    <div className={styles.detail} id='print'>
                        <h2 className={styles.heading}>  {switchOn ? 'CUSTOMER BALANCE & AGING SUMMARY ' : 'CUSTOMER BALANCE & AGING SUMMARY 2'}</h2>
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
                                <img src={loadzlogo} className={styles.LoadzLogo} alt='logo' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};


export default CustomerBalance;
