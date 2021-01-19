import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Avatar, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
  bullet: {
    display: "inline-block",
    margin: "10px 5px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function ProductCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const data = [1, 2, 3, 4, 5,6,7, 10,11,12,13,1, 2, 3, 4, 5,6,7, 10,11,12,13,];
  return (
    <>
    
      <Grid container spacing={3} style={{width:"100%"}}>
        {data.map((row) => (
          <div>
            <Grid
              item
              xs={4}
              justifyContent="center"
              spacing={3}
              style={{ padding: "15px", justifyContent: "center" }}
            >
              <Card
                className={classes.root}
                variant="outlined"
                justifyContent="center"
                style={{
                  border: "4px solid gray",
                  width: "165px",
                  height: "195px"
                }}
              >
                <Avatar
                  variant="square"
                  className={classes.square}
                  justifyContent="center"
                  style={{
                    border: "2px solid white",
                    width: "165px",
                    height: "195px"
                  }}
                ></Avatar>
              </Card>

              <Typography style={{ textAlign: "center" }}>
                Product
              </Typography>
            </Grid>
          </div>
        ))}
      </Grid>
      
    </>
  );
}
