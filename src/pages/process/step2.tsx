import { Box, Paper, Tab, Link as MUILink } from '@mui/material';
import { Link } from 'react-router-dom';
import { TabPanel, TabList, TabContext } from '@mui/lab';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';
import * as StringMask from 'string-mask';
import { NavigateNext } from '@mui/icons-material';
const step2 = () => {
  const [value, setValue] = useState('1');

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  var mask = new StringMask.default('#'); //optionsObject is optional

  const columns: GridColDef[] = [
    {
      field: 'categoryId',
      headerName: 'Categoria',
      type: 'singleSelect',
      editable: true,
      valueOptions: [
        { value: 0, label: 'Shopping' },
        { value: 2, label: 'Subscripciones' },
      ],
    },
    {
      field: 'description',
      headerName: 'Descripción',
      editable: true,
      sortable: true,
      resizable: true,
      width: 650,
    },
    {
      field: 'date',
      headerName: 'Fecha',
      type: 'string',
      sortable: true,
    },
    {
      field: 'amount',
      headerName: 'Monto',
      //   description: 'This column has a value getter and is not sortable.',
      sortable: false,
      //   valueGetter: (value, row) =>
      //     `${row.firstName || ''} ${row.lastName || ''}`,
    },
    {
      field: 'action',
      headerName: 'Acciones',
      sortable: false,
    },
  ];

  const data = [
    {
      date: '01/04/2024',
      amount: '$ ' + mask.apply(850000),
      description: 'Transf. Internet a otro Bancos',
      categoryId: 0,
      divisible: false,
      id: 0,
    },
    {
      date: '01/04/2024',
      amount: '$ ' + mask.apply(250000),
      description: 'Transf. Internet a otro Bancos',
      categoryId: 0,
      divisible: false,
      id: 1,
    },
    {
      date: '01/04/2024',
      amount: '$ ' + mask.apply(6700),
      description: 'Compra Internacional APPLE.COM/BILL',
      categoryId: 0,
      divisible: false,
      id: 2,
    },
    {
      date: '01/04/2024',
      amount: '$ ' + mask.apply(5490),
      description: 'Compra Internacional APPLE.COM/BILL',
      categoryId: 0,
      divisible: false,
      id: 3,
    },
    {
      date: '01/04/2024',
      amount: '$ ' + mask.apply(2138),
      description: 'Compra Nacional NP PAYU',
      categoryId: 0,
      divisible: false,
      id: 4,
    },
    {
      date: '02/04/2024',
      amount: '$ ' + mask.apply(10995),
      description: 'Compra Nacional NP FIRMAVIRTUAL',
      categoryId: 0,
      divisible: false,
      id: 5,
    },
    {
      date: '03/04/2024',
      amount: '$ ' + mask.apply(25290),
      description: 'Compra Nacional NP PAYU',
      categoryId: 0,
      divisible: false,
      id: 6,
    },
    {
      date: '04/04/2024',
      amount: '$ ' + mask.apply(2493),
      description: 'Compra Nacional NP PAYU',
      categoryId: 0,
      divisible: false,
      id: 7,
    },
    {
      date: '05/04/2024',
      amount: '$ ' + mask.apply(50000),
      description: 'Transf. Internet a otro Bancos',
      categoryId: 0,
      divisible: false,
      id: 8,
    },
    {
      date: '08/04/2024',
      amount: '$ ' + mask.apply(20669),
      description: 'Compra Nacional NP PAYU',
      categoryId: 0,
      divisible: false,
      id: 9,
    },
    {
      date: '08/04/2024',
      amount: '$ ' + mask.apply(18700),
      description: 'Compra Nacional MERPAGO*RINCONSL',
      categoryId: 0,
      divisible: false,
      id: 10,
    },
    {
      date: '08/04/2024',
      amount: '$ ' + mask.apply(7590),
      description: 'Compra Nacional CRUZVERDE CV 1112',
      categoryId: 0,
      divisible: false,
      id: 11,
    },
    {
      date: '08/04/2024',
      amount: '$ ' + mask.apply(1893),
      description: 'Compra Nacional NP PAYU',
      categoryId: 0,
      divisible: false,
      id: 12,
    },
    {
      date: '09/04/2024',
      amount: '$ ' + mask.apply(29105),
      description: 'Compra Nacional NP PAYU',
      categoryId: 0,
      divisible: false,
      id: 13,
    },
    {
      date: '10/04/2024',
      amount: '$ ' + mask.apply(89819),
      description: 'Compra Nacional MERPAGO*6PRODUCTOS',
      categoryId: 0,
      divisible: false,
      id: 14,
    },
    {
      date: '10/04/2024',
      amount: '$ ' + mask.apply(6880),
      description: 'Compra Nacional MERPAGO*COSASNUESTRAS',
      categoryId: 0,
      divisible: false,
      id: 15,
    },
    {
      date: '11/04/2024',
      amount: '$ ' + mask.apply(5790),
      description: 'Compra Internacional APPLE.COM/BILL',
      categoryId: 0,
      divisible: false,
      id: 16,
    },
    {
      date: '12/04/2024',
      amount: '$ ' + mask.apply(4926),
      description: 'Compra Internacional NOTION LABS, INC.',
      categoryId: 0,
      divisible: false,
      id: 17,
    },
    {
      date: '15/04/2024',
      amount: '$ ' + mask.apply(7190),
      description: 'Compra Internacional APPLE.COM/BILL',
      categoryId: 0,
      divisible: false,
      id: 18,
    },
    {
      date: '16/04/2024',
      amount: '$ ' + mask.apply(35716),
      description: 'Compra Nacional MERPAGO*4PRODUCTOS',
      categoryId: 0,
      divisible: false,
      id: 19,
    },
    {
      date: '18/04/2024',
      amount: '$ ' + mask.apply(2900),
      description: 'TELEFONICA',
      categoryId: 0,
      divisible: false,
      id: 20,
    },
    {
      date: '19/04/2024',
      amount: '$ ' + mask.apply(2198),
      description: 'Compra Nacional NP PAYU',
      categoryId: 0,
      divisible: false,
      id: 21,
    },
    {
      date: '22/04/2024',
      amount: '$ ' + mask.apply(50000),
      description: 'Transf. Internet a otro Bancos',
      categoryId: 0,
      divisible: false,
      id: 22,
    },
    {
      date: '22/04/2024',
      amount: '$ ' + mask.apply(10989),
      description: 'Transf. Internet a otro Bancos',
      categoryId: 0,
      divisible: false,
      id: 23,
    },
    {
      date: '22/04/2024',
      amount: '$ ' + mask.apply(4938),
      description: 'APPLE.COM/BILL',
      categoryId: 0,
      divisible: false,
      id: 24,
    },
    {
      date: '22/04/2024',
      amount: '$ ' + mask.apply(4290),
      description: 'Compra Nacional COMERCIAL AL-GO LTDA.',
      categoryId: 0,
      divisible: false,
      id: 25,
    },
    {
      date: '22/04/2024',
      amount: '$ ' + mask.apply(3897),
      description: 'Compra Nacional NP PAYU',
      categoryId: 0,
      divisible: false,
      id: 26,
    },
    {
      date: '24/04/2024',
      amount: '$ ' + mask.apply(4888),
      description: 'Compra Internacional A MEDIUM CORPORATION',
      categoryId: 0,
      divisible: false,
      id: 27,
    },
    {
      date: '24/04/2024',
      amount: '$ ' + mask.apply(2598),
      description: 'Compra Nacional NP PAYU',
      categoryId: 0,
      divisible: false,
      id: 28,
    },
    {
      date: '24/04/2024',
      amount: '$ ' + mask.apply(2596),
      description: 'Compra Nacional NP PAYU',
      categoryId: 0,
      divisible: false,
      id: 29,
    },
    {
      date: '29/04/2024',
      amount: '$ ' + mask.apply(81329),
      description: 'Compra Nacional MERPAGO*7PRODUCTOS',
      categoryId: 0,
      divisible: false,
      id: 30,
    },
    {
      date: '29/04/2024',
      amount: '$ ' + mask.apply(7090),
      description: 'Compra Nacional GOOGLE PLAY YOUTUBE CL GO',
      categoryId: 0,
      divisible: false,
      id: 31,
    },
    {
      date: '29/04/2024',
      amount: '$ ' + mask.apply(5390),
      description: 'Compra Nacional NP PAYU',
      categoryId: 0,
      divisible: false,
      id: 32,
    },
    {
      date: '29/04/2024',
      amount: '$ ' + mask.apply(4291),
      description: 'Compra Nacional NP PAYU',
      categoryId: 0,
      divisible: false,
      id: 33,
    },
    {
      date: '29/04/2024',
      amount: '$ ' + mask.apply(3795),
      description: 'Compra Nacional NP PAYU',
      categoryId: 0,
      divisible: false,
      id: 34,
    },
    {
      date: '29/04/2024',
      amount: '$ ' + mask.apply(783),
      description: 'APPLE.COM/BILL',
      categoryId: 0,
      divisible: false,
      id: 35,
    },
    {
      date: '30/04/2024',
      amount: '$ ' + mask.apply(711079),
      description: 'Transf. Internet a otro Bancos',
      categoryId: 0,
      divisible: false,
      id: 36,
    },
    {
      date: '30/04/2024',
      amount: '$ ' + mask.apply(388921),
      description: 'Transf. Internet a otro Bancos',
      categoryId: 0,
      divisible: false,
      id: 37,
    },
    {
      date: '30/04/2024',
      amount: '$ ' + mask.apply(50000),
      description: 'Transf. Internet a otro Bancos',
      categoryId: 0,
      divisible: false,
      id: 38,
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
            <Tab value="1" label="Sin categorizar" />
            <Tab value="2" label="Categorizado" />
          </TabList>

          <TabPanel value="1" sx={{ width: '100%' }}>
            <DataGrid rows={data} columns={columns} checkboxSelection />
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
        </Box>
      </TabContext>

      <Link to="/process/step3" style={{ textDecoration: 'none' }}>
        <MUILink
          sx={{
            color: 'white',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'right',
          }}
        >
          Continuar <NavigateNext />
        </MUILink>
      </Link>
    </Paper>
  );
};

export default step2;
