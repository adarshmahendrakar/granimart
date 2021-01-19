import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ButtonGroup } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 567,
    maxheight:"100%",
    border:"2px solid black",
    boxShadow: "3px 2px 2px 2px  gray",

  },
});

export default function ProductVedioCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <Typography gutterBottom variant="h4" component="h2" style={{textAlign:"center"}}>
           Company Name
          </Typography>
        <CardMedia
          component="img"
          alt="Contemplative Reptil"
          height="350"
          image="/Assets/Rectangle 46.png"
          title="Contemplative Reptile"
        />
        <CardContent style={{color:"black"}}>
          <Typography gutterBottom variant="h5" component="h2">
          <b> INDIA- TELANGANA - KARNATAKA</b>
          </Typography>
          <Typography variant="body2"  component="h4">
           No of Employess: <b> 0-1000 peoples</b>
          </Typography>
          <Typography variant="body2"  component="h4">
           Year of Establishment: <b> 1990</b>
          </Typography>
          <Typography variant="body2"  component="h4">
           Main Product: <b>Granite, Marble, Slate</b>
          </Typography>
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
        </CardContent>
        
      </CardActionArea>
            
      
     
    </Card>
  );
}
