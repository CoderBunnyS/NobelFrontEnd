import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
          <Typography variant="h1" className={classes.title}>
            The history of Nobel Peace Prize winners through the years
          </Typography>
          <img className="img-responsive" src="https://www.plu.edu/news/wp-content/uploads/sites/573/2020/02/nobel-prize.jpg" alt="logo"/>
          <Button color="inherit" onclick="window.location.href = 'https://nobelprizes.herokuapp.com/';">Home</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}