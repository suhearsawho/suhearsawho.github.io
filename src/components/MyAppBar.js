import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuDrawer from './MenuDrawer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
  },
  sectionMobile: {
    display: 'flex',
  }
}));

export default function MyAppBar() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Susan Su
          </Typography>
          <Hidden xsDown> 
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Portfolio</Button>
            <Button color="inherit">Resume</Button>
            <Button color="inherit">Contact</Button>
          </Hidden>
          <Hidden smUp>
            <MenuDrawer />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}
