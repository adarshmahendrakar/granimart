import { Box, Button } from '@material-ui/core'
import React from 'react'
import {FormInput} from '../formBuilding/MyForm'
export default function LoginForm() {
    return (
        <form>
           <FormInput label='UserName/Email'/> 
           <Box mb={1}/>
           <FormInput label='password' type='password'/> 
           <Box className='text-center' py={1}>
               <Button variant='contained' color='secondary' className='px-5'>Login</Button>
               </Box>
        </form>
    )
}
