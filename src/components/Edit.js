import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios"
import TextField from '@material-ui/core/TextField';

  import React, { Component } from 'react';
  class Edit extends Component {
    constructor(props){
      super(props)
      this.state={
      }
    }
    submitEdit = (event) => {
        event.preventDefault()
        console.log(this.state.firstname, this.state.surname, this.state.category, this.state.year)
        let laureates = [{"firstname": this.state.firstname, "surname": this.state.surname}]
        console.log(laureates)
        axios.put(`https://nobelprizes.herokuapp.com/id/${this.props.id}`, { year: this.state.year, category: this.state.category, laureates: laureates })
          .then(res => {
            //console.log(res);
            //console.log(res.data);
            //alert("Changed")
            window.location.reload()
          })
      
      }
      editWinnerFirstName = (event) => {
        event.preventDefault()
        this.setState({firstname: event.target.value});
        
        //console.log(this.state.firstname)
      }
      editWinnerSurname = (event) => {
        event.preventDefault()
        this.setState({surname: event.target.value});
        //console.log(this.state.surname)
      }
      editWinnerCat = (event) => {
        event.preventDefault()
        this.setState({category: event.target.value});
        //console.log(this.state.category)
      }
      editWinnerYear = (event) => {
        event.preventDefault()
        this.setState({year: event.target.value});
        //console.log(this.state.year)
      }

    render() {
      return (
        <div className="editForm">
      <div>
        <form className="editForm" noValidate autoComplete="off" >
        <div>
        <h3>Edit the winner!</h3>
        <TextField
          required
          id="outlined-name"
          label="First Name"
          placeholder="Enter your Winner's Name"
          variant="outlined"
          onChange={this.editWinnerFirstName}
        />
        <TextField
          required
          id="outlined-name"
          label="Last Name"
          placeholder="Enter your Winner's Name"
          variant="outlined"
          onChange={this.editWinnerSurname}
        />
        <TextField
          required
          id="outlined-cat"
          label="Category"
          placeholder="What category did they win?"
          variant="outlined"
          onChange={this.editWinnerCat}
        />
        <TextField
          required
          id="outlined-number"
          label="Year"
          placeholder="What year did they win?"
          variant="outlined"
          onChange={this.editWinnerYear}
        />
        <button id="editButton" onClick={this.submitEdit}>Edit</button>
      </div>
    </form>
      </div>
    </div>
      )
    }
  }
  export default Edit;