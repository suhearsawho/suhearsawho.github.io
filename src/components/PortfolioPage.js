import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { CSSTransition } from 'react-transition-group';

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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
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
        <Grid item xs={12}>
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
        <Grid item xs={12}>
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
        <Grid item xs={12}>
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
        <Grid item xs={12}>
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
