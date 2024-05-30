import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';
import {
  GridRowId,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridValidRowModel,
} from '@mui/x-data-grid';

export type ToolbarProps = {
  selectedRows: Map<GridRowId, GridValidRowModel>;
  setRows: React.Dispatch<React.SetStateAction<any[]>>;
  rows: any[];
};

const CustomToolbar = (props: ToolbarProps) => {
  return (
    <GridToolbarContainer>
      {/* <GridToolbarColumnsButton
          slotProps={{ tooltip: { title: 'Columnas' } }}
        /> */}
      <GridToolbarFilterButton />
      {/* <GridToolbarDensitySelector
          slotProps={{ tooltip: { title: 'Cambiar densidad' } }}
        /> */}
      <Button
        disabled={!props.selectedRows.size}
        onClick={() => {
          const newRows = props.rows.filter(
            (row: any) => !props.selectedRows.has(row.id)
          );
          props.setRows(newRows);
        }}
      >
        <Delete /> Eliminar seleccionados
      </Button>
      {/* <Box sx={{ flexGrow: 1 }} />
        <GridToolbarExport
          slotProps={{
            tooltip: { title: 'Exportar data' },
            button: { variant: 'outlined' },
          }}
        /> */}
    </GridToolbarContainer>
  );
};

export default CustomToolbar;
