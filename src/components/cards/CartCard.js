import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Avatar, Button, ButtonGroup } from '@material-ui/core';
// import ProductRating from './Rating';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    maxheight:"100%",
    maxWidth: "100%",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function CartCard() {
  const classes = useStyles();
    const data=[1,2,3,4]
  return (
    <div className={classes.root}>
         {data.map((item) => (
      <Paper className={classes.paper} elevation={10} style={{border:"2px solid gold",marginBottom:"20px"}}>
        <Grid container spacing={2} style={{}}>
          <Grid item>
            <ButtonBase>
            <Avatar variant="square" style={{width:"70%",height:"10%"}}>
                     
            </Avatar>
            </ButtonBase> 
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs style={{color:"black"}}>
                <Typography gutterBottom variant="subtitle1">
                  <b>White Granite</b>
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  Seller : Rock World Granite Showroom
                </Typography>
               
                <Typography gutterBottom variant="subtitle1">
                  Rs.2,500/- ..... 40% OFF
                </Typography>
              </Grid>
              <Grid item>
              <ButtonGroup  disableElevation variant="contained" style={{}}>
        <div  style={{paddingLeft:"5px"}}>
        <Button
          variant="contained"
          
          
          style={{ backgroundColor:"#F9C74F"}}>
          Add to Cart  
        </Button>
        </div>
        <div style={{paddingLeft:"5px"}}>
        <Button
          variant="contained"
          
          
          style={{ backgroundColor:"#F9C74F"}}>
          Buy Now 
        </Button>
        </div>
      </ButtonGroup>
              </Grid>
            </Grid>
            <Grid item style={{color:"black"}}>
              <Typography variant="subtitle1">Delivery by 5-8 days</Typography>
             
            </Grid>
           
          </Grid>
        </Grid>
      </Paper>
         ))}
    </div>
  );
}
