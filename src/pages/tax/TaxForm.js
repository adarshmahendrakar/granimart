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
            <Controls.MyInput label='taxName' name={'taxName'}  value={values.taxName} onChange={handleInputChange}/>
          
            <Controls.Button type='submit' text='Submit'/>
        </form>
    )
}

