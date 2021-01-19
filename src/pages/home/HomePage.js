import React from 'react'
import ScrooView from '../../components/courosal/MyCourosol'
import { Box } from '@material-ui/core'
import FlashSale from '../../components/FlashSale'
import Subscribe from '../../components/Subscribe'

export default function HomePage() {
    return (
        <>
            <Box my={5}/>
            <ScrooView/>
            <Box my={5}/>
            <ScrooView/>
            <Box mb={5}/>
            <FlashSale/>
            <Subscribe/>
        </>
    )
}
