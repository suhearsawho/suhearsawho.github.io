import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import MyAppBar from './components/MyAppBar';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#484848",
      main: "#212121",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#b4ffff",
      main: "#80deea",
      dark: "#4bacb8",
      contrastText: "#000000",
    },
  },
  typography: {
    fontFamily: "'Quicksand', sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MyAppBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
