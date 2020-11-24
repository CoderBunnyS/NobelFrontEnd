import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
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
      <div className="grid">
      <Grid
        container 
        display="grid"
        direction="row"
        justify="space-around"
        alignItems="flex-start"
        
      >
      {/* props.data.map((card) = () => {
    
      }) */}
      {/* {props.length !== 0 
      {/* ? props.data.map((card) */}
       {/* => ( */}
      <div className="row">  
        <Card className="root, {classes.root}, col-lg-3" id="card">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Nobel Peace Prize Winner
        </Typography>
        <Typography variant="h5" component="h2" className="category">
        {props.year}<br />
        {props.category}
        <br />
        </Typography>
        <Typography  variant="h5" className={classes.pos} color="textSecondary">
          {props.laureates.map((item, index) => (<div>{item.firstname} {item.surname}<br />
          </div>))}
        </Typography>
        <Typography  variant="h5" id="motivation">
          {props.laureates.map((item, index) => (<div>
          <div class="motives">Winner's Motivation: </div>{item.motivation}
          </div>))}
        </Typography>
        <Typography variant="body2" component="p">
          
          
        </Typography>
        <Typography variant="body2" component="p">
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Delete Winner</Button> */}
        
        <DButton id={props._id}/>
        <Edit id={props._id}/>
      </CardActions>
    </Card> 
    </div>
    </Grid>  
    </div>
    </div>
    
  );
      }









