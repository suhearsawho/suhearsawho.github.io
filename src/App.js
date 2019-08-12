import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import MyAppBar from './components/MyAppBar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import PortfolioPage from './components/PortfolioPage';
import ContactMe from './components/ContactMe';
import SocialMedia from './components/SocialMedia';
import Resume from './components/Resume';
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
    fourth: "#55bee0", 
  },
  typography: {
    fontFamily: "'Quicksand', sans-serif",
  },
});

const useStyles = makeStyles(theme => ({
  body: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: '98%',
    marginTop: '1rem',
    marginBottom: '1rem',
  }
}));

function HomePage(props) {
  return (
    <div {...props}>
      <Home />
      <Portfolio />
    </div>
  );
}

function App() {
  const classes = useStyles();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className={classes.body}>
            <MyAppBar />
            <Route exact path="/" render={props =>
              <React.Fragment>
                <Fade in={true}
                 style={{ transitionDelay: '200ms' }}
                >
                  <HomePage />
                </Fade>
              </React.Fragment>
            } />
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/portfolio" component={PortfolioPage} />
            <Route exact path="/contact" component={ContactMe} />
            <Route exact path="/resume" component={Resume} />
            <SocialMedia />
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
