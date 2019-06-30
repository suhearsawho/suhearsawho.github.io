import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
    maxWidth: '100%',
    maxHeight: '20rem',
    objectFit: 'contain',
    borderRadius: '2rem',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  timeline: {
    backgroundColor: '#f1ebeb',
    borderRadius: '1rem',
  }
}));

export default function AboutMe() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid xs={12} md={4} className={classes.info}>
          <img src={aboutme} className={classes.image} />
          <p>
            Hi, I'm Susan Su. I am a Full-Stack software engineer in San Francisco that is passionate about building web applications. 
          </p>
        </Grid>
        <Grid xs={12} md={8} className={classes.timeline}>
          <Timeline />
        </Grid>
      </Grid>
    </div>
  )
}
