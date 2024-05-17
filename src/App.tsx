import './App.css';
import Header from './components/header/header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './styles.scss';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import { Box, Container, Typography } from '@mui/material';
import { UserContextProvider } from './context/userContext';
import Step1 from './pages/process/step1';
import Step2 from './pages/process/step2';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <UserContextProvider>
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
                    <Typography variant="h3" sx={{ m: 1 }}>
                      Procesar gastos
                    </Typography>
                    <Outlet />
                  </Box>
                }
              >
                <Route path="step1" element={<Step1></Step1>} />
                <Route path="step2" element={<Step2></Step2>} />
                <Route path="step3" element={<div>Step 3</div>} />
              </Route>

              <Route path="/splitwise" element={<div>Splitwise</div>} />
              <Route path="/bills" element={<div>Bills</div>} />

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
        </UserContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
