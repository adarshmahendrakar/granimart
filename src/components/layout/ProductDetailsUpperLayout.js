import React from 'react'

import { Avatar, Box, Grid, Paper, Typography } from '@material-ui/core'
import ScrooView from '../../components/courosal/MyCourosol'





export default function ProductUpperLayout() {
    return (
        <>
        

  


        <Grid container spacing={2}>
                <Grid item xs={12} md={8} lg={9} style={{}}>
                    <Typography style={{}}>White Granite</Typography>
                    
                    <Box my={5}/>
            <ScrooView/>
            <Box my={5}/>
           
                </Grid>
               
             
        </Grid>
           


      

            
            
        </>
    )
}
