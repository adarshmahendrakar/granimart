import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import Controls from '../../components/controls/Controls'
import OrderFormTable from './OrderFormTable'

function NewInvoiceForm() {
    return (
        <Paper style={{padding:'16px'}}>
            <Grid container spacing={1}>
            <Grid item sm={5}>
                <Controls.Input size='small' label='Customer Name' fullWidth/>
             </Grid> 
             <Grid item sm={2}>
                <Controls.Button size='medium' text='new Customer'/>
             </Grid>  
             <Grid item sm={5}>
                <Controls.Input size='small' label='Date' value={new Date()} fullWidth/>
             </Grid> 
             <Grid item sm={12}>
                <Controls.Input size='small' label='Store'  fullWidth/>
             </Grid>   
             <Grid item sm={12}>
                <OrderFormTable/>
             </Grid>  
             </Grid>   
        </Paper>
    )
}

export default NewInvoiceForm
