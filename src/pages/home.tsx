import { Box, Typography } from '@mui/material';
import Login from '../components/login/login';
import ActionCard from '../components/ui/ActionCard';
import { useAuthContext } from '../providers/UserContextProvider';

const Home = () => {
  const { auth } = useAuthContext();

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
      {!auth.token && <Login />}

      {auth.token && (
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
