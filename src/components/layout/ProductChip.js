import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

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
  const classes = useStyles();


  const data=[
     "Granite", "Marble", "Limestone","Basalt","Slate","Grave Stone","Head Stone","Quartz","Bulding Stone","Landscape Stone","Ledge Stone","Kitchen top, Bath top, Sink"
  ]

  return (
    <div className={classes.root}>

     {data.map((item) => (
<>
      <Chip label={item} padding="10px" />
      </>

     ))}
     
    </div>
  );
}
