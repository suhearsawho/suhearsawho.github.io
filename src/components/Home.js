import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const mdUp = '30rem';
const mdDown = '15rem';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '1rem',
    paddingTop: '4rem',
  },
  image: {
    [theme.breakpoints.up('md')]: {
      height: mdUp,
    },
    height: mdDown,
  },
  info: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.info}>
          <Typography variant="h4" gutterBottom>
            Hi, I'm Susan. 
          </Typography>
          <Typography variant="h6" gutterBottom>
            I am a Fullstack Software Engineer based in Bay Area
            that is seeking a full time position. 
          </Typography>
          <Typography variant="p" gutterBottom>
            This website contains a portfolio of my current and previous projects.
            Enjoy!
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}
