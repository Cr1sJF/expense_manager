import {
  Box,
  Paper,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import Link from '../../components/ui/Link';
import CustomStepper from '../../components/stepper/Stepper';

const Step1 = () => {
  const processors = ['FALABELLA', 'SANTANDER', 'TENPO'];
  const selectedProcessor = null;

  return (
    <>
      <CustomStepper
        activeStep={0}
        steps={['Subir archivo', 'Categorizar gastos', 'Asignar gastos']}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <form noValidate autoComplete="off" style={{ width: '70%' }}>
          <Paper
            elevation={2}
            square={false}
            sx={{
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <FormControl sx={{ mt: 5, width: '70%' }}>
              <Button variant="outlined" component="label">
                Seleccione archivo
                <input type="file" hidden />
              </Button>
            </FormControl>

            <FormControl sx={{ mt: 5, width: '70%' }}>
              <InputLabel id="demo-simple-select-label">Procesador</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedProcessor}
                label="Age"
                onChange={() => {}}
              >
                {processors.map((processor) => (
                  <MenuItem value={processor}>{processor}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl
              sx={{
                my: 5,
                width: '70%',
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <Link to="/process/step2" text="Continuar" isNext />
              {/* <Button variant="contained" endIcon={<NavigateNext />} >
              Continuar
            </Button> */}
            </FormControl>
          </Paper>
        </form>
      </Box>
    </>
  );
};

export default Step1;
