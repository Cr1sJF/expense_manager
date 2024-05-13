import './App.css';
import Header from './components/header/header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './styles.scss';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header></Header>
      </ThemeProvider>
    </>
  );
}

export default App;
