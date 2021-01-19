import React from 'react'
import ProductCard from './../../components/cards/ProductCard';
import ScrooView from '../../components/courosal/MyCourosol'
import { Box, Grid, Paper } from '@material-ui/core'
import FlashSale from '../../components/FlashSale'
import Subscribe from '../../components/Subscribe'
import ProductTabs from '../../components/Tabs/ProductTabs';
import SideLeft from '../../components/layout/SideBarLayout';
import ProductChips from '../../components/layout/ProductChip';


export default function ProductPage() {
    return (
        <>
        <Box my={5}/>
            <ScrooView/>
                <Box my={4}/>
                    <ScrooView/>
        <Box mb={4}/>


            <ProductTabs/>
            <ProductChips/>


        <Grid container spacing={3}>
                <Grid item xs={4}>
                    <SideLeft/>
                </Grid>
             <Grid item xs={8}>
                    <ProductCard/>
            </Grid>
        </Grid>

            <Subscribe/>
            
            
        </>
    )
}
