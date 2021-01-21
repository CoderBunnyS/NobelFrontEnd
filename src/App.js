import React, { Component } from 'react';
//import { Route, Link, Redirect } from "react-router-dom";
import './App.css';
import Axios from "axios";
import Card from './components/Card'
//import { CircularProgress } from "@material-ui/core/";
import Header from "./components/Header"
//import YButton from "./components/YButton"
//import DButton from "./components/DButton"
import Form from "./components/Create"
//import CatButton from "./components/CatButton"


 
//This info is in Git now, right?
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      year: "",
      isLoading:true,
      category: "",
      firstname: "",
      surname: "",
      results:[]
    }
  }
  componentDidMount(){
    console.log('mounted')
    let url="https://nobelprizes.herokuapp.com/";

    Axios.get(url)
    .then((res) => {
      this.setState({results: res.data})
      
      //return res.data
    })
    
  }
  
    
  
  
  render (){ 
    return(
    <div className="App">
    <Header />
    <img className="img-responsive" src="https://www.plu.edu/news/wp-content/uploads/sites/573/2020/02/nobel-prize.jpg" alt="logo"/>
    <Form />
    
    {this.state.results.map((item, index) => (<div key={index}>  <Card {...item}/></div>))}  
    </div>
    ) 
}
  }



export default App;
