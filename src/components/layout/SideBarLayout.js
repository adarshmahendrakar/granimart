import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Accordion, AccordionDetails, AccordionSummary, FormControl, FormControlLabel, FormHelperText, FormLabel, Menu, MenuItem, RadioGroup } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Hidden from '@material-ui/core/Hidden';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles({
  root: {
    minWidth: 202,
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
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [value, setValue] = React.useState('female');
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleChange = (event) => {
    setValue(event.target.value);
  };
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <div>
      <Hidden only={["xs"]}>
    <Card className={classes.root} variant="outlined" style={{backgroundColor:"black",width:"60%", marginLeft:"20%"}}>
      <CardContent>
          <div> 
      <h1 style={{color:"gold",textAlign:"center"}}>Filter</h1>
      </div>
      <FormControl component="fieldset" style={{color:"gold"}}>
      <FormLabel component="legend" style={{color:"gold"}} >Quility</FormLabel>
      <RadioGroup aria-label="Quility" name="Quility1" value={value} onChange={handleChange} style={{marginLeft:"5%"}}>
        <FormControlLabel value="Low" control={<Radio />} label="Low" />
        <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
        <FormControlLabel value="High" control={<Radio />} label="High" />
      </RadioGroup>
      <FormLabel component="legend" style={{color:"gold"}} >Color</FormLabel>
      <RadioGroup aria-label="Color" name="Color" value={value} onChange={handleChange} style={{marginLeft:"5%"}}>
        <FormControlLabel value="red" control={<Radio />} label="red" />
        <FormControlLabel value="black" control={<Radio />} label="black" />
        <FormControlLabel value="white" control={<Radio />} label="white" />
        <FormControlLabel value="gray" control={<Radio />} label="gray" />
        <FormControlLabel value="purple" control={<Radio />} label="purple" />
        <FormControlLabel value="orange" control={<Radio />} label="orange" />
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          
         style={{height:"30px",backgroundColor:"gold",color:"black"}}>
          <Typography >More</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <RadioGroup aria-label="Color" name="Color" value={value} onChange={handleChange} style={{marginLeft:"5%"}}>
        <FormControlLabel value="red" control={<Radio />} label="red" />
        <FormControlLabel value="black" control={<Radio />} label="black" />
        <FormControlLabel value="white" control={<Radio />} label="white" />
        <FormControlLabel value="gray" control={<Radio />} label="gray" />
        <FormControlLabel value="purple" control={<Radio />} label="purple" />
        <FormControlLabel value="orange" control={<Radio />} label="orange" />
        </RadioGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      
      </RadioGroup>

      <FormLabel component="legend" style={{color:"gold",paddingTop:"20px"}} >Surface Type</FormLabel>
      <FormLabel component="legend" style={{color:"gold",paddingTop:"20px"}} >Polished</FormLabel>

      <RadioGroup aria-label="Quility" name="Quility1" value={value} onChange={handleChange} style={{marginLeft:"5%"}}>
        <FormControlLabel value="Honed Finesh" control={<Radio />} label="Honed Finesh" />
        <FormControlLabel value="Leather Finesh" control={<Radio />} label="Leather Finesh" />
        <FormControlLabel value="Flamed Finesh" control={<Radio />} label="Flamed Finesh" />
        <FormControlLabel value="Bush Hammered Finesh" control={<Radio />} label="Bush Hammered Finesh" />
      </RadioGroup>
      <FormLabel component="legend" style={{color:"gold",paddingTop:"20px"}} ></FormLabel>
      <RadioGroup aria-label="Quility" name="Quility1" value={value} onChange={handleChange} >
        <FormControlLabel value="Non-Polished" control={<Radio />} label="Non-Polished" />
      
      </RadioGroup>
    </FormControl>
      </CardContent>
     
    </Card>
    </Hidden>
</div>

<Hidden only={["lg"]} >
<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
<FilterListIcon/>
</Button>
<Menu
id="simple-menu"
anchorEl={anchorEl}
keepMounted
open={Boolean(anchorEl)}
onClose={handleClose}
>
<MenuItem onClick={handleClose}>Profile</MenuItem>
<MenuItem onClick={handleClose}>My account</MenuItem>
<MenuItem onClick={handleClose}>Logout</MenuItem>
</Menu> 
</Hidden>

</>
  );
}