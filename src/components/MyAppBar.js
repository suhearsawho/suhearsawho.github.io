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
    color: 'black',
  },
  sectionMobile: {
    display: 'flex',
  },
  color: {
    //backgroundImage: "linear-gradient(#ff5f6d, #ffc371)",
    backgroundImage: "linear-gradient(#46844b, #75b477)",
    color: theme.palette.primary.contrastText,
  },
  noColor: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "none",
    color: theme.palette.primary.main,
  },
}));

export default function MyAppBar() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.noColor}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Susan Su
          </Typography>
          <Hidden xsDown>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Portfolio</Button>
            <Button color="inherit">About</Button>
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
