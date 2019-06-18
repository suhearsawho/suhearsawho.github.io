import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import MyAppBar from './components/MyAppBar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#57bc90",
    },
    secondary: {
      main: "#77c9d4",
    },
    third: "#015249",
    fourth: "#a5a5af", 
  },
  typography: {
    fontFamily: "'Quicksand', sans-serif",
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <MyAppBar />
          <Home />
          <Portfolio />
          <AboutMe />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
