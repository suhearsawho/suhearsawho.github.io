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
  },
  link: {
    color: 'white',
    textDecoration: 'underline',
  },
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
  const { link, learnMore, siteLink } = props;
  let size = 4;

  if (siteLink == null) {
    size = 6  
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={size}>
        <a href={learnMore}>
        <Button variant="outlined" fullWidth className={classes.button}>
          Learn More
        </Button>
        </a>
      </Grid>
      { siteLink }
      <Grid item xs={size}>
        <a href={link} target="_blank" rel="noopener noreferrer">
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
              root: classes.one
            }}
          >
            <Typography variant="h6" gutterBottom>
              Job Odyssey with Holberton School
            </Typography>
            <Typography variant="p" gutterBottom>
              After presenting Job Odyssey at Holberton School's EOY presentations,
              my partner and I were asked to upgrade our web application to become
              an internal tool for the school.
            </Typography>
            <PortfolioButton
              learnMore="/portfolio#jobHolberton"
              link="https://github.com/christopherchoe/jobodyssey_hbtn"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper 
            classes={{
              root: classes.two, 
            }}
          >
            <Typography variant="h6" gutterBottom>
                Job Odyssey
            </Typography>
            <Typography variant="p" gutterBottom>
              Job Odyssey is a web application, created by a two-person team within
              the span of two weeks, that is designed to gamify the job search!
              It enables users to track and consolidate job applications, 
              find available positions, and earn tokens/rewards. 
            </Typography>
            <PortfolioButton
              learnMore="/portfolio#job"
              link="https://github.com/suhearsawho/jobodyssey"
              siteLink={(
                <Grid item xs={4}>
                  <a href="https://jobodyssey.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outlined" fullWidth className={classes.button}>
                      Website Link
                    </Button>
                  </a>
                </Grid>
              )}    
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper 
            classes={{
              root: classes.three, 
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
            <PortfolioButton
              learnMore="/portfolio#foodventures"
              link="https://github.com/suhearsawho/foodventures"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper 
            classes={{
              root: classes.four, 
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
            <PortfolioButton
              learnMore="/portfolio#airbnb"
              link="https://github.com/suhearsawho/AirBnB_clone_v4"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper 
            classes={{
              root: classes.two, 
            }}
          >
            <Typography variant="h6" gutterBottom>
              Challenge Timer
            </Typography>
            <Typography variant="p" gutterBottom>
              The Challenge Timer is a web application that takes a twist on the
              classical Pomodoro approach by allowing users to set timed challenges for
              each task. Users can create accounts and save their data. 
            </Typography>
            <PortfolioButton
              learnMore="/portfolio#timer"
              link="https://github.com/suhearsawho/challenge_timer_web_app"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper 
            classes={{
              root: classes.three, 
            }}
          >
            <Typography variant="h6" gutterBottom>
              Shell Project
            </Typography>
            <Typography variant="p" gutterBottom>
              The Shell project is a Shell program that responds to user input on the
              command line. This program was written in the C programming language
              and makes use of Unix system calls. 
            </Typography>
            <PortfolioButton
              learnMore="/portfolio#shell"
              link="https://github.com/suhearsawho/simple_shell"
            />
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
              A recreation of the printf function in the C standard library was
              created in this project, allowing users to enter strings and specify
              the input types.  
            </Typography>
            <PortfolioButton
              learnMore="/portfolio#printf"
              link="https://github.com/suhearsawho/printf"
            />
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
              In honor of the Python interpreter, the Monty Project was created as
              a simple ByteCode interpreter that uses stack and queues to operate.
            </Typography>
            <PortfolioButton
              learnMore="/portfolio#monty"
              link="https://github.com/seleniadelgado/monty"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper 
            classes={{
              root: classes.four, 
            }}
          >
            <Typography variant="h6" gutterBottom>
              Kivy Hackathon at Holberton
            </Typography>
            <Typography variant="p" gutterBottom>
              Within 24 hours, I learned how to use Kivy, an open source Python library
              for user interfaces, for our application's frontend.
            </Typography>
            <PortfolioButton
              learnMore="/portfolio#hackathon"
              link="https://github.com/BennettDixon/hackday_kivy_app"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper 
            classes={{
              root: classes.three, 
            }}
          >
            <Typography variant="h6" gutterBottom>
              Github Hackathon at Holberton
            </Typography>
            <Typography variant="p" gutterBottom>
              In this hackathon, teams were responsible for creating a web application
              that utilized Github OAuth API.
            </Typography>
            <PortfolioButton
              learnMore="/portfolio#hackathon"
              link="https://github.com/stak21/TripleTail"
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
