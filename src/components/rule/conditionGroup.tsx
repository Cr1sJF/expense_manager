import { Box, Button, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import Condition from './condition';
import { Delete } from '@mui/icons-material';

const ConditionGroup = () => {
  const [conditions, _] = useState<any[]>([
    {
      op: 'eq',
      field: 'Monto',
      value: '5000',
    },
    {
      op: 'eq',
      field: 'Monto',
      value: '5000',
    },
  ]);

  return (
    <>
      {!conditions.length ? (
        <Typography sx={{ m: 1 }} color="text.secondary">
          No conditions
        </Typography>
      ) : (
        <Paper elevation={23} sx={{ m: 2 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems={'center'}
            m={2}
          >
            <Typography>Grupo X</Typography>
            <Button title='Eliminar grupo'>
              <Delete color="error" />
            </Button>
          </Box>
          {conditions.map((condition: any, index: number) => (
            <Condition
              key={'condition-' + index}
              op={condition.op}
              field={condition.field}
              value={condition.value}
              isFirst={index === 0}
              isLast={index === conditions.length - 1}
            />
          ))}
        </Paper>
      )}
    </>
  );
};

export default ConditionGroup;
