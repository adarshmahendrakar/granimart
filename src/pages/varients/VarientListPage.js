import { Box, Grid,makeStyles, Paper,Button } from '@material-ui/core'
import React,{useState} from 'react'
import makeData from '../../components/makedata'

import {PeopleOutlineTwoTone as PeopleOutlineTwoToneIcon,Edit as EditIcon,Delete as DeleteIcon} from '@material-ui/icons';
import TablePageContent from '../../components/TablePageContent';
import { usePopup } from '../../hooks/usePopup';
import { useConfirmation } from '../../hooks/useConfirmation';
import { AddButton, DeleteButton, EditButton } from '../../components/Buttons/AddButton';
import VarientForm from './VarientForm';
import {useVarientService} from './VarientService'
export default () =>{


    const [value,setValue]=useState({})
    const {mydata,add,update,deleteC}=useVarientService()
    const {MyPopup,openDialog}=usePopup(Object.keys(value).length==0?'Add Varient':'Edit Varient');
    const {ConfirmPopup,openConfirm}=useConfirmation('Are you sure','once deleted not recoverd');
    const title="Varient"
    const subtitle='Varients'
    const icon=<PeopleOutlineTwoToneIcon fontSize="large" />
    const Form=VarientForm
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
            Header: "Varient Id",
            accessor: "id"
          },
          {
            Header: "Varient Name",
            accessor: "varientName"
          },
          {
            Header: "Category Name",
            accessor: "categoryName"
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



