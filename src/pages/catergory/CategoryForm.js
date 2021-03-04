import React from 'react'
import Controls from '../../components/controls/Controls'
import { useForm } from '../../hooks/useForm'

export default function CategoryForm({value,addorEdit}) {
    const initialValues={categoryName:''}
const {values,handleInputChange}=useForm(Object.keys(value).length==0?initialValues:value,false,{})


     const handleSubmit=(e)=>{
         e.preventDefault();
         addorEdit(values)

     }
    return (
        <form onSubmit={handleSubmit}>
            <Controls.MyInput label='categoryName' name={'categoryName'}  value={values.categoryName} onChange={handleInputChange}/>
            <Controls.Button type='submit' text='Submit'/>
        </form>
    )
}

