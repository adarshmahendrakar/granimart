import { Box, Grid,makeStyles, Paper,Button } from '@material-ui/core'
import React,{useState} from 'react'
import makeData from '../../components/makedata'

import {PeopleOutlineTwoTone as PeopleOutlineTwoToneIcon,Edit as EditIcon,Delete as DeleteIcon} from '@material-ui/icons';
import TablePageContent from '../../components/TablePageContent';
import { usePopup } from '../../hooks/usePopup';
import { useConfirmation } from '../../hooks/useConfirmation';
import { AddButton, DeleteButton, EditButton } from '../../components/Buttons/AddButton';
import CurrencyForm from './CurrencyForm';
import {useCurrencyService} from './CurrencyService'
export default () =>{


    const [value,setValue]=useState({})
    const {mydata,add,update,deleteC}=useCurrencyService()
    const {MyPopup,openDialog}=usePopup(Object.keys(value).length==0?'Add Currency':'Edit Currency');
    const {ConfirmPopup,openConfirm}=useConfirmation('Are you sure','once deleted not recoverd');
    const title="Currency"
    const subtitle='Currencys'
    const icon=<PeopleOutlineTwoToneIcon fontSize="large" />
    const Form=CurrencyForm
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
            Header: "Currency Id",
            accessor: "id"
          },
          {
            Header: "Currency Name",
            accessor: "CurrencyName"
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



