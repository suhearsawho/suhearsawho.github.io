import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
  },
}));

export default function ContactMe() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Hi, I'm Susan Su.
      </Typography>
      <Typography variant="p" gutterBottom>
        I am a fullstack software engineer in San Francisco.
      </Typography>
    </div>
  )
}
