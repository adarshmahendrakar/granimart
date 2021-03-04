import { Avatar, Box, Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import myimage from './assets/sunbscribe.png'
const useStyles=makeStyles(theme=>({
    root:{
        display:'grid',
        
    },
    item1:{
       height:'50px',
       width:'200px',
       backgroundColor:theme.palette.secondary.main,
       color:theme.palette.secondary.contrastText,
       display:'grid',
       placeItems:'center',
        gridColumn:'6',
        gridRow:'1/3',
        zIndex:100
    },
    item2:{
       backgroundImage:`url(${myimage})`,
       backgroundColor:'rgba(0,0,2,.6)',
       backgroundBlendMode:'overlay',
        height:'250px',
        width:'100%',
        gridColumn:'1/12',
        gridRow:'2/6',
        display:'grid',
        alignItems:'center',
        color:'white'
         
    },
    item3:{
      
        gridColumn:'2/11',
        gridRow:'5/12',
        overflow:'auto'
    }

}))
export default function Services() {
    const classes=useStyles();
    return (
        <Box my={5} overflow='auto'>
        <div className={classes.root}>
            <div className={classes.item1}>Services</div>
            <div className={classes.item2}><div><Typography variant='h5' className='text-right px-1'>“CUSTOMER SERVICE IS ABOUT EMPATHY”</Typography>
            <Typography className='text-right px-1'>Service to your doorstep</Typography></div>
            </div>
            <div className={classes.item3}>
                <ScroolCard/>
            </div>
        </div>
        </Box>
    )
}

const ScroolCard=()=>{
    return(
        <div style={{display:'flex',overflowY:'scrool'}}>
            {
                Array(20).fill(0).map(item=><div style={{height:'150px',minWidth:'100px',margin:'20px'}}>
                    <Avatar variant='square' style={{height:'100%',width:'100%'}}/>
                </div>)
            }
            </div>
    )
}