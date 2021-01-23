import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import Grid from "@material-ui/core/Grid";
import "./card.css"
import DButton from "./DButton"
import Edit from "./Edit"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function SimpleCard(props) {
  const classes = useStyles();
  
  //console.log(props)

  return ( 
    <div className="grid-container"> 
      <Card className="root, {classes.root}, col-lg-3" id="card">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom variant="h2">
          {/* <h2>Nobel Peace Prize Winners in {props.year} for the category of {props.category}</h2> */}
        </Typography>
        <Typography  variant="h2" className={classes.pos} color="textSecondary">
    
          {props.laureates.map((item, index) => (<div className = "names">{props.year} <br></br>{item.firstname} {item.surname} won in the category of {props.category} <br></br> Their motivation was <br></br> {item.motivation}<br></br> <hr></hr>       
          {/* {props.laureates.map((item, index) => (<div>
          <div class="motives">Winner's Motivation: </div>
          </div>))} */}

          {/* <br /> */}
          </div>))}
        </Typography>
      </CardContent>
      <CardActions>  
        <DButton id={props._id}/>
        <Edit id={props._id}/>
      </CardActions>
    </Card> 
    </div>
    
  );
      }









