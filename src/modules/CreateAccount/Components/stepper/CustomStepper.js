import React, { useState, useEffect } from 'react'
import { Stepper, Step, StepLabel, StepConnector } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';
import clsx from 'clsx';
import styles from './styles/stepper.module.scss';
import CheckIcon from '@mui/icons-material/Check';

const useStyles = makeStyles(() => ({
    stepper: {
        backgroundColor: 'transparent'
    },
    step: {
        paddingLeft: '0px !important',
    },
    stepIcon: {
        width: '60px',
        height: '60px',
        backgroundColor: 'black',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '30px',
        fontWeight: '500',
    },
    activeStepIcon: {
        backgroundColor: 'rgb(237, 202, 51)',
        color: 'black',
        fontWeight: '500',
    },
}));

const CustomStepConnector = withStyles(() => ({
    alternativeLabel: {
        top: '30px !important',
        zIndex: -1,
        width: '100%'
    },
    line: {
        borderColor: 'black !important',
        borderTopWidth: '2px !important',
        borderRadius: 1
    },
}))(StepConnector);


function CustomStepIcon({ icon, active, completed }) {
    const classes = useStyles();
    return (
        <div
            className={clsx(classes.stepIcon, {
                [classes.activeStepIcon]: active || completed,
            })}
            style={{
                backgroundColor: completed ?
                    'black' :
                    active ? 'rgb(237, 202, 51)' :
                        'black'
            }}
        >
            {completed ? <CheckIcon
                sx={{
                    color: 'white',
                    height: '45px',
                    width: '45px'
                }} /> :
                icon}
        </div>

    );
}

const steps = [
    'Create Account',
    'Company Setup',
    'Setup Preferences',
    'Add Drivers',
    'Add Trucks & Trailers',
    'Add Web Users',
];

const CustomStepper = ({ currentstep }) => {

    const [displayStepper, setDisplayStepper] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 750) {
                setDisplayStepper(false);
            } else {
                setDisplayStepper(true);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        displayStepper && <Stepper
            activeStep={currentstep - 1}
            alternativeLabel
            connector={<CustomStepConnector />}
            className={styles.stepper}
        >
            {steps.map((label, index) => (
                <Step
                    key={label}
                    sx={{ paddingLeft: '0px' }}
                    completed={index < currentstep - 1}
                >
                    <StepLabel
                        StepIconComponent={CustomStepIcon}>
                        <span style={{
                            fontSize: "20px",
                            fontWeight: 'bolder',
                            padding: '0px',
                            letterSpacing: '0px'
                        }}>{label}</span>
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}

export default CustomStepper
