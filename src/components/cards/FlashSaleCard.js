import { Avatar, Box, Typography } from '@material-ui/core'
import React from 'react'

export default function FlashSaleCard() {
    return (
        <Box  margin='5px' minWidth='200px' flex='1'>
            <Avatar variant='square' style={{height:'230px',width:'100%'}}/>
           
            <Typography className='font-weight-bold text-center' gutterBottom>Alaska brown marble</Typography>
            <Typography variant='caption' gutterBottom className='text-centerpx-1'><span>Rs 4200</span>
            <Box component='small' mx={2} style={{textDecoration: 'line-through'}}>Rs 7000</Box>
            <Box component='b' mx={2} color='#F9C74F'>15%off</Box>
            </Typography>
            
        </Box>
    )
}
