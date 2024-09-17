import './App.css';
import Header from './components/header/header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './styles.scss';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import { Box, Container, Typography } from '@mui/material';
import Step1 from './pages/process/step1';
import Step2 from './pages/process/step2';
import Step3 from './pages/process/step3';
import { AuthProvider } from './providers/UserContextProvider';
import Splitwise from './components/splitwise/splitwise';
import Bills from './pages/bills';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    error: {
      main: '#e74c3c',
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <AuthProvider>
          <Header></Header>

          <Container>
            <Routes>
              <Route path="/" element={<Home></Home>} />
              <Route
                path="/process/*"
                element={
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      alignItems: 'center',
                    }}
                  >
                    {/* <Typography variant="h3" sx={{ m: 1 }}>
                      Procesar gastos
                    </Typography> */}
                    <Outlet />
                  </Box>
                }
              >
                <Route path="step1" element={<Step1></Step1>} />
                <Route path="step2" element={<Step2></Step2>} />
                <Route path="step3" element={<Step3></Step3>} />
              </Route>

              <Route
                path="/splitwise"
                element={
                  <>
                    <Typography variant="h2" textAlign={'center'}>
                      Asignar gastos
                    </Typography>
                    <Splitwise></Splitwise>
                  </>
                }
              />
              <Route path="/bills" element={<Bills></Bills>} />

              <Route
                path="/settings"
                element={
                  <div>
                    SETTINGS <Outlet />
                  </div>
                }
              >
                <Route path="lists" element={<div>Lists</div>} />
                <Route path="categories" element={<div>Categories</div>} />
                <Route path="rules" element={<div>Rules</div>} />
              </Route>

              <Route path="*" element={<div>404 NOT FOUND</div>} />
            </Routes>
          </Container>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
