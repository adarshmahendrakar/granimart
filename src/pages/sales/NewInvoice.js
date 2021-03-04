import React from 'react'
import {PeopleOutlineTwoTone as PeopleOutlineTwoToneIcon,Edit as EditIcon,Delete as DeleteIcon, ControlCamera} from '@material-ui/icons';
import PageHeader from '../../components/layout/PageHeader';
import { Grid, Paper,Box } from '@material-ui/core';
import NewInvoiceForm from './NewInvoiceForm'

function NewInvoice() {
    return (
        <Grid container spacing={1}>
            <Grid xs={12} item>
            <PageHeader
                title={"New Invoice"}
                subTitle={"Add Your Invoice"}
                icon={<PeopleOutlineTwoToneIcon/>}
                />
                </Grid>
                <Grid xs={12} item>
                <NewInvoiceForm/>
                </Grid>
            
        </Grid>
    )
}

export default NewInvoice

