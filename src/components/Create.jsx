import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
//import { makeStyles } from '@material-ui/core/styles';
//import { Button } from '@material-ui/core';
import axios from "axios"

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { firstname: '' , surname: '' , category: '', year: ''};
  }
  
  submitInfo = (event) => {
    event.preventDefault()
    console.log(this.state.firstname, this.state.surname, this.state.category, this.state.year)
    let laureates = [{"firstname": this.state.firstname, "surname": this.state.surname}]
    console.log(laureates)
    axios.post(`https://nobelprizes.herokuapp.com/create/`, { year: this.state.year, category: this.state.category, laureates: laureates })
      .then(res => {
        //console.log(res);
        //console.log(res.data);
        alert("Submitted")
      })
  
  }
  addWinnerFirstName = (event) => {
    event.preventDefault()
    this.setState({firstname: event.target.value});
    //console.log(this.state.firstname)
  }
  addWinnerSurname = (event) => {
    event.preventDefault()
    this.setState({surname: event.target.value});
    //console.log(this.state.surname)
  }
  addWinnerCat = (event) => {
    event.preventDefault()
    this.setState({category: event.target.value});
    //console.log(this.state.category)
  }
  addWinnerYear = (event) => {
    event.preventDefault()
    this.setState({year: event.target.value});
    //console.log(this.state.year)
  }
  

  render(){
  return (
    <form className="form" noValidate autoComplete="off" >
        <div>
        <h3>Add your own winner to the list!</h3>
        <TextField
          required
          id="outlined-name"
          label="First Name"
          placeholder="Enter your Winner's Name"
          variant="outlined"
          onChange={this.addWinnerFirstName}
        />
        <TextField
          required
          id="outlined-name"
          label="Last Name"
          placeholder="Enter your Winner's Name"
          variant="outlined"
          onChange={this.addWinnerSurname}
        />
        <TextField
          
          id="outlined-cat"
          label="Category"
          placeholder="What category did they win?"
          variant="outlined"
          onChange={this.addWinnerCat}
        />
        
        <TextField
          id="outlined-number"
          label="Year"
          placeholder="What year did they win?"
          variant="outlined"
          onChange={this.addWinnerYear}
        />
        <button className = "submitButton" onClick={this.submitInfo}>Submit</button>
      </div>
    </form>
  );
}
}


export default Form