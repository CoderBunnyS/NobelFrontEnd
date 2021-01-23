import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="static" id="header">
      
        <Toolbar>
          <Typography variant="h1" className={classes.title} id="header">
            The history of the <br></br>Nobel Peace Prize
          </Typography>
          
          {/* <Button color="inherit" onclick="window.location.href = 'https://nobelprizes.herokuapp.com/';">Home</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}