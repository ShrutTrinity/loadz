import React from 'react';
import styles from './styles/deleteAlert.module.scss';
import Button from '@mui/material/Button';

const DeleteAlert = (props) => {
    return (
        <div className={styles.mainBody}>
            <div className={styles.container}>
                <p className={styles.alertHeading}>Are you sure you want to delete this item?</p>
                <div className={styles.functionButtons}>
                    <Button sx={{
                        backgroundColor: 'rgb(241, 194, 50)',
                        color: 'black',
                        padding: '6px 8px',
                        borderRadius: '18px',
                        fontSize:'13px',
                        ":hover":{
                            backgroundColor:'rgb(241, 194, 50)'
                        }
                    }}
                        onClick={() => props.handleDeleteData(props.index)}
                        variant="contained">Confirm</Button>
                    <Button  sx={{
                        backgroundColor: 'rgb(255, 0, 0)',
                        color: 'white',
                        padding: '6px 8px',
                        marginLeft:'8px',
                        borderRadius: '18px',
                        fontSize:'13px',
                        ":hover":{
                            backgroundColor:'rgb(255, 0, 0)'
                        }
                    }}
                    onClick={props.closePopUp}
                    variant="contained">Cancel</Button>
                </div>
            </div>
        </div>
    )
}

export default DeleteAlert
