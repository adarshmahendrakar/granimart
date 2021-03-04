import { Box, Grid,makeStyles, Paper,Button } from '@material-ui/core'
import React,{useState} from 'react'
import makeData from '../../components/makedata'

import {PeopleOutlineTwoTone as PeopleOutlineTwoToneIcon,Edit as EditIcon,Delete as DeleteIcon} from '@material-ui/icons';
import TablePageContent from '../../components/TablePageContent';
import { usePopup } from '../../hooks/usePopup';
import { useConfirmation } from '../../hooks/useConfirmation';
import RegisterForm from '../../components/forms/RegisterForm';
import { AddButton, DeleteButton, EditButton } from '../../components/Buttons/AddButton';
import CategoryForm from './CategoryForm';
import {useCategoryService,Actions} from './CategoryService'
export default () =>{


    const [value,setValue]=useState({})
    const {mydata,add,update,deleteC}=useCategoryService()
    const {MyPopup,openDialog}=usePopup(Object.keys(value).length==0?'Add Category':'Edit Category');
    const {ConfirmPopup,openConfirm}=useConfirmation('Are you sure','once deleted not recoverd');
    const title="Category"
    const subtitle='Form design with validation'
    const icon=<PeopleOutlineTwoToneIcon fontSize="large" />
    const Form=CategoryForm
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
            Header: "Category Id",
            accessor: "id"
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



