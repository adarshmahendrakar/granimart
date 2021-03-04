import { Box, Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import LoginForm from '../../components/forms/LoginForm'

export default function LoginPage() {
    const history=useHistory()
    return (
        <Box display='flex' justifyContent='center' alignItems='center'
        >
            <Box  width='500px' border='1px solid rgba(0,0,0,.125)' p={3} m={4}><Box display='grid' gridTemplateColumns={'repeat(2,1fr)'}>
                  <Button  variant='contained' color='secondary' fullWidth>Login</Button>
            <Button  variant='contained' color='primary'  fullWidth onClick={()=>history.push('/home/register')}>Register</Button></Box>
            <Box my={2}/>
           
            <LoginForm/>
            <Box my={2}/>
            </Box>
        </Box>
    )
}
