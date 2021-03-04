import React from 'react'

import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, Paper } from '@material-ui/core'
import Subscribe from '../../components/Subscribe'

import CartCard from '../../components/cards/CartCard'
import CardTotalCard from '../../components/cards/CardTotal'



export default function CartPage() {
    return (
        <div style={{maxWidth:"100%"}}>
        

  


        <Grid container spacing={2} style={{maxWidth:"100%"}}>
                <Grid item xs={10} lg={8} style={{marginLeft:"5%",marginBottom:"50px"}}>
                <Card style={{marginBottom:"50px"}} >
    
         <CardHeader title="MY CART(2)" style={{backgroundColor:"gold",height:"50px"}}/>
        <CardContent style={{color:"black"}}>
        <CartCard/>
        </CardContent>
        <CardActions style={{boxShadow: "3px 0 0 2px  gray"}}>
        <Button   variant="contained" style={{backgroundColor:"gold",marginLeft:"70%"}}>
          Place Order
        </Button>
       
      </CardActions>
      
     
    </Card>
    <Card  style={{border:"2px solid gray"}}>
    
         <CardHeader title="SAVED FOR CART(4)" style={{backgroundColor:"gold",height:"50px"}}/>
        <CardContent>
        <CartCard/>
        </CardContent>
       
      
     
    </Card>
                
                </Grid>
                
             <Grid item xs={10} lg={3} >
             <CardTotalCard/>
            </Grid>
        </Grid>
           



            <Subscribe/>
            
            
        </div>
    )
}
