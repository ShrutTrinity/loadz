import React from 'react'
import styles from './Styles/NewLocation.module.scss'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CommonTextfield from '../../Textfield/CommonTextfield';


const NewLocation = (props) => {
    const handleClickInside = (event) => {
        event.stopPropagation();
    };

    return (
        <>
            <Grid container justifyContent="center" alignItems="center" onClick={props.ClosePopup}
                style={{ height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', position: 'fixed', zIndex: 21 }}>
                <Box
                    onClick={handleClickInside}
                    sx={{
                        maxWidth: '600px',
                        width: 'calc(100% - 64px)',
                        backgroundColor: 'white',
                        borderRadius: '15px',
                        height: '90%',
                       
                    }} 
                >
                <div className={styles.a}>
                    <h2 className={styles.addnew}>Add New Location(Origin / Quarry)</h2>
                    <div className={styles.div}>
                        <p className={styles.instruction}>Please fill out this form with the information requested to create an Origin / Quarry Pit. You may select what type using the Type input option and select if your location is Origin or Quarry Pit.
                        </p>
                        <CommonTextfield width='100' id='id' type='text' label='Name' required />
                        {props.children}
                        <CommonTextfield width='100' id='location' type='text' label='Search Address or Coordinates (latitude , longitude)' required />
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1930384.565609928!2d-116.57080702821465!3d46.92693759240249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710756796680!5m2!1sen!2sin" width="100%" height="550" style={{ "border": 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className={styles.btns}>
                        <button className={styles.btn}>Cancle</button>
                        <button className={styles.btn}>Update</button>
                    </div>
                    </div>
                </Box>
            </Grid >
        </>
    )
}

export default NewLocation
