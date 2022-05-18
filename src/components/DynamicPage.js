import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const DynamicPage = ({ steps }) => {
  const [Title, setTitle] = useState('Test');
  const [activeStep, setActiveStep] = React.useState(0);

  useEffect(() => {}, []);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {/* {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })} */}
          {steps.map(step => {
            return (
              <Step>
                <StepLabel>{step.title}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {steps.map((step, index) => {
          if (activeStep == index) {
            return (
              <>
                <p>{step.title}</p>
                {step.properties.map(property => {
                  property.map(field => {
                    console.log('Field', field.type);
                    if (field.type === 'text') {
                      return <p>Hello</p>;
                    } else {
                      return <p>{field.type}</p>;
                    }
                  });
                })}
              </>
            );
          }
        })}
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        {activeStep !== steps.length - 1 && (
          <>
            <Button onClick={handleNext}>Next</Button>
          </>
        )}
        {activeStep == steps.length - 1 && (
          <>
            <Button>Submit</Button>
          </>
        )}
      </Box>
    </>
  );
};

export default DynamicPage;
