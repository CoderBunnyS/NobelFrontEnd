import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function DButton() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <IconButton aria-label="delete" className={classes.margin}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}