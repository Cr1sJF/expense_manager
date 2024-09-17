import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Checkbox,
  ListItemText,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';

export default function Selectors(props: {
  includePayer: boolean;
  includeCategory: boolean;
  sx?: any;
}) {
  const [personName, setPersonName] = useState<string[]>([]);
  const [category, setCategory] = useState<string>('');
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const names = ['Cris', 'Nat', 'Luis', 'Flor', 'Nina'];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '25px',
        my: 2,
        ...props.sx,
      }}
    >
      {props.includeCategory && (
        <FormControl sx={{ width: '20%' }}>
          <InputLabel id="categorySelectLbl">Categoría</InputLabel>
          <Select
            labelId="categorySelectLbl"
            id="categorySelect"
            label="Categoría"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="1">Entretenimiento</MenuItem>
            <MenuItem value="2">Comida</MenuItem>
            <MenuItem value="3">Shopping</MenuItem>
          </Select>
        </FormControl>
      )}
      <FormControl sx={{ width: '20%' }}>
        <InputLabel>Grupo</InputLabel>
        <Select label="Grupo">
          <MenuItem value="1">Grupo 1</MenuItem>
          <MenuItem value="2">Grupo 2</MenuItem>
          <MenuItem value="3">Grupo 3</MenuItem>
        </Select>
      </FormControl>
      {props.includePayer && (
        <FormControl sx={{ width: '20%' }}>
          <InputLabel>Pagado por...</InputLabel>
          <Select label="Pagador">
            <MenuItem value="1">Persona 1</MenuItem>
            <MenuItem value="2">Persona 2</MenuItem>
            <MenuItem value="3">Persona 3</MenuItem>
          </Select>
        </FormControl>
      )}
      <FormControl sx={{ width: '20%' }}>
        <InputLabel>Dividio entre...</InputLabel>
        <Select
          multiple
          label="¿Entre que personas?"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          // MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
