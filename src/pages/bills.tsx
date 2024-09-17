import { Box, Button, Typography } from '@mui/material';
import Selectors from '../components/splitwise/selectors';
import BillsTable from '../components/bills/billsTable';

export default function Bills() {
  return (
    <>
      <Box>
        <Typography variant="h2" textAlign={'center'}>
          Dividir cuenta
        </Typography>

        <Selectors includeCategory={true} includePayer={true} />

        <BillsTable height={450} />

        <Box sx={{ my: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained">Asignar gastos ✅</Button>
        </Box>
      </Box>
    </>
  );
}
