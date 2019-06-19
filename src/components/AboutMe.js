import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import myImage from './images/myImage.png';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'left',
    margin: '2rem',
  },
  image: {
    maxWidth: '100%',
    height: '20rem',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
  }
}));

export default function AboutMe() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} className={classes.imageContainer}>
          <img src={myImage} className={classes.image} />
        </Grid>
        <Grid xs={12} sm={6}>
          <Typography variant="h5" gutterBottom>
            Hi, I'm Susan Su.
          </Typography>
          <Typography variant="h6" gutterBottom>
            I am a fullstack software engineer in San Francisco.
          </Typography>
          <Typography variant="p" gutterBottom>
            Prior to becoming a software engineer, I graduated from UCLA with a B.S. in
            Mechanical Engineering. After graduation, I was employed at Lockheed Martin
            as a Systems Integration & Test Engineer. Deciding that my interests were
            in software engineering, I decided to resign from my position and pursue
            a software education at Holberton School. Within a year, I created several
            school and independent projects, as listed on my portfolio page. 
          </Typography>
          <br />
          <Typography variant="p" gutterBottom>
            If you have any questions or comments, please feel free to email me at
            susansu.software@gmail.com!
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}
