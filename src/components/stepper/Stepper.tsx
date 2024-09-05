import { Box, Stepper, Step, StepLabel } from '@mui/material';

type CustomStepperProps = {
  steps: string[];
  activeStep: number;
};

type StepperProps = {
  activeStep: number;
};

export default function CustomStepper(props: CustomStepperProps) {
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

export function ProcessStepper(props: StepperProps) {
  return CustomStepper({
    steps: ['Subir archivo', 'Categorizar gastos', 'Asignar gastos'],
    activeStep: props.activeStep,
  });
}
