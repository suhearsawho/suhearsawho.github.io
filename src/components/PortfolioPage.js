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
              Job Odyssey with Holberton
            </Typography>
            <Typography variant="body1" gutterBottom>
              I created Job Odyssey, a web application designed to gamify your job search,
              within a span of two weeks in a two-person team.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Languages: Python, Javascript, HTML, CSS
            </Typography>
            <Typography variant="body2" gutterBottom>
              Tech Stack: Flask, React, Material UI, SQLAlchemy, AWS, cron
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
            <Typography variant="body1" gutterBottom>
              I created Job Odyssey, a web application designed to gamify your job search,
              within a span of two weeks in a two-person team.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Languages: Python, Javascript, HTML, CSS
            </Typography>
            <Typography variant="body2" gutterBottom>
              Tech Stack: Flask, React, Material UI, jQuery, SQLAlchemy, AWS, Nginx, Github OAuth API
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
            <Typography variant="body1" gutterBottom>
              Inspired by "foodie culture", Foodventures is a web application that 
              generates travel itineraries around food! 
            </Typography>
            <Typography variant="body2" gutterBottom>
              Languages: Python, Javascript, HTML, CSS
            </Typography>
            <Typography variant="body2" gutterBottom>
              Tech Stack: Flask, React, Material UI, jQuery, SQLAlchemy, Yelp Fusion API, Google Maps Javascript API, Google Distance Matrix API
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
              Air-Bnb Clone
            </Typography>
            <Typography variant="body1" gutterBottom>
              The Air-Bnb Clone was a series of multiple projects at Holberton school where students
              switched partners for each project.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Languages: Python, Javascript, HTML, CSS
            </Typography>
            <Typography variant="body2" gutterBottom>
              Tech Stack: Flask, jQuery, SQLAlchemy, Nginx
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
            <Typography variant="body1" gutterBottom>
              The Challenge Timer takes a twist on the traditional Pomodoro timer.
              Users are motivated to work efficiently by setting timed challenges
              for each task. 
            </Typography>
            <Typography variant="body2" gutterBottom>
              Languages: Python, Javascript, HTML, CSS, SQL
            </Typography>
            <Typography variant="body2" gutterBottom>
              Tech Stack: Flask, jQuery, MySQL
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
            <Typography variant="body1" gutterBottom>
            
            </Typography>
            <Typography variant="body2" gutterBottom>
              Languages: C
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
            <Typography variant="body1" gutterBottom>
            
            </Typography>
            <Typography variant="body2" gutterBottom>
              Languages: C
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
              Hackathons at Holberton
            </Typography>
            <Typography variant="body1" gutterBottom>
            
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
