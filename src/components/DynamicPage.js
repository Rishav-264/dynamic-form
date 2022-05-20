import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  ParentContainer,
  FormContainer,
  TextInput,
  Label,
  Title,
  Select,
  PhoneInputContainer,
  CountryCodeInput,
  PhoneNumberInput,
} from '../styles/form-styles';

const DynamicPage = ({ steps }) => {
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
      <ParentContainer>
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
        <FormContainer>
          {steps.map((step, index) => {
            if (activeStep == index) {
              return (
                <>
                  <Title>{step.title}</Title>
                  {console.log('Properties', step.properties)}
                  {step.properties.map(property => {
                    return property.map(field => {
                      if (
                        field.type === 'text' ||
                        field.type === 'account_number'
                      ) {
                        return (
                          <>
                            <Label for={field.id}>{field.label}</Label>
                            <TextInput id={field.id} type="text" />
                          </>
                        );
                      }
                      if (field.type === 'nationality') {
                        return (
                          <>
                            <Label for={field.id}>{field.label}</Label>
                            <Select id={field.id}>
                              <option value="India">India</option>
                              <option value="UK">United Kingdom</option>
                            </Select>
                          </>
                        );
                      }
                      if (field.type === 'date') {
                        return (
                          <>
                            <Label for={field.id}>{field.label}</Label>
                            <TextInput id={field.id} type="date" />
                          </>
                        );
                      }
                      if (field.type === 'contact') {
                        return (
                          <>
                            <Label for={field.id}>{field.label}</Label>
                            <PhoneInputContainer>
                              <CountryCodeInput>
                                <option value="91">India(+91)</option>
                              </CountryCodeInput>
                              <PhoneNumberInput />
                            </PhoneInputContainer>
                          </>
                        );
                      }
                    });
                  })}
                </>
              );
            }
          })}
        </FormContainer>
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
      </ParentContainer>
    </>
  );
};

export default DynamicPage;
