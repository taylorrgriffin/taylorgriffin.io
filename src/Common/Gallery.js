import React, { useState } from 'react';

import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import { Typography, Button } from '@material-ui/core';
import { autoPlay } from 'react-swipeable-views-utils';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Gallery = ({ imageSteps }) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = imageSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  const handleStepChange = (step) => {
    setActiveStep(step);
  }

  return (
    <div style={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper square elevation={0} style={{ display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: 10,
        backgroundColor: 'black' }}>
        <Typography>{imageSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents>
          {
            imageSteps.map((step, idx) => (
              <div key={step.label}>
                {Math.abs(activeStep - idx) <= 2 ? (
                  <img src={step.src} alt={step.label} style={{ 
                    display: 'block',
                    maxWidth: 400,
                    overflow: 'hidden',
                    width: '100%', }} />
                ) : null}
              </div>
            ))
          }
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
              Back
            </Button>
          } 
          />
    </div>
  );
}

export default Gallery;