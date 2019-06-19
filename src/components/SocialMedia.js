import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitterSquare} from 'react-icons/fa';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      margin: '1rem',
    },
    margin: '1rem',
    paddingTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      width: '60%',
    },
    width: '100%',
  },
  icon: {
    height: '40px',
    width: '40px',
    color: theme.palette.primary.main,
  },
  credits: {
    paddingTop: '1rem',
  },
}));

export default function ContactMe() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h6" gutterBottom>
          Social Media
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <a href="https://github.com/suhearsawho" target="_blank">
              <FaGithub className={classes.icon}/>
            </a>
          </Grid>
          <Grid item xs={4}>
            <a href="https://www.linkedin.com/in/susansu1/" target="_blank">
              <FaLinkedin className={classes.icon}/>
            </a>
          </Grid>
          <Grid item xs={4}>
            <a href="https://twitter.com/sususayshello" target="_blank">
              <FaTwitterSquare className={classes.icon}/>
            </a>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p" className={classes.credits}>
              Designed and Developed by Susan Su
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
