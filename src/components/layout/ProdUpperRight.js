import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Box, Button, ButtonGroup, Grid, Paper, Typography } from '@material-ui/core'
import ScrooView from '../../components/courosal/MyCourosol'
const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%"
    },
    button: {
      marginRight: theme.spacing(1)
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  }));
 
function ProductDetails(){
    return (

        <>
         <Grid container spacing={2}>
                <Grid item xs={12} md={8} lg={12} style={{}}>
        <div style={{color:"black",padding:"10px"}}>
        <Typography style={{color:"black",padding:"10px"}}>Type :<b>  Granite </b></Typography>
        <Typography style={{color:"black",padding:"10px"}}>Color : <b> White </b></Typography>
        <Typography style={{color:"black",padding:"10px"}}>Material : <b> G375vGranite </b></Typography>
        <Typography style={{color:"black",padding:"10px"}}>Material origin  : <b> INDIA </b></Typography>
        <Typography style={{color:"black",padding:"10px"}}>Min Order : : <b> 10 pieces </b></Typography>
        <Typography style={{color:"black",padding:"10px"}}>Packaging detail   : <b> Wooden crates </b></Typography>
        <Typography style={{color:"black",padding:"10px"}}>Delivery detail  : <b> Depending on sizes </b></Typography>
        </div>

        </Grid>
        
            
        <ButtonGroup  disableElevation variant="contained" style={{marginLeft:"30%"}}>
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

        
        

        </>

    );
}

function ProductFeatures() {
    return(

        <>
        <div style={{color:"black",padding:"10px"}}>
        <Typography style={{color:"black",padding:"10px"}}> <b>* Attractive Color </b></Typography>
        <Typography style={{color:"black",padding:"10px"}}> <b>* Durability</b> </Typography>
        <Typography style={{color:"black",padding:"10px"}}><b>* Heat Resistent</b></Typography>
        <Typography style={{color:"black",padding:"10px"}}><b>* Low Maintaince</b></Typography>
        <Typography style={{color:"black",padding:"10px"}}><b>* Multi Purpose</b></Typography>
     
        </div>
        </>
    );
}

function getSteps() {
    return ["Select campaign settings", "Create an ad group", "Create an ad"];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <ProductDetails/>;
      case 1:
        return <ProductFeatures/>;
    
  
      default:
        return "";
    }
  }



export default function ProductUpperRight() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => (prevActiveStep = 0));
    };
  
    const handleNextFeature = () => {
      setActiveStep((prevActiveStep) => (prevActiveStep = 1));
    };
  
    return (
        <>
        <Grid container spacing={2}>
                <Grid item xs={12} md={8} lg={9} style={{}}>
                <div className={classes.root}>
      <ButtonGroup disableElevation variant="contained" color="primary">
        <Button
          variant="contained"
          
          onClick={handleNext}
          className={classes.button}
          style={{ backgroundColor:"black"}}>
          Product Details
        </Button>
        <Button
          variant="contained"
          
          onClick={handleNextFeature}
          className={classes.button}
          style={{ backgroundColor:"black"}}>
          Product Features
        </Button>
      </ButtonGroup>

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
    </div>
  
                </Grid>
               
             
        </Grid>
           


      

            
            
        </>
    )
}



