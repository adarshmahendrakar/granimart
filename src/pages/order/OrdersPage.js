import React from 'react'
import {PeopleOutlineTwoTone as PeopleOutlineTwoToneIcon,Edit as EditIcon,Delete as DeleteIcon, ControlCamera} from '@material-ui/icons';
import PageHeader from '../../components/layout/PageHeader';
import { Grid, Paper,Box } from '@material-ui/core';
import makeData from '../../components/makedata'
import Controls from '../../components/controls/Controls';
import Table from '../../components/tables/Table3';

export default function ManageOrder() {
    const data = React.useMemo(() => makeData(20), []);
    const columns = React.useMemo(
        () => [
            {
                Header: "Sl No",
                
              },
          {
            Header: "Invoice Number",
            accessor: "firstName"
          },
          {
            Header: "Customer Name",
            accessor: "lastName"
          },
    
          {
            Header: "Date",
            accessor: "age"
          },
          {
            Header: "Total Amount",
            accessor: "visits"
          },
          {
            Header: "Status",
            accessor: "status"
          },
        
          {
            Header: "Actions",
            
          }
        ],
    
        []
      );
    return (
         <Grid container spacing={1}> 
         <Grid item xs={12}>   
            <PageHeader
                title={"Manage Orders"}
                subTitle={"Manage Your Orders"}
                icon={<PeopleOutlineTwoToneIcon/>}
                />
              </Grid>
              <Grid item xs={12}>   
            <SearchBar/>
              </Grid>
              <Grid item xs={12}>   
              <Paper variant="outlined">
            <Table columns={columns} data={data}/>
            </Paper>
              </Grid>


                 </Grid>
    )
}

const SearchBar=()=>{
  return  <Paper style={{padding:'25px 16px 8px 16px'}} variant='outlined'>
        <Grid container spacing={1}>
        <Grid item sm={3}>
            <Controls.Input size='small' label='Invoice Number' fullWidth InputLabelProps={{shrink:true}}/>
            </Grid>
            <Grid item sm={3}>
            <Controls.Input size='small' label='Customer Name' fullWidth InputLabelProps={{shrink:true}}/>
            </Grid>
            <Grid item sm={3}>
            <Controls.Input size='small' label='Date' fullWidth InputLabelProps={{shrink:true}}/>
            </Grid>
            <Grid item sm={3}>
            <Controls.Input size='small' label='status' fullWidth InputLabelProps={{shrink:true}}/>
            </Grid>
            <Grid item sm={3}>
            <Controls.Button text='Search' size='medium'/>
            </Grid>
            </Grid>
            
                
           
        </Paper>
}