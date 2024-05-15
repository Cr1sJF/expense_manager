import { Box, Typography } from '@mui/material';
import Login from '../components/login/login';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import ActionCard from '../components/ui/ActionCard';

const Home = () => {
  const { loggedIn } = useContext(UserContext);

  const actions = [
    {
      name: 'Procesar',
      description: 'Procesa un archivo excel para categorizar tus gastos',
      url: '/process',
    },
    {
      name: 'Dividir cuentas',
      description:
        'Divide una cuenta entre varias personas y asigna a splitwise',
      url: '/bills',
    },
    {
      name: 'SplitWise',
      description: 'Asigna gastos a tus grupos de splitwise',
      url: '/splitwise',
    },
  ];
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography variant="h2" sx={{ m: 1 }}>
        Expense Manager
      </Typography>
      {!loggedIn && <Login />}

      {loggedIn && (
        <Box style={{ display: 'flex', flexDirection: 'row' }}>
          {actions.map((action) => (
            <ActionCard key={action.name} {...action}></ActionCard>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Home;
