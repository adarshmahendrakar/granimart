import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React, { useState } from 'react'
import ProductCard from './cards/ProductCard'
import FiveGridLayout from './layout/FiveGridLayout'
const useStyles=makeStyles(theme=>({
    root:{},
    mytabs:{
        width:'100%',
        height:'50px',
        backgroundColor:theme.palette.primary.main,
        color:theme.palette.primary.contrastText,
        display:'flex',

    },
    item:{
        position:'relative',
        lineHeight:'50px',
        flex:1,
        textAlign:'center',
        '&+$item':{
            borderLeft:'2px solid white',
           
        }

    },
    active:{
        position:'relative',
        backgroundColor:theme.palette.secondary.main,
        color:theme.palette.secondary.contrastText,
        '&::after':{
            zIndex:-1000,
            content:'""',
            position:'absolute',
            top:'100%',
            marginTop:'-40px',
            left:'50%',
            marginLeft:'-20px',
            transform:'rotate(45deg)',
            height:'45px',
            width:'45px',
            backgroundColor:'inherit'
        }
    }
}))
export default function ProductListComponent() {
    const classes=useStyles();
    return (
<>
<MyTab classes={classes}/>
        <FiveGridLayout>
            {Array(10).fill(0).map(i=><ProductCard/>)}
        </FiveGridLayout>
        <Box  color='white'>
            s
            </Box>
        </>
    )
}

const MyTab=({classes})=>{
    const [state,setState]=useState(0)
    return(
    <Box className={classes.mytabs} mb={3}>
        <Box  className={clsx(classes.item,state==0 && classes.active)} onClick={()=>setState(0)}>Granite</Box>
        <Box  className={clsx(classes.item,state==1 && classes.active)} onClick={()=>setState(1)}>Construction Materuila</Box>
        <Box  className={clsx(classes.item,state==2 && classes.active)} onClick={()=>setState(2)}>Agricultre Products</Box>
        </Box>
    )
    }