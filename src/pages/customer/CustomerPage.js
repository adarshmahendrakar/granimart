import { Box, Grid,makeStyles, Paper,Button } from '@material-ui/core'
import React,{useState} from 'react'
import makeData from '../../components/makedata'

import {PeopleOutlineTwoTone as PeopleOutlineTwoToneIcon,Edit as EditIcon,Delete as DeleteIcon} from '@material-ui/icons';
import TablePageContent from '../../components/TablePageContent';
import { usePopup } from '../../hooks/usePopup';
import { useConfirmation } from '../../hooks/useConfirmation';
import RegisterForm from '../../components/forms/RegisterForm';
import { AddButton, DeleteButton, EditButton } from '../../components/Buttons/AddButton';

import {useCustomerService} from './CustomerService'
import CustomerForm from './CustomerForm';
export default () =>{


    const [value,setValue]=useState({})
    const {mydata,add,update,deleteC}=useCustomerService()
    const {MyPopup,openDialog}=usePopup(Object.keys(value).length==0?'Add Customer':'Edit Customer');
    const {ConfirmPopup,openConfirm}=useConfirmation('Are you sure','once deleted not recoverd');
    const title="Customer"
    const subtitle='Form design with validation'
    const icon=<PeopleOutlineTwoToneIcon fontSize="large" />
    const Form=CustomerForm
    const addorEdit=(v)=>{
        Object.keys(value).length==0?add(v):update(v)
        openDialog()
    }
    const data = React.useMemo(() =>  mydata||[], [mydata]);

    const Add=<AddButton  onClick={()=>{setValue({
    });openDialog()}}> 
        Add New
        </AddButton>
    const columns = React.useMemo(
        () => [
          {
            Header: "Customer Id",
            accessor: "id"
          },
          {
            Header: "Customer Name",
            accessor: "customerName"
          },
          {
            Header: "Customer Address",
            accessor: "customerAddress"
          },
          {
            Header: "Customer Phone",
            accessor: "customerPhone"
          },
    
          {
            Header: "Actions",
            Cell: ({ row }) => (
              <>
                <EditButton
                 
                 onClick={()=>{setValue(row.original);openDialog()}}
                >
                 Edit
                </EditButton>
                <DeleteButton 
                  onClick={() => openConfirm(()=>deleteC(row.original))}
                >
                  Delete
                </DeleteButton>
              </>
            )
          }
        ],
    
        []
      );
    
    
    return (
        <>
        <TablePageContent
        add={Add}
        columns={columns}
        data={data}
        title={title}
        subTitle={subtitle}
        icon={icon}
        />
        <MyPopup fullwidth><Form addorEdit={addorEdit} value={value}/></MyPopup>
        <ConfirmPopup/>
        </>
        )
}



