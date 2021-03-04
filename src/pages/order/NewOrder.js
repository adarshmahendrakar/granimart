import React from 'react'
import {PeopleOutlineTwoTone as PeopleOutlineTwoToneIcon,Edit as EditIcon,Delete as DeleteIcon, ControlCamera} from '@material-ui/icons';
import PageHeader from '../../components/layout/PageHeader';
import { Grid, Paper,Box } from '@material-ui/core';
import OrderForm from './OrdersForm'

function NewOrder() {
    return (
        <Grid container spacing={1}>
            <Grid xs={12} item>
            <PageHeader
                title={"New Order"}
                subTitle={"Add Your Order"}
                icon={<PeopleOutlineTwoToneIcon/>}
                />
                </Grid>
                <Grid xs={12} item>
                <OrderForm/>
                </Grid>
            
        </Grid>
    )
}

export default NewOrder

