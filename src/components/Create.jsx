import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <div>
        <h3>Create your own winner!</h3>
        <TextField
          required
          id="outlined-name"
          label="Name"
          placeholder="Enter your Winner's Name"
          variant="outlined"
        />
        <TextField
          
          id="outlined-cat"
          label="Category"
          placeholder="What category did they win?"
          variant="outlined"
        />
        
        <TextField
          id="outlined-number"
          label="Year"
          placeholder="What year did they win?"
          variant="outlined"
        />
        
        {/* <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="outlined"
        /> */}
      </div>
    </form>
  );
}
