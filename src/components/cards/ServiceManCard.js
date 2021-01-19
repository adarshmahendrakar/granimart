import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Avatar, Button, ButtonGroup, Card, CardHeader, Icon } from '@material-ui/core';
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
    maxWidth: "90%",
   
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


function Reviews(){
  return(
      <>
     <Card>
  
    
       
        
             
      <Paper  elevation={10} style={{}}>
        <Grid container spacing={2}  style={{}}>
          <Grid item>
            <ButtonBase>
            <Avatar  style={{width:"50px",height:""}}>
                     
            </Avatar>
            </ButtonBase> 
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs style={{color:"black"}}>
                <Typography gutterBottom variant="">
                  <b>AC Switch Box Installation</b>
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  Rating
                </Typography>
               
              
              </Grid>
              
            </Grid>
           
           
          </Grid>

        </Grid>
        
      </Paper>

     
         
         
            
        
           
         
               </Card>
      </>
  );
}


function getSteps() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Reviews/>;
   

    default:
      return "";
  }
}

export default function ServiceManCard() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(null);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep = 0));
  };
  const handleClose = () => {
    setActiveStep(null);
  }

  
    const data=[1,2,3,4]
  return (
    <div className={classes.root} >
        <Card>
        <CardHeader title="Choose Electricians" subheader="175 Electricians in Bangalore" style={{height:"50px"}}/>
  
    
       
         {data.map((item) => (
             
      <Paper className={classes.paper} elevation={10} style={{marginBottom:"20px"}}>
        <Grid container spacing={2}  style={{}}>
          <Grid item>
            <ButtonBase>
            <Avatar variant="square" style={{width:"20%",height:"10%"}}>
                     
            </Avatar>
            </ButtonBase> 
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs style={{color:"black"}}>
                <Typography gutterBottom variant="">
                  <b>AC Switch Box Installation</b>
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  Rating
                </Typography>
               
                <Typography gutterBottom variant="">
                  Rs.2,500/-
                </Typography>
              </Grid>
              <div>
        {activeStep === steps.length ? (
          <div></div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
          </div>
        )}
      </div>
            </Grid>
            <Grid item style={{color:"black"}}>
             <div style={{marginBottom:"10px"}}> 
              <Button
        variant="contained"
        variant="subtitle1"
        
        style={{border:"1px solid black",backgroundColor:"goldenrod",color:"black",width:"100%",height:"30px"}}>
        <b>CHOOSE</b>
      </Button>
      </div>
      <div  >
       <Button
        variant="contained"
        onClick={handleNext}
        onClose={handleClose}
        style={{border:"1px solid black",backgroundColor:"goldenrod",color:"black",width:"100%",height:"30px"}} >
        <b onClose={handleClose}>Reviews</b>
      </Button>
      </div>
      
             
            </Grid>
           
          </Grid>

        </Grid>
        
      </Paper>

         ))}
         
         
            
        
           
         
               </Card>
              
    </div>
  );
}
