import React, { Component } from 'react';
import { Route, Link, Redirect } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Axios from "axios";
import Card from './components/Card'
import { CircularProgress } from "@material-ui/core/";
 

class App extends Component {
  constructor(){
    super()
    this.state = {
      year: "",
      isLoading:true,
      category: ""
    }
  }
  componentDidMount(){
    //console.log('mounted')
    let url="https://nobelprizes.herokuapp.com/";

    Axios.get(url)
    .then((res) => {
      return res
    })
    .then((data) => {
      console.log(data)
      this.setState({year: data.year})
      this.setState({category: data.category, isLoading:false})
      
    })
    
  }
  
  render (){ 
     console.log(this.state.year)
     console.log(this.state.category)
    if(this.state.isLoading === true){
      return(<CircularProgress/>)
    }else{
    return(
    <div className="App">
    <NavBar />
    <Card />
      
    </div>
    ) 
}
  }
}


export default App;
