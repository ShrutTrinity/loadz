import React, { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import { styled } from '@mui/material/styles';
import StepLabel from '@mui/material/StepLabel';

const steps = ['Create Customer', 'Create Owners And Document ', 'Funding Source'];

const CustomStepIcon = styled('div')(({ theme, active }) => ({
  width: 24,
  height: 24,
  borderRadius: '50%',
  backgroundColor: active ? 'rgb(237, 202, 51)' : theme.palette.grey[300],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  color: active ? 'black' : theme.palette.common.white,
}));

const Stepr = () => {

  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={activeStep > index}>
            <StepButton onClick={handleStep(index)}>
              <StepLabel
                StepIconComponent={() => (
                  <CustomStepIcon active={activeStep === index ? 1 : 0}>
                    {index + 1}
                  </CustomStepIcon>
                )}
              >
                <span style={{ fontSize: '20px' }}>{label}</span> {/* Set font size here */}
              </StepLabel>
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </>
  )
}

export default Stepr;