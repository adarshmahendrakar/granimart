import { Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import { MyCheckBox, MyInput, MyPassword, MyRadioButton, MySelect } from './MyInput'



  
function GetInput({type,value,...props}){
    switch(type){
        case 'checkbox':return <MyCheckBox value={value} {...props}/>;
        case 'select':return <MySelect value={value} {...props}/>;
        case 'radio':return <MyRadioButton value={value} {...props}/>;
        case 'password':return  <MyPassword type={type} {...props}/>
        case 'file':return  <MyInput type={type} {...props}/>
        default: return <MyInput type={type} value={value} {...props}/>
    }
}

export default function MyForm({inputs,button,handleSubmit,handleChange,values,errors}) {
    const classes=useStyles();
    const onSubmit=(e)=>{
        e.preventDefault();
        handleSubmit()
    }
    return (
        
        <form className={classes.root} onSubmit={onSubmit}>
            <Grid container spacing={1}>
            {inputs?.map(item=>{
                const {xs,sm,md,lg,name,...input}=item;
                return <Grid item xs={xs||12} sm={sm} md={md} lg={lg}>
                <GetInput  {...input} name={name} label={name} value={values[name]}  onChange={handleChange}/>
               
                </Grid>
            })}
            
                {button}
                
           
           </Grid>
        </form>
    )
}

export const FormInput=GetInput;