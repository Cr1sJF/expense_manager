import { Box, Stepper, Step, StepLabel } from '@mui/material';

type StepperProps = {
  steps: string[];
  activeStep: number;
};

export default function CustomStepper(props: StepperProps) {
  return (
    <Box sx={{ width: '100%', my: 5 }}>
      <Stepper activeStep={props.activeStep} alternativeLabel>
        {props.steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
