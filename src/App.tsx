import './App.css';
import Header from './components/header/header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './styles.scss';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import { Container } from '@mui/material';
import { UserContextProvider } from './context/userContext';

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
              <Route path="/process/*" element={<div>Process</div>}>
                <Route path="step1" element={<div>Step 1</div>} />
                <Route path="step2" element={<div>Step 2</div>} />
                <Route path="step3" element={<div>Step 3</div>} />
              </Route>

              <Route path="/splitwise" element={<div>Splitwise</div>} />
              <Route path="/bills" element={<div>Bills</div>} />

              <Route
                path="/settings"
                element={
                  <div>
                    SETTINGS <Outlet />{' '}
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
