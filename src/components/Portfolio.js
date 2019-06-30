import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { CSSTransition } from 'react-transition-group';

const height = '20rem';
const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      margin: '2rem',
    },
    margin: '0.5rem',
    paddingTop: '2rem',
  },
  one: {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    padding: theme.spacing(5),
    height: height,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  two: {
    backgroundColor: theme.palette.third,
    color: 'white',
    padding: theme.spacing(5),
    height: height,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  three: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    padding: theme.spacing(5),
    height: height,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  four: {
    backgroundColor: theme.palette.fourth,
    color: 'white',
    padding: theme.spacing(5),
    height: height,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    color: 'white',
    marginTop: '1rem',
    borderColor: 'white',
  }
}));

const useStyles1 = makeStyles(theme => ({
  button: {
    color: 'white',
    marginTop: '1rem',
    borderColor: 'white',
  },
  container: {
    display: 'flex',
  },
}));

function PortfolioButton(props) {
  const classes = useStyles1();
  const { link } = props;

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Button variant="outlined" fullWidth className={classes.button}>
          Learn More
        </Button>
      </Grid>
      <Grid item xs={6}>
        <a href={link} target="_blank">
          <Button variant="outlined" fullWidth className={classes.button}>
            Github Link
          </Button>
        </a>
      </Grid>
    </Grid>
  )
}

export default function Portfolio() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <Paper 
            classes={{
              root: classes.one, 
            }}
          >
            <Typography variant="h6" gutterBottom>
              Job Odyssey with Holberton School
            </Typography>
            <Typography variant="p" gutterBottom>
              Job Odyssey is a web application, created by a two-person team within
              the span of two weeks, that is designed to gamify the job search!
              It enables users to track job applications, find available positions,
              and earn tokens/rewards. 
            </Typography>
            <PortfolioButton link="https://github.com/suhearsawho/jobodyssey" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper 
            classes={{
              root: classes.one, 
            }}
          >
            <Typography variant="h6" gutterBottom>
              Job Odyssey
            </Typography>
            <Typography variant="p" gutterBottom>
              Job Odyssey is a web application, created by a two-person team within
              the span of two weeks, that is designed to gamify the job search!
              It enables users to track job applications, find available positions,
              and earn tokens/rewards. 
            </Typography>
            <PortfolioButton link="https://github.com/suhearsawho/jobodyssey" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
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
              generates travel itineraries around food! It integrates the features of
              Yelp and Google APIs to calculate the most efficient and customized
              travel plans for users.
            </Typography>
            <PortfolioButton />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper 
            classes={{
              root: classes.three, 
            }}
          >
            <Typography variant="h6" gutterBottom>
              Air-Bnb Clone
            </Typography>
            <Typography variant="p" gutterBottom>
              The Air-Bnb Clone, a project at Holberton School, is a team-based project
              that integrates a Python backend, a MySQL database, and a HTML/CSS with
              Javascript frontend to create a basic clone of the popular site, Air-Bnb.
            </Typography>
            <PortfolioButton />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper 
            classes={{
              root: classes.four, 
            }}
          >
            <Typography variant="h6" gutterBottom>
              Challenge Timer
            </Typography>
            <Typography variant="p" gutterBottom>
              The Challenge Timer is a web application that takes a twist on the
              classical Pomodoro approach by allowing users to set an allocated time for
              each task. Users can create accounts and save their data. 
            </Typography>
            <PortfolioButton />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper 
            classes={{
              root: classes.two, 
            }}
          >
            <Typography variant="h6" gutterBottom>
              Shell Project
            </Typography>
            <Typography variant="p" gutterBottom>
            
            </Typography>
            <PortfolioButton />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper 
            classes={{
              root: classes.one, 
            }}
          >
            <Typography variant="h6" gutterBottom>
              printf Project
            </Typography>
            <Typography variant="p" gutterBottom>
            </Typography>
            <PortfolioButton />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper 
            classes={{
              root: classes.two, 
            }}
          >
            <Typography variant="h6" gutterBottom>
              Monty Project
            </Typography>
            <Typography variant="p" gutterBottom>
            
            </Typography>
            <PortfolioButton />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
