import React from 'react'

import { Box, Grid, Paper } from '@material-ui/core'
import Subscribe from '../../components/Subscribe'
import ProductDetailsCard from '../../components/cards/ProductDetailsCard'
import ProductVedioCard from '../../components/cards/ProductDetailsVedioCard'
import ProductUpperLayout from '../../components/layout/ProductDetailsUpperLayout'
import ProductUpperRight from '../../components/layout/ProdUpperRight'



export default function ProductPage() {
    return (
        <>
        

  


        <Grid container spacing={2}>
                <Grid item xs={10} lg={5} style={{marginLeft:"5%"}}>
                <ProductUpperLayout/>
                </Grid>
                
             <Grid item xs={10} lg={5}style={{marginLeft:"5%"}}>
                <ProductUpperRight/>
            </Grid>
        </Grid>
           


        <Grid container spacing={2}>
                <Grid item xs={10} lg={5} style={{marginLeft:"5%"}}>
                <ProductDetailsCard/>
                </Grid>
             <Grid item xs={10} lg={5} style={{margin:"5%",padding:"2%"}}>
             <ProductVedioCard/>
            </Grid>
        </Grid>

            <Subscribe/>
            
            
        </>
    )
}
