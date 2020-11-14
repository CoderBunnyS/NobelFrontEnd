import React from "react";
//import Category from "./Category";
//import PrizeYear from "./PrizeYear";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import "./card.css"

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
  

  return (
    <div className="grid-container">
      <div className="grid">
      {/* {console.log(props.year.data)}
      {console.log(props.category.data)} */}
      <Grid
        container 
        display="grid"
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        
      >
      {/* {props.length !== 0 */}
      {/* ? props.data.map((card) */}
       {/* => ( */}
        <div className="grid">
        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
        {/* <p> Category: {card.category} </p> 
        <p> Year:{card.year} </p> */}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> 
    </div>
    
      ))
      {/* : null} */}
      
    </Grid>  
    </div>
    </div>
    
  );
}









