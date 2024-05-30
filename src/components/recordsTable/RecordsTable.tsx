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
import { Delete, Rule as RuleIcon } from '@mui/icons-material';
import CustomToolbar from './Toolbar';
import Rule from '../rule/rule';

export type RecordsTable = {
  data: any;
  readonly: boolean;
  showActions: boolean;
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
      valueFormatter: (value) => currencyFormatter.format(value),
    },
    {
      field: 'action',
      headerName: 'Acciones',
      width: 200,
      align: 'center',
      headerAlign: 'center',
      sortable: false,
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

        return (
          <>
            <Button onClick={deleteRow} title="Eliminar registro">
              <Delete />
            </Button>
            <Button onClick={createRule} title="Crear regla">
              <RuleIcon />
            </Button>
          </>
        );
      },
    },
  ];

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
          toolbar: () => CustomToolbar({ rows, setRows, selectedRows }),
        }}
      />

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
      </Modal>
    </>
  );
};

export default RecordsTable;
