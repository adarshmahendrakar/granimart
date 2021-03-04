import React from 'react'
import MUIDataTable from "mui-datatables";
import { FormControlLabel, TextField } from '@material-ui/core';
const columns = [{label:"Name",name:'name'},{label:'Title',name:'title'},{label:'Edit',name:'edit',options: {
  customBodyRender: (value, tableMeta, updateValue) => {
      return (
          <button onClick={() => console.log(value, tableMeta) }>
              Edit
          </button>
      )
  }
}}];

const data = [
  {name: "Gabby George", title: "Business Analyst", location: "Minneapolis", age: 30, salary: "$100,000"}      
];

const options = {
  filterType: 'dropdown',
  
  
};


export default function Editable() {
    
  
    return (
        <MUIDataTable
        
        data={data}
        columns={columns}
        options={options}
      />
    )
  }
  
  