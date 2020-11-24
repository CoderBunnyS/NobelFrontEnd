import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

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
    this.state = { name: '' , category: '', year: ''};
  }
  addWinnerName = (event) => {
    event.preventDefault()
    this.setState({name: event.target.value});
    //console.log(this.state.name)
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
  submitInfo = (event) => {
    event.preventDefault() 
    console.log(this.state.name, this.state.category, this.state.year)
    var joined = this.state.laureates.concat('new value');
    submittedInfo = {};
    this.setState({ laureates: joined })
    axios.post(`https://nobelprizes.herokuapp.com/create`, { year: this.state.year, category:this.state.category, name:this.state.laureates[0] })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  }
  render(){
  return (
    <form className="form" noValidate autoComplete="off" >
        <div>
        <h3>Create your own winner!</h3>
        <TextField
          required
          id="outlined-name"
          label="Name"
          placeholder="Enter your Winner's Name"
          variant="outlined"
          onChange={this.addWinnerName}
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
        <button onClick={this.submitInfo}>Submit</button>
      </div>
    </form>
  );
}
}

export default Form