import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

const height = '20rem';
const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      margin: '1rem',
    },
    margin: '1rem',
    paddingTop: '2rem',
  },
  one: {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    padding: theme.spacing(5),
    height: height,
    display: 'flex',
    flexDirection: 'column',
  },
  two: {
    backgroundColor: theme.palette.third,
    color: 'white',
    padding: theme.spacing(5),
    height: height,
    display: 'flex',
    flexDirection: 'column',
  },
  three: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    padding: theme.spacing(5),
    height: height,
    display: 'flex',
    flexDirection: 'column',
  },
  four: {
    backgroundColor: theme.palette.fourth,
    color: 'white',
    padding: theme.spacing(5),
    height: height,
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function PortfolioPage() {
  return (
    <Fade in={true}>
      <MyComponent />
    </Fade>
  );
}

function MyComponent(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} {...props}>
      <Grid container spacing={3}>
        <Grid item xs={12} id="jobHolberton">
          <Paper 
            classes={{
              root: classes.one, 
            }}
          >
            <Typography variant="h6" gutterBottom>
              Job Odyssey
            </Typography>
            <Typography variant="p" gutterBottom>
              I created Job Odyssey, a web application designed to gamify your job search,
              within a span of two weeks in a two-person team.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} id="job">
          <Paper 
            classes={{
              root: classes.one, 
            }}
          >
            <Typography variant="h6" gutterBottom>
              Job Odyssey
            </Typography>
            <Typography variant="p" gutterBottom>
              I created Job Odyssey, a web application designed to gamify your job search,
              within a span of two weeks in a two-person team.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} id="foodventures">
          <Paper 
            classes={{
              root: classes.two, 
            }}
          >
            <Typography variant="h6" gutterBottom>
              Foodventures
            </Typography>
            <Typography variant="p" gutterBottom>
              Inspired by "foodie culture", Foodventures is a web application that 
              generates travel itineraries around food! 
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} id="airbnb">
          <Paper 
            classes={{
              root: classes.three, 
            }}
          >
            <Typography variant="h6" gutterBottom>
              Air-Bnb
            </Typography>
            <Typography variant="p" gutterBottom>
              I created Job Odyssey, a web application designed to gamify your job search,
              within a span of two weeks in a two-person team.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} id="timer">
          <Paper 
            classes={{
              root: classes.four, 
            }}
          >
            <Typography variant="h6" gutterBottom>
              Challenge Timer
            </Typography>
            <Typography variant="p" gutterBottom>
              I created Job Odyssey, a web application designed to gamify your job search,
              within a span of two weeks in a two-person team.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} id="shell">
          <Paper 
            classes={{
              root: classes.three, 
            }}
          >
            <Typography variant="h6" gutterBottom>
              Shell Project
            </Typography>
            <Typography variant="p" gutterBottom>
              I created Job Odyssey, a web application designed to gamify your job search,
              within a span of two weeks in a two-person team.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} id="printf">
          <Paper 
            classes={{
              root: classes.one, 
            }}
          >
            <Typography variant="h6" gutterBottom>
              printf Project
            </Typography>
            <Typography variant="p" gutterBottom>
              I created Job Odyssey, a web application designed to gamify your job search,
              within a span of two weeks in a two-person team.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} id="hackathon">
          <Paper 
            classes={{
              root: classes.one, 
            }}
          >
            <Typography variant="h6" gutterBottom>
              printf Project
            </Typography>
            <Typography variant="p" gutterBottom>
              I created Job Odyssey, a web application designed to gamify your job search,
              within a span of two weeks in a two-person team.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
