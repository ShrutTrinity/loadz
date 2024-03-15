import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import styles from './notification.module.scss';
import CustomTextField from '../../../../components/textfield/CustomeTextfield';
import { useFormik } from 'formik';

const Notifications = (props) => {

    const formik = useFormik({
        initialValues: {
            SelectCustomer: '',
            PurchaseOrder: '',
        }
    })
    
    return (
        <div className={styles.notificationContent}>
            <div>
                <div className={styles.heading}>
                    <div className={styles.object}>
                        <span>Notifications</span>
                    </div>
                    <div className={styles.s1}>
                        <Checkbox
                            sx={{
                                marginLeft: '-0.5rem',
                                color: 'black',
                                '&.Mui-checked': {
                                    color: 'rgb(237, 202, 51)',
                                },
                            }}
                        />
                        <div className={styles.label1}>Fulfillment Warning</div>
                    </div>
                    <div className={styles.s1}>
                        <Checkbox
                            sx={{
                                marginLeft: '-0.5rem',
                                color: 'black',
                                '&.Mui-checked': {
                                    color: 'rgb(237, 202, 51)',
                                },
                            }}
                        />
                        <div className={styles.label1}>Fulfillment Total</div>
                    </div>
                    <div className={styles.s1}>
                        <Checkbox
                            sx={{
                                marginLeft: '-0.5rem',
                                color: 'black',
                                '&.Mui-checked': {
                                    color: 'rgb(237, 202, 51)',
                                },
                            }}
                        />
                        <div className={styles.label1}>First Load of the Day</div>
                    </div>
                    <div className={styles.s1}>
                        <Checkbox
                            sx={{
                                marginLeft: '-0.5rem',
                                color: 'black',
                                '&.Mui-checked': {
                                    color: 'rgb(237, 202, 51)',
                                },
                            }}
                        />
                        <div className={styles.label1}>Delays</div>
                    </div>
                </div>
                <div className={styles.notificationContent}>
                    <div className={styles.nt1}>
                        <CustomTextField
                            name='name'
                            label="Name"
                            placeholder="Name"
                            type="text"
                            formik={formik}
                        />
                    </div>
                    <div className={styles.nt1}>
                        <CustomTextField
                            name='email'
                            label="Email"
                            placeholder="Email"
                            type="text"
                            formik={formik}
                        />
                    </div>
                    <div className={styles.nt1}>
                        <CustomTextField
                            name='phone'
                            label="Phone"
                            placeholder="Phone"
                            type="text"
                            formik={formik}
                        />
                    </div>
                    <div className={styles.buttons}>
                        <button
                        onClick={props.addNotificationList}
                        style={{
                            height: '40px',
                            width: '40px',
                            fontSize: '25px',
                            border: 'none',
                            borderRadius: ' 50%',
                            backgroundColor: 'rgb(237, 202, 51)',
                            boxShadow: ' 4px 4px 9px -6px #222rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px'
                        }}>+</button >
                        <button 
                        onClick={props.removeNotificationList}
                        style={{
                            height: '40px',
                            width: '40px',
                            fontSize: '25px',
                            border: 'none',
                            borderRadius: ' 50%',
                            boxShadow: ' 4px 4px 9px -6px #222rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px'
                        }}>-</button >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications
