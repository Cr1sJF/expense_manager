import { Remove, Add } from '@mui/icons-material';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  IconButton,
  Box,
} from '@mui/material';

export type CoditionProps = {
  field: string;
  op: string;
  value: string;
  isLast?: boolean;
};
const Condition = (props: CoditionProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Campo</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Campo"
          value={props.field}
        >
          {['Descripcion', 'Monto', 'Fecha'].map((field) => (
            <MenuItem key={field} value={field}>
              {field}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Operador</InputLabel>
        <Select
          value={props.op}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Op"
        >
          {[
            { id: 'eq', name: 'Es igual a' },
            { id: 'co', name: 'Contiene' },
            { id: 'neq', name: 'No es igual a' },
          ].map((op) => (
            <MenuItem key={op.id} value={op.id}>
              {op.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField id="value" label="Valor" variant="standard" sx={{ m: 1 }} />

      <IconButton>
        <Remove />
      </IconButton>

      {props.isLast && (
        <IconButton>
          <Add />
        </IconButton>
      )}
    </Box>
  );
};

export default Condition;
