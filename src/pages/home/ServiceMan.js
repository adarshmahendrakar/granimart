import React from 'react'
import ScrooView from '../../components/courosal/MyCourosol'
import { Box, Card, CardActions, CardContent, Grid, Paper, Typography } from '@material-ui/core'

import Subscribe from '../../components/Subscribe'

import RepairFixTabs from '../../components/Tabs/RepairFixTab';
import Button from '@material-ui/core/Button/Button';
import RepairFixCard from '../../components/cards/RepairFixCard';
import ServiceManCard from '../../components/cards/ServiceManCard';


export default function ServiceManPage() {
    return (
        <>
        <Box my={5}/>
            <ScrooView/>
                


            {/* <RepairFixTabs/> */}
            
            


        <Grid container spacing={3} style={{marginTop:"50px"}}>
                <Grid item xs={12} lg={3} md={3}>
                <Card  variant="outlined" >
      <CardContent >
     <Typography style={{textAlign:"center",Lineheight :"102px"}}><b>Electrician need for ?</b></Typography>
      <CardActions style={{color:"black",paddingBottom:"20px"}} >
        <Button size="small" variant="contained" style={{backgroundColor:"#F9C74F",color:"black",width:"100%",padding:"10px"}}>
            Repairs & Fixes
        </Button>
       
      </CardActions>
      <CardActions style={{color:"black",paddingBottom:"20px"}}>
        <Button size="small" variant="contained" style={{backgroundColor:"black",color:"goldenrod",width:"100%",padding:"10px"}}>
        Electricity Breakdown
        </Button>
        
      </CardActions>
      <CardActions style={{color:"black",paddingBottom:"20px"}}>
        <Button size="small" variant="contained" style={{backgroundColor:"black",color:"goldenrod",width:"100%",padding:"10px"}}>
        Electrical wiring
        
        </Button>
        
      </CardActions>
      <CardActions style={{color:"black",paddingBottom:"20px"}}>
        <Button size="small" variant="contained" style={{backgroundColor:"black",color:"goldenrod",width:"100%",padding:"10px"}}>
       
        Installation Service
        </Button>
        
      </CardActions>
      
     
     
      </CardContent>
    </Card>
                </Grid>
             <Grid item xs={12} lg={8}  md={8}>
                 <ServiceManCard/>   
            </Grid>
        </Grid>

            <Subscribe/>
            
            
        </>
    )
}
