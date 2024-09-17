import { Box, Button, Paper, TextField } from '@mui/material';
import { useState } from 'react';
import DateSelector from '../ui/DatePicker';
import Selectors from './selectors';

const Splitwise = () => {
  const [date, setDate] = useState(new Date());

  console.log('DATE', date);

  return (
    <>
      <Paper sx={{ padding: 5, m: 5 }}>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', gap: '25px' }}
        >
          <TextField
            sx={{ width: '34%' }}
            id="expenseName"
            label="Descripcion"
            variant="outlined"
          />

          <DateSelector label={'Fecha'} onChange={setDate} />

          <TextField
            sx={{ width: '34%' }}
            id="expenseAmount"
            label="Monto"
            variant="outlined"
            type="number"
          ></TextField>
        </Box>

        <Selectors
          includeCategory={true}
          includePayer={true}
        />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button sx={{ width: '10%' }} variant="outlined">
            CANCELAR
          </Button>
          <Button sx={{ width: '85%' }} variant="contained">
            ACEPTAR
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default Splitwise;
