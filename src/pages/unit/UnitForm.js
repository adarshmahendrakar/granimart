import React from 'react'
import Controls from '../../components/controls/Controls'
import { useForm } from '../../hooks/useForm'

export default ({value,addorEdit}) =>{
    const initialValues={}
const {values,handleInputChange}=useForm(Object.keys(value).length==0?initialValues:value,false,{})


     const handleSubmit=(e)=>{
         e.preventDefault();
         addorEdit(values)

     }
    return (
        <form onSubmit={handleSubmit}>
            <Controls.MyInput label='UnitName' name={'unitName'}  value={values.unitName} onChange={handleInputChange}/>
            <Controls.MyInput label='Unit Short Name' name={'unitShortName'}  value={values.unitShortName} onChange={handleInputChange}/>
           
            <Controls.Button type='submit' text='Submit'/>
        </form>
    )
}

