import React, { Component } from 'react';
import { Route, Link, Redirect } from "react-router-dom";
import './App.css';
import Axios from "axios";
import Card from './components/Card'
import { CircularProgress } from "@material-ui/core/";
import Header from "./components/Header"
import YButton from "./components/YButton"
import DButton from "./components/DButton"
import FormPropsTextFields from "./components/Create"
import CatButton from "./components/CatButton"
import SCard from './components/SCard';

 
//This info is in Git now, right?
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      year: "",
      isLoading:true,
      category: "",
      firstname: "",
      surname: ""
    }
  }
  componentDidMount(){
    console.log('mounted')
    let url="https://nobelprizes.herokuapp.com/";

    Axios.get(url)
    .then((res) => {
      console.log(res.data)
      return res.data
    })
    .then((res) => {
      console.log(res)
      for (let i = 0; i <= res.length; i++) {
        let info = res[i].laureates[0];
        for (let j=0; j<= info.length; j++){
        console.log(res[i].laureates)
        //console.log(info.firstname)
        const name = info.firstname;
        
      }
    }
      // this.setState({year: res.year})
      // console.log(res[0].category)
      // this.setState({category: res.category, isLoading:false})
      // console.log(res[0].category)
      
    })
    
  }
  
  render (){ 
     
     console.log(this.state.category)
    if(this.state.isLoading === true){
      return(<CircularProgress/>)
    }else{
    return(
    <div className="App">
    <Header />
    <YButton />
    <CatButton />
    <FormPropsTextFields />
    <Card {...this.state}/>
    <SCard />  
    </div>
    ) 
}
  }
}


export default App;
