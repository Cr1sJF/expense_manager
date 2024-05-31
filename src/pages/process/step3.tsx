import { Box, Paper, Tab, Button, Stack } from '@mui/material';
import { TabPanel, TabList, TabContext } from '@mui/lab';
import { useState } from 'react';
import RecordsTable from '../../components/recordsTable/RecordsTable';
import Link from '../../components/ui/Link';
const Step3 = () => {
  const [value, setValue] = useState('1');

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const data = [
    {
      date: '01/04/2024',
      amount: 196230,
      description: 'TDC Santander',
      categoryId: 4,
      divisible: false,
      id: 0,
    },
    {
      date: '01/04/2024',
      amount: 11930,
      description: 'Pedidos Ya',
      categoryId: 1,
      divisible: false,
      id: 1,
    },
    {
      date: '05/04/2024',
      amount: 1885,
      description: 'Whoosh (Scooter)',
      categoryId: 3,
      divisible: false,
      id: 2,
    },
    {
      date: '08/04/2024',
      amount: 10060,
      description: 'Pedidos Ya',
      categoryId: 1,
      divisible: false,
      id: 3,
    },
    {
      date: '08/04/2024',
      amount: 8190,
      description: 'Pedidos Ya',
      categoryId: 1,
      divisible: false,
      id: 4,
    },
    {
      date: '08/04/2024',
      amount: 1010,
      description: 'Whoosh (Scooter)',
      categoryId: 3,
      divisible: false,
      id: 5,
    },
    {
      date: '10/04/2024',
      amount: 4990,
      description: 'Unimarc',
      categoryId: 2,
      divisible: false,
      id: 6,
    },
    {
      date: '10/04/2024',
      amount: 3260,
      description: 'TAXI - DIDI',
      categoryId: 3,
      divisible: false,
      id: 7,
    },
    {
      date: '15/04/2024',
      amount: 48270,
      description: 'CASA IDEAS',
      categoryId: 10,
      divisible: false,
      id: 8,
    },
    {
      date: '15/04/2024',
      amount: 21140,
      description: 'DOREMI',
      categoryId: 10,
      divisible: false,
      id: 9,
    },
    {
      date: '15/04/2024',
      amount: 16335,
      description: 'QUERERTE',
      categoryId: 1,
      divisible: false,
      id: 10,
    },
    {
      date: '15/04/2024',
      amount: 12430,
      description: 'Pedidos Ya',
      categoryId: 1,
      divisible: false,
      id: 11,
    },
    {
      date: '15/04/2024',
      amount: 4578,
      description: 'CABIFY',
      categoryId: 3,
      divisible: false,
      id: 12,
    },
    {
      date: '15/04/2024',
      amount: 3995,
      description: 'CABIFY',
      categoryId: 3,
      divisible: false,
      id: 13,
    },
    {
      date: '15/04/2024',
      amount: 1670,
      description: 'Whoosh (Scooter)',
      categoryId: 3,
      divisible: false,
      id: 14,
    },
    {
      date: '17/04/2024',
      amount: 24730,
      description: 'Pedidos Ya',
      categoryId: 1,
      divisible: false,
      id: 15,
    },
    {
      date: '18/04/2024',
      amount: 6920,
      description: 'Spotify',
      categoryId: 5,
      divisible: false,
      id: 16,
    },
    {
      date: '19/04/2024',
      amount: 20530,
      description: 'Pedidos Ya',
      categoryId: 1,
      divisible: false,
      id: 17,
    },
    {
      date: '19/04/2024',
      amount: 4900,
      description: 'STARBUCKS',
      categoryId: 1,
      divisible: false,
      id: 18,
    },
    {
      date: '22/04/2024',
      amount: 108570,
      description: 'La panera Rosa',
      categoryId: 1,
      divisible: false,
      id: 19,
    },
    {
      date: '22/04/2024',
      amount: 45640,
      description: 'H&M',
      categoryId: 7,
      divisible: false,
      id: 20,
    },
    {
      date: '22/04/2024',
      amount: 25080,
      description: 'La panera Rosa',
      categoryId: 1,
      divisible: false,
      id: 21,
    },
    {
      date: '22/04/2024',
      amount: 16580,
      description: 'Paris',
      categoryId: 7,
      divisible: false,
      id: 22,
    },
    {
      date: '22/04/2024',
      amount: 14160,
      description: 'Pedidos Ya',
      categoryId: 1,
      divisible: false,
      id: 23,
    },
    {
      date: '23/04/2024',
      amount: 4742,
      description: 'CABIFY',
      categoryId: 3,
      divisible: false,
      id: 24,
    },
    {
      date: '24/04/2024',
      amount: 70960,
      description: 'H&M',
      categoryId: 7,
      divisible: false,
      id: 25,
    },
    {
      date: '26/04/2024',
      amount: 26790,
      description: 'Pedidos Ya',
      categoryId: 1,
      divisible: false,
      id: 26,
    },
    {
      date: '29/04/2024',
      amount: 122068,
      description: 'UNIMARC',
      categoryId: 1,
      divisible: false,
      id: 27,
    },
    {
      date: '29/04/2024',
      amount: 83431,
      description: 'Ikea',
      categoryId: 10,
      divisible: true,
      id: 28,
    },
    {
      date: '29/04/2024',
      amount: 72480,
      description: 'FALABELLA',
      categoryId: 7,
      divisible: false,
      id: 29,
    },
    {
      date: '29/04/2024',
      amount: 8190,
      description: 'Pedidos Ya',
      categoryId: 1,
      divisible: false,
      id: 30,
    },
    {
      date: '29/04/2024',
      amount: 3230,
      description: 'FREST',
      categoryId: 1,
      divisible: false,
      id: 31,
    },
    {
      date: '30/04/2024',
      amount: 126990,
      description: 'Nike',
      categoryId: 7,
      divisible: false,
      id: 32,
    },
  ];

  return (
    <Paper
      elevation={2}
      square={false}
      sx={{
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      <TabContext value={value}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <TabList onChange={handleChange} centered>
            <Tab value="1" label="Resumen" />
            <Tab value="2" label="Gastos por grupo" />
          </TabList>

          <TabPanel value="1" sx={{ width: '100%', height: '500px' }}>
            <RecordsTable
              data={data}
              readonly={false}
              showActions={true}
              showDivisible={false}
            />
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
        </Box>
      </TabContext>

      <Stack
        direction="row"
        spacing={2}
        sx={{
          marginTop: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Box>
          <Link to="/process/step2" text="Atras" isPrev={true} />
        </Box>

        <Box>
          <Button variant="outlined" sx={{ marginRight: '15px' }}>
            Asignar gastos a Splitwise
          </Button>
          <Button variant="contained">Descargar CSV</Button>
        </Box>
        {/* <Button variant="outlined" color="error">
          Error
        </Button> */}
      </Stack>
    </Paper>
  );
};

export default Step3;
