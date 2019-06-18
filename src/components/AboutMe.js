import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
  },
}));

export default function AboutMe() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Hi, I'm Susan Su.
      </Typography>
      <Typography variant="h6" gutterBottom>
        I am a fullstack software engineer in San Francisco.
      </Typography>
      <Typography variant="p" gutterBottom>
        Prior to becoming a fullstack software engineer, I graduated from UCLA with
        a B.S. in Mechanical Engineering and worked at Lockheed Martin as a System
        Integration and Test Engineer.  
        After resigning from my position at Lockheed Martin, I began to pursue
        software engineering and joined Holberton School. During my time here, I built
        several school projects and independent projects that demonstrate my interest
        and knowledge in web applications. 
      </Typography>
      <Typography variant="h6" gutterBottom>
        Languages
      </Typography>
    </div>
  )
}
