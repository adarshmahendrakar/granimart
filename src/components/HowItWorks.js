import { Box, IconButton, Typography } from '@material-ui/core'
import { BookmarkBorder } from '@material-ui/icons'
import React from 'react'

export default function HowItWorks() {
    return (
        <div>
            <Typography variant='h4' className='text-center'>How it works?</Typography>
            <Box mb={2}/>
            <WorkCard/>
            
        </div>
    )
}

const WorkCard=()=>{
return (
    <Box display='grid' gridTemplateColumns='repeat(auto-fit,minmax(200px,1fr))' gridGap={15} justifyContent='center'>
<Box p={3} textAlign='center' bgcolor='#FBC936' >
    <IconButton><BookmarkBorder/></IconButton>
    <Typography>Choose the type of service</Typography>

</Box>
<Box p={3} textAlign='center' bgcolor='#FBC936' >
    <IconButton><BookmarkBorder/></IconButton>
    <Typography gutterBottom>Choose your time slot</Typography>
    <small>We service from 9am-9pm</small>

</Box>
<Box p={3} textAlign='center' bgcolor='#FBC936' >
    <IconButton><BookmarkBorder/></IconButton>
    <Typography gutterBottom>Hassle-free service</Typography>
    <small>Our proffessional get in touch with you one hour before the service</small>

</Box>
</Box>
);
}