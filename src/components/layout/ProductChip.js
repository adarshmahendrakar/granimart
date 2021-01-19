import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import { Hidden, List, Menu } from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
    
    },
  },
}));

export default function ProductChips() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();


  const data=[
     "Granite", "Marble", "Limestone","Basalt","Slate","Grave Stone","Head Stone","Quartz","Bulding Stone","Landscape Stone","Ledge Stone","Kitchen top, Bath top, Sink"
  ]

  return (
    <>
      <div className={classes.root}>
    <Hidden only="xs">  
     {data.map((item) => (
<>
      <Chip label={item} padding="10px" />
      </>

     ))}
     </Hidden>
     </div>
     <Hidden only="lg"> 
     <Button aria-controls="simple-menu" variant="contained"  aria-haspopup="true" onClick={handleClick} style={{backgroundColor:"goldenrod",marginLeft:"20%"}}>
        Types of Stones
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {data.map((item) => (
<>
<List style={{backgroundColor:"black",minwidth:"100%"}} >
      <Button style={{backgroundColor:"gold",minwidth:"100%",marginLeft:"10%",marginRight:"10%"}}>{item}</Button>
      </List>
      </>

     ))}
      </Menu>

    
     </Hidden>
    </>
  );
}
