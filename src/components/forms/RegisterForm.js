import { Button, Grid } from '@material-ui/core'
import React from 'react'
import { FormInput } from '../formBuilding/MyForm'

export default function RegisterForm() {
    return (
        <form>
            <Grid container spacing={1}>
            <Grid item md={6} xs='12'> <FormInput label='firstName' md={6}/></Grid>
            <Grid item md={6} xs='12'> <FormInput label='lastName' md={6}/></Grid>
            <Grid item xs={12}> <FormInput label='Email'/></Grid>
            <Grid item xs={12}> <FormInput label='Phone' /></Grid>
            <Grid item xs={12}> <FormInput label='Address' multiline={true} rows='4'/></Grid>
            <Grid item xs='12' md='6'> <FormInput type='password' label='Password' md={6}/></Grid>
            <Grid item xs='12' md='6'><FormInput type='password' label='Confirm Password' md={6}/></Grid>
            <Grid item xs={12} className='text-center'> <Button variant='contained' color='secondary'>Submit</Button></Grid>
            </Grid>
            
        </form>
    )
}
