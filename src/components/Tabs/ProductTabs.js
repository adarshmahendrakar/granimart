import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Divider } from '@material-ui/core';
import ProductCard from '../cards/ProductCard';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" 
            style={{backgroundColor:"black",
            color:"gold", 
            position: "relative",
            top: "50%",
            width:"1000px",
            margin: "10% 0 0% 45%",
        }}
            >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          
        >
          <Tab label="Item One" {...a11yProps(0)} style={{backgroundColor:"black",color:"gold",borderRight:"1px solid white"}}/>
          <Tab label="Item Two" {...a11yProps(1)} style={{backgroundColor:"black",color:"gold",borderRight:"1px solid white"}} />
          <Tab label="Item Three" {...a11yProps(2)} style={{backgroundColor:"black",color:"gold",borderRight:"1px solid white"}}/>
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} >
          {/* <ProductCard/> */}
          granite
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {/* <ProductCard/> */}
          agri
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          {/* <ProductCard/> */}
          construction
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
