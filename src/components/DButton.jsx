import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios"

export default function DButton(props) {

 let deleteButton = e => {
  e.preventDefault()
  console.log("CLICKED!!!!!!!!")
  console.log(props.id)
  axios.delete(`https://nobelprizes.herokuapp.com/id/${props.id}`).then(res=>{console.log(res)
  alert("Deleted")})
}
  return (
    <div>
      <div>
        <button onClick={deleteButton}>button text</button>
        <IconButton aria-label="delete" className='deleteIcon'>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
  }