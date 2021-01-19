import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Avatar, Button, ButtonGroup, Card, Icon } from '@material-ui/core';
// import ProductRating from './Rating';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    maxheight:"100%",
    maxWidth: "70%",
   
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
  button:{
    '& > *': {
      margin: theme.spacing(1),
      backgroundColor:"black",
      color:"white"
    },
  },
}));

export default function RepairFixCard() {
  const classes = useStyles();
    const data=[1,2,3,4]
  return (
    <div className={classes.root} style={{marginTop:"50px"}}>
        <Card style={{boxShadow:"5px 10px 0 0px gray",border:"1px solid black"}}>
        <div className={classes.button}>
      <Button variant="contained" >
      Switch & Socket
      </Button>
      <Button variant="contained" >
        Fan
      </Button>
      <Button variant="contained" >
        Light
      </Button>
      <Button variant="contained" >
      Chandeller
      </Button>
      <Button variant="contained" >
      Appliance
      </Button>
      <Button variant="contained" >
      Door Bell
      </Button>

    </div>
       <Grid  xs={12} lg={2} style={{backgroundColor:"black"}}>

         <Button
        variant="contained"
        variant="subtitle1"
        
        startIcon={<Icon style={{border:"1px solid goldenrod",marginRight:"30px"}}>1</Icon>}
        endIcon={<AddIcon style={{backgroundColor:"white",marginLeft:"30px"}}/>}
      style={{border:"1px solid black", color:"goldenrod",minwidth:"100%",height:"50px",backgroundColor:"black",}}>
        Rs.219
      </Button>
       
         </Grid>
         {data.map((item) => (
             
      <Paper className={classes.paper} elevation={10} style={{ border: "0.2px solid rgba(0, 0, 0, 0.38)",
        borderbox:"5px 0 0 5px gray",marginBottom:"20px"}}>
        <Grid container spacing={2}  style={{}}>
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
                  <b>AC Switch Box Installation</b>
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  Rating
                </Typography>
               
                <Typography gutterBottom variant="subtitle1">
                  Rs.2,500/-
                </Typography>
              </Grid>
             
            </Grid>
            <Grid item style={{color:"black"}}>
              
              <Button
        variant="contained"
        variant="subtitle1"
        color="primary"
        
        endIcon={<AddIcon style={{backgroundColor:"goldenrod"}}/>}
      style={{border:"1px solid black"}}>
        Add
      </Button>
             
            </Grid>
           
          </Grid>

        </Grid>
        
      </Paper>

         ))}
         
         
            
        
           
         
               </Card>
              
    </div>
  );
}
