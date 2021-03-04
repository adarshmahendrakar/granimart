import {makeStyles} from '@material-ui/core'
import React, { useState } from 'react'
import Navbar from '../headers/DashboardHeader'
import Sidebar from '../sidebar/Sidebar'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
   searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    },
  appBar: {
   
    backgroundColor:'#fff',
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor:'aliceblue',
    minHeight:'100vh'
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  active:{
    backgroundColor:theme.palette.secondary.main
  }
}));

export default function DashboardLayout({children,menus}) {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    return (
        <div className={classes.root}>
           <Navbar classes={classes} handleDrawerToggle={handleDrawerToggle} />
      <Sidebar
        menus={menus}
        classes={classes}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      /> 
      <main className={classes.content}>
        {children}
      </main>
        </div>
    )
}

