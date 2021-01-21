import React, { Component } from "react";
import "./App.css";
import "./App.css";
import Axios from "axios";
import Card from "./components/Card";
//import { CircularProgress } from "@material-ui/core/";
import Header from "./components/Header";
import Para from "./components/para";
import Form from "./components/Create";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "",
      isLoading: true,
      category: "",
      firstname: "",
      surname: "",
      results: [],
    };
  }
  componentDidMount() {
    console.log("mounted");
    let url = "https://nobelprizes.herokuapp.com/";

    Axios.get(url).then((res) => {
      this.setState({ results: res.data });

      //return res.data
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Para />
        <Form />
        {this.state.results.map((item, index) => (
          <div key={index}>
            {" "}
            <Card {...item} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
