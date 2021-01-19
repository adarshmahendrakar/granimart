import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import backImage from "./Assets/Rectangle 46.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    
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

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} style={{border:"2px solid black",minWidth:"70%",minheight:"100%",backgroundImage: `url(${backImage})`}}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
           <h1 style={{ position: "relative",
           width:"100%"}}> Subscribe to our newsletter and
         receive exclusive offers every week</h1>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container  spacing={2}>
              <Grid item xs={8}>
              <input  placeholder="Enroll your name" style={{borderRadius:"30px",width:"100%",height:"50px", position: "relative",
            
            
           }} />
        
              </Grid>
             
         
            <Grid item xs={4}>
            <button  style={{borderRadius:"30px",width:"100%",height:"50px", position: "relative",
            backgroundColor:"#F9C74F"
            
           }}>Subscribe</button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}