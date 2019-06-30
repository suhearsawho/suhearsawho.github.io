import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import main from './images/main.png';

const mdUp = '30rem';
const mdDown = '15rem';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '1rem',
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
    alignItems: 'center',
    textAlign: 'left',
  },
  image: {
    [theme.breakpoints.down('xs')]: {
      width: '150px',
      height: '150px',
    },
    width: '200px',
    height: '200px',
    margin: '1rem',
  },
  imageBack: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} className={classes.info}>
        <Grid item xs={12} sm={4}>
          <div className={classes.imageBack}>
            <Avatar alt="Susan Su" src={main} className={classes.image} />
          </div>
        </Grid>
        <Grid item xs={12} sm={8}>
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
