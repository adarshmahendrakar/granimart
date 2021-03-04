import { Box, Grid,makeStyles, Paper,Button } from '@material-ui/core'
import React,{useState} from 'react'
import PageHeader from './layout/PageHeader'
import ReactTable from './tables/ReactTable'
import makeData from './makedata'
import {usePopup} from '../hooks/usePopup';
export default (props)=> {
    const {title,subTitle,icon,columns,data,add}=props
    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <PageHeader
                title={title}
                subTitle={subTitle}
                icon={icon}
                />
                </Grid>
                <Grid item xs={12}>
                    <Paper variant='outlined'>
                        <Box p={5}>
                <TableList columns={columns} data={data} add={add}/>
                
                </Box>
                </Paper>
                </Grid>
            
        </Grid>
    )
}




const TableList=({columns,data,add})=>{
    
    
    
return(<>
     <ReactTable columns={columns} data={data}  add={add}/>   
     
</>)
}