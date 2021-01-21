import React, { Component } from "react";
//import { Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import Axios from "axios";
import Card from "./components/Card";
//import { CircularProgress } from "@material-ui/core/";
import Header from "./components/Header";
//import YButton from "./components/YButton"
//import DButton from "./components/DButton"
import Form from "./components/Create";
//import CatButton from "./components/CatButton"

//This info is in Git now, right?
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
        <img
          className="img-responsive"
          src="https://www.plu.edu/news/wp-content/uploads/sites/573/2020/02/nobel-prize.jpg"
          alt="logo"
        />
        <div class="aboutPara">
          <p>
            When the Swedish businessman Alfred Nobel passed away in 1896, he
            left behind what was then one of the world&rsquo;s largest private
            fortunes. In his last will Nobel declared that the whole of his
            remaining fortune of 31, 5 million Swedish crowns was to be invested
            in safe securities and should constitute a fund{" "}
            <em>
              "the interest on which shall be annually distributed in the form
              of prizes to those who, during the preceding year, shall have
              conferred the greatest benefit on mankind"
            </em>
          </p>
          <h3>Will</h3>
          <p>
            The will specified in which fields the prizes should be awarded
            &ndash; physics, chemistry, medicine or physiology, literature and
            peace &ndash; and which criteria the respective prize committees
            should apply when choosing their prize recipients. According to the
            will the Nobel Peace Prize was to be awarded{" "}
            <em>
              &ldquo;to the person who shall have done the most or the best work
              for fraternity between the nations and the abolition or reduction
              of standing armies and the formation and spreading of peace
              congresses.&rdquo;
            </em>
          </p>
          <h3>Norwegian Nobel Committee</h3>
          <p>
            Alfred Nobel&rsquo;s will declared that the Nobel Peace Prize was to
            be awarded by a committee of five persons selected by the Norwegian
            Storting (parliament). The Storting accepted the assignment in April
            1897, and the Nobel Committee of the Norwegian Storting was set up
            in August of the same year. Read more about the Norwegian Nobel
            Committee (as it is now known){" "}
            <a href="https://www.nobelpeaceprize.org/Organization/Nobel-Committee">
              here
            </a>
            .
          </p>
          <h3>Nobel Foundation</h3>
          <p>
            In Sweden, however, Nobel's will triggered a lengthy legal battle
            with parts of the Nobel family. It was not until this conflict had
            been resolved, and financial matters had been satisfactorily
            arranged through the establishment of the Nobel Foundation in Sweden
            in 1900, that the Norwegian Nobel Committee and the other
            prize-awarding bodies could begin their work.
          </p>
          <h3>First award</h3>
          <p>
            The first Nobel Prizes were awarded in 1901. The Peace Prize for
            that year was shared between the Frenchman&nbsp;
            <strong>Fr&eacute;d&eacute;ric Passy</strong>&nbsp;and the
            Swiss&nbsp;<strong>Jean Henry Dunant</strong>.
          </p>
          <div>
            When the Swedish businessman Alfred Nobel passed away in 1896, he
            left behind what was then one of the world’s largest private
            fortunes. In his last will Nobel declared that the whole of his
            remaining fortune of 31, 5 million Swedish crowns was to be invested
            in safe securities and should constitute a fund "the interest on
            which shall be annually distributed in the form of prizes to those
            who, during the preceding year, shall have conferred the greatest
            benefit on mankind"
          </div>
          <h3>Will</h3>
          <div>
            The will specified in which fields the prizes should be awarded –
            physics, chemistry, medicine or physiology, literature and peace –
            and which criteria the respective prize committees should apply when
            choosing their prize recipients. According to the will the Nobel
            Peace Prize was to be awarded “to the person who shall have done the
            most or the best work for fraternity between the nations and the
            abolition or reduction of standing armies and the formation and
            spreading of peace congresses.”
          </div>
        </div>

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
