import React from 'react'
import ScrooView from '../../components/courosal/MyCourosol'
import { Box } from '@material-ui/core'
import FlashSale from '../../components/FlashSale'
import Subscribe from '../../components/Subscribe'
import ProductListComponent from '../../components/ProductListComponent'
import Services from '../../components/Services'
import HowItWorks from '../../components/HowItWorks'

export default function HomePage() {
    return (
        <>
            <Box my={5}/>
            <ScrooView/>
            <Box my={5}/>
            <ScrooView/>
            <Box mb={5}/>
            <FlashSale/> 
             <ProductListComponent/> 
            <Box mb={5}/>
            <Box my={5}>
            <Services/> 
            </Box>
            <HowItWorks/>
           
        </>
    )
}
