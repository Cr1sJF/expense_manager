import {
  DataGrid,
  GridCallbackDetails,
  GridColDef,
  GridRenderCellParams,
  GridRowId,
  GridRowSelectionModel,
  GridValidRowModel,
  useGridApiContext,
} from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Modal } from '@mui/material';
import { Delete, Rule as RuleIcon, Wallet } from '@mui/icons-material';
import CustomToolbar from './Toolbar';
import Rule from '../rule/rule';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type AllowedActions = 'DELETE' | 'CREATE_RULE' | 'SPLITWISE';

export type RecordsTable = {
  data: any;
  readonly: boolean;
  showActions: boolean | AllowedActions[];
  showDivisible: boolean;
};

const RecordsTable = (props: RecordsTable) => {
  const [categories, setCategories] = useState([]);
  const [selectedRows, setSelectedRows] = useState<
    Map<GridRowId, GridValidRowModel>
  >(new Map());

  const [rows, setRows] = useState(props.data);

  const [open, setOpen] = useState(false);

  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    try {
      const loadCategories = async () => {
        try {
          const response = await axios.get('http://localhost:3001/categories');
          if (response.data.success) {
            setCategories(response.data.data);
          }
        } catch (error) {}
      };

      loadCategories();
    } catch (error) {
      console.log('ERROR', error);
    }
  }, []);

  const columns: GridColDef[] = [
    {
      field: 'date',
      headerName: 'Fecha',
      type: 'string',
      sortable: true,
    },
    {
      field: 'categoryId',
      headerName: 'Categoria',
      type: 'singleSelect',
      editable: true,
      valueOptions: categories,
      getOptionValue: (value: any) => value.id,
      getOptionLabel: (value: any) => value.name,
    },
    {
      field: 'description',
      headerName: 'Descripción',
      editable: true,
      sortable: true,
      width: 600,
    },
    {
      field: 'amount',
      headerName: 'Monto',
      sortable: false,
      filterable: false,
      valueFormatter: (value) => currencyFormatter.format(value),
    },
  ];

  if (props.showDivisible) {
    columns.push({
      field: 'divisible',
      headerName: 'Divisible',
      type: 'boolean',
      sortable: false,
      editable: true,
    });
  }

  if (props.showActions) {
    columns.push({
      field: 'action',
      headerName: 'Acciones',
      width: 200,
      align: 'center',
      headerAlign: 'center',
      sortable: false,
      filterable: false,
      renderCell: (params: GridRenderCellParams<any, any>) => {
        const apiRef = useGridApiContext();
        const deleteRow = (e: any) => {
          e.stopPropagation(); // don't select this row after clicking
          apiRef.current.updateRows([{ id: params.row.id, _action: 'delete' }]);
        };

        const createRule = (e: any) => {
          e.stopPropagation(); // don't select this row after clicking

          // return alert(`CREATE RULE \n ${JSON.stringify(params.row, null, 4)}`);

          setOpen(true);
        };

        let actions: AllowedActions[] = [];
        if (props.showActions === true) {
          actions.push('DELETE');
          actions.push('CREATE_RULE');
          actions.push('SPLITWISE');
        } else if (Array.isArray(props.showActions)) {
          actions = props.showActions;
        }

        return (
          <>
            {actions.includes('DELETE') && (
              <Button onClick={deleteRow} title="Eliminar registro">
                {' '}
                <Delete sx={{ color: '#e74c3c' }} />{' '}
              </Button>
            )}
            {/* <Button onClick={deleteRow} title="Eliminar registro">
              <Delete />
            </Button> */}

            {actions.includes('CREATE_RULE') && (
              <Button onClick={createRule} title="Crear regla">
                <RuleIcon />
              </Button>
            )}

            {actions.includes('SPLITWISE') && (
              <Button onClick={() => {}} title="Asignar a Splitwise">
                <Wallet />
              </Button>
            )}
          </>
        );
      },
    });
  }

  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection={!props.readonly}
        disableRowSelectionOnClick
        onRowSelectionModelChange={(
          _: GridRowSelectionModel,
          details: GridCallbackDetails
        ) => {
          setSelectedRows(details.api.getSelectedRows());
        }}
        slots={{
          toolbar: () =>
            CustomToolbar({
              rows,
              setRows,
              selectedRows,
              toggleDivisible: props.showDivisible,
            }),
        }}
      />
      {/* 
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          boxShadow: 24,
          p: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Rule />
      </Modal> */}

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          boxShadow: 24,
          p: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Nueva regla
          </Typography>
          <Rule />
        </Box>
      </Modal>
    </>
  );
};

export default RecordsTable;
