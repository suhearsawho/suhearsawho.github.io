import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import aboutme from './images/aboutme.jpg';
import Timeline from './Timeline';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      margin: '1rem',
    },
    margin: '1rem',
    paddingTop: '2rem',
    textAlign: 'left',
  },
  image: {
    maxWidth: '90%',
    [theme.breakpoints.up('md')]: {
      maxHeight: '25rem',
    },
    maxHeight: '20rem',
    objectFit: 'contain',
    margin: '1rem',
    borderRadius: '2rem'
  },
  info: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'noWrap',
      justifyContent: 'center',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderColor: theme.palette.secondary.main,
  },
  intro: {
    padding: '1rem',
  },
  timeline: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#77c9d454',
  },
}));

export default function AboutMe() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} >
          <Paper className={classes.info}>
          <img src={aboutme} className={classes.image} />
          <p className={classes.intro}>
            Hi there! I am Susan Su, a mechancial engineer turned software engineer located 
            in San Francisco Bay Area. 
            <br/>
            <br/>
            I graduated from UCLA with a B.S. Mechanical Engineering
            and began working at Lockheed Martin shortly after college. Because of my work ethic
            and dependability, I was chosen to lead testing on a classified spacecraft
            system. 
            <br/>
            <br/>
            After I departed this job, I joined Holberton School of Software Engineering.
            In my last weeks of the program, I created a web application at jobodyssey.com with
            the aim of gamifying and optimizing the job search. Holberton School quickly asked
            to incorporate this application into their school as an internal tool for current
            and future students to use.
            <br/>
            <br/>
            Two weeks after I completed my first year curriculum at Holberton School,
            I joined Dor Technologies, a startup in San Francisco, as a software engineer
            in a three-month contract. In a short span of time with the company,
            I have picked up several new technologies, including AWS and Docker, and 
            contributed to the codebase. One of my recent tasks included creating new
            Python classes and functions that would support algoritm testing through the
            creation and management of MySQL Docker containers.
            <br/>
            <br/>
            One of my biggest drives is aiming to make a positive impact at the companies that 
            I work for. I strive to produce excellent work to support the company I represent
            to the best of my abilities. As a team player, I understand the importance
            of clear communication and support. Overall, I hope that I can be a great
            fit for your company!
          </p>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper className={classes.timeline}>
          <Timeline />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
