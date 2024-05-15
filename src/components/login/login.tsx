import { AccountCircle } from '@mui/icons-material';
import { Paper, Avatar, TextField, Button } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

function Login(_: any) {
  const { login } = useContext(UserContext);
  return (
    <Paper
      elevation={1}
      sx={{
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, width: 56, height: 56 }}>
        <AccountCircle />
      </Avatar>
      <TextField id="user" label="User" variant="outlined" sx={{ m: 1 }} />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        sx={{ m: 1 }}
      />

      <Button
        variant="contained"
        sx={{ m: 1 }}
        onClick={() => {
          login('user', 'pass');
        }}
      >
        Login
      </Button>
    </Paper>
  );
}

export default Login;
