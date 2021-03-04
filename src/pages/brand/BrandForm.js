import React from 'react'
import Controls from '../../components/controls/Controls'
import { useForm } from '../../hooks/useForm'

export default ({value,addorEdit}) =>{
    const initialValues={brandName:'',brandImage:'',brandWebsite:''}
const {values,handleInputChange}=useForm(Object.keys(value).length==0?initialValues:value,false,{})


     const handleSubmit=(e)=>{
         e.preventDefault();
         addorEdit(values)

     }
    return (
        <form onSubmit={handleSubmit}>
            <Controls.MyInput label='brandName' name={'brandName'}  value={values.brandName} onChange={handleInputChange}/>
            <Controls.MyInput label='brandImage' name={'brandImage'}  value={values.brandImage} onChange={handleInputChange}/>
            <Controls.MyInput label='brandWebsite' name={'brandWebsite'}  value={values.brandWebsite} onChange={handleInputChange}/>
            <Controls.MyInput label='brandIcon' name={'brandIcon'}  value={values.brandIcon} onChange={handleInputChange}/>
          
            <Controls.Button type='submit' text='Submit'/>
        </form>
    )
}

