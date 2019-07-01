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
            I am Susan Su, a mechanical engineer turned full-stack software engineer
            located in San Francisco. Currently, I am looking for a full-time position at a
            company with a fast-paced environment and challenging tasks. I am a fast learner
            and motivated worker who will make sure to get the job done well and efficiently.
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
