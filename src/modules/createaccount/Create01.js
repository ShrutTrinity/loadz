import React from 'react';
import { Stepper, Step, StepLabel, StepConnector } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';
import clsx from 'clsx';
import styles from './styles/create01.module.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  stepper: {
    backgroundColor: 'transparent',
    padding: 0,
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
  },
}));

const CustomStepConnector = withStyles((theme) => ({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      borderColor: theme.palette.primary.main,
    },
  },
  completed: {
    '& $line': {
      borderColor: theme.palette.primary.main,
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}))(StepConnector);

function CustomStepIcon({ icon, active }) {
  const classes = useStyles();
  return (
    <div
      className={clsx(classes.stepIcon, {
        [classes.activeStepIcon]: active,
      })}
    >
      {icon}
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

function CustomStepper() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.stepper}>
        <Stepper
          activeStep={0}
          alternativeLabel
          connector={<CustomStepConnector />}
          className={styles.stepper}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                StepIconComponent={CustomStepIcon}
                sx={{ fontSize: '24px' }} // Set font size to 24px
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
}

export default CustomStepper;
