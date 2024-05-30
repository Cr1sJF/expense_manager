import {
  Box,
  Button,
  Checkbox,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Condition from './condition';

const Rule = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState<any[]>([]);
  const [conditions, _] = useState<any[]>([
    {
      field: '',
      operator: '',
      value: '',
    },
    {
      field: '',
      operator: '',
      value: '',
    },
    {
      field: '',
      operator: '',
      value: '',
    },
    {
      field: '',
      operator: '',
      value: '',
    },
  ]);
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

  return (
    <Paper
      sx={{
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        maxWidth: '90vw', // Opcional: para limitar el ancho máximo del modal
        maxHeight: '90vh', // Opcional: para limitar la altura máxima del modal
        overflowY: 'auto', // Permite desplazamiento si el contenido es muy alto
      }}
    >
      <Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            my: 2,
          }}
        >
          <TextField
            id="rule"
            label="Nombre"
            variant="standard"
            sx={{ m: 1 }}
          />

          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Categoria
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              label="Age"
            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControlLabel
            value="divisible"
            control={<Checkbox />}
            label="Divisible"
            labelPlacement="start"
          />
        </Box>

        <Box sx={{ my: 2 }}>
          <Divider>
            <Chip label="Condiciones" size="medium" />
          </Divider>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            my: 2,
          }}
        >
          {conditions.map((condition, index) => (
            <Condition
              key={'cond' + -index}
              field={condition.field}
              op={condition.operator}
              value={condition.value}
              isLast={index === conditions.length - 1}
            />
          ))}
        </Box>

        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="outlined">Cancelar</Button>
          <Button variant="contained">Guardar</Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default Rule;
