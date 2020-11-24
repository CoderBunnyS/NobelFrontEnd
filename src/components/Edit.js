import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios"

export default function Edit(props) {

 let Edit = e => {
  e.preventDefault()
  console.log("CLICKED!!!!!!!!")
  console.log(props.id)
  axios.put(`https://nobelprizes.herokuapp.com/id/${props.id}`).then(res=>{console.log(res)
  alert("Edited")})
}
  return (
    <div>
      <div>
        <button onClick={Edit}>Edit button text</button>
        <form className="form" noValidate autoComplete="off" >
        <div>
        <h3>Edit the winner!</h3>
        <textField
          required
          id="outlined-name"
          label="First Name"
          placeholder="Enter your Winner's Name"
          variant="outlined"
          onChange={this.addWinnerFirstName}
        />
        <textField
          required
          id="outlined-name"
          label="Last Name"
          placeholder="Enter your Winner's Name"
          variant="outlined"
          onChange={this.addWinnerSurname}
        />
        <textField
          
          id="outlined-cat"
          label="Category"
          placeholder="What category did they win?"
          variant="outlined"
          onChange={this.addWinnerCat}
        />
        
        <textField
          id="outlined-number"
          label="Year"
          placeholder="What year did they win?"
          variant="outlined"
          onChange={this.addWinnerYear}
        />
        <button onClick={this.submitInfo}>Submit</button>
      </div>
    </form>
      </div>
    </div>
  );
  }