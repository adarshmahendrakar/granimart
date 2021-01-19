import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardActionArea, CardHeader, FormControl, FormControlLabel, Grid, Radio, RadioGroup } from '@material-ui/core';
import CardTotalCard from '../../components/cards/CardTotal';
import Subscribe from '../../components/Subscribe'


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      color:"black"
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
     endIcon: {
    position: 'absolute',
    right: '5rem'
  },
  });

export default function PaymentPage() {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    const classes = useStyles();

    return (
        <div style={{maxWidth:"100%"}}>
        

  


        <Grid container spacing={2} style={{maxWidth:"100%"}}>
        <Grid item xs={10} lg={2} style={{}}>
        <Card  variant="outlined" >
      <CardContent >
     
      <CardActions style={{color:"black",paddingBottom:"50px"}} >
        <Button size="small" variant="contained" style={{backgroundColor:"gray",color:"black",width:"100%",padding:"10px"}}>
        LOGIN/SIGNUP
        </Button>
       
      </CardActions>
      <CardActions style={{color:"black",paddingBottom:"50px"}}>
        <Button size="small" variant="contained" style={{backgroundColor:"gray",color:"black",width:"100%",padding:"10px"}}>
        Order summary
        </Button>
        
      </CardActions>
      <CardActions style={{color:"black",paddingBottom:"50px"}}>
        <Button size="small" variant="contained" style={{backgroundColor:"#F9C74F",color:"black",width:"100%",padding:"10px"}}>
        Payment options
        </Button>
        
      </CardActions>
      
     
     
      </CardContent>
    </Card>
            </Grid>




                <Grid item xs={10} lg={6} style={{marginLeft:"5%",marginBottom:"50px"}}>
                <Card style={{marginBottom:"50px"}} >
                        <CardActionArea>
                            <CardHeader title="PAYMENT OPTIONS" style={{backgroundColor:"#F9C74F",height:"50px",textAlign:"center",color:"black"}}/>
                                <CardContent style={{color:"black"}}>
                                    <FormControl component="fieldset">
                                            <RadioGroup aria-label="payment" name="payment" value={value} onChange={handleChange}>
                                                <CardActions >
                                                    <FormControlLabel value="phonepay" control={<Radio />} label="phonepay" />
                                                        <Button  classes={{
                                                                  endIcon: classes.endIcon,
                                                                }}  variant="contained" style={{backgroundColor:"#F9C74F",marginLeft:"auto",}}>
                                                                Continue 
                                                        </Button> 
                            </CardActions>
                            <CardActions >
                                <FormControlLabel value="GooglePay" control={<Radio />} label="GooglePay" />     
                                <Button   variant="contained" style={{backgroundColor:"#F9C74F",marginLeft:"auto"}}>
                                    Continue
                                </Button>  
                            </CardActions>
                            <CardActions >
                            <FormControlLabel value="PayPal" control={<Radio />} label="PayPal" />
                            <Button   variant="contained" style={{backgroundColor:"#F9C74F",marginLeft:"auto"}}>
                                Continue
                            </Button> 
                            </CardActions>
                            <CardActions >
                            <FormControlLabel value="RazorPay" control={<Radio />} label="RazorPay" />
                            <Button   variant="contained" style={{backgroundColor:"#F9C74F",marginLeft:"auto"}}>
                                Continue
                            </Button> 
                            </CardActions>

                    
                    

                    </RadioGroup>
                    </FormControl>
                            </CardContent>
                          
                        </CardActionArea>
     
    </Card>
 
                
                </Grid>
                
             <Grid item xs={10} lg={3} >
             <CardTotalCard/>
            </Grid>
        </Grid>
           



            <Subscribe/>
            
            
        </div>
    )
}
