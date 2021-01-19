import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Avatar, Button } from '@material-ui/core';
// import ProductRating from './Rating';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    maxheight:"100%",
    maxWidth: 482,
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

export default function ProductDetailsCard() {
  const classes = useStyles();
    const data=[1,2,3,4]
  return (
    <div className={classes.root}>
         {data.map((item) => (
      <Paper className={classes.paper} elevation={10} style={{border:"2px solid gold",marginBottom:"20px"}}>
        <Grid container spacing={2} style={{}}>
          <Grid item>
            <ButtonBase className={classes.image}>
            <Avatar variant="square" className={classes.square}>
                     
            </Avatar>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <b>Company Name</b>
                </Typography>
               {/* <ProductRating/> */}
                <Button variant="contained"  color="primary">
                <PhoneAndroidIcon/>
                    Contact
                </Button>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  bdshgiusdb jsdbc
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="subtitle1"><b>TrustSeal Varified</b></Typography>
              <Button variant="contained"  style={{backgroundColor:"black",color:"white",marginTop:"50%"}}>
                
                    Add Request
                </Button>
            </Grid>
           
          </Grid>
        </Grid>
      </Paper>
         ))}
    </div>
  );
}
