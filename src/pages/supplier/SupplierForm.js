import React from 'react'
import Controls from '../../components/controls/Controls'
import { useForm } from '../../hooks/useForm'

export default function CustomerForm({value,addorEdit}) {
    const initialValues={}
const {values,handleInputChange}=useForm(Object.keys(value).length==0?initialValues:value,false,{})


     const handleSubmit=(e)=>{
         e.preventDefault();
         addorEdit(values)

     }
    return (
        <form onSubmit={handleSubmit}>
            <Controls.MyInput label='Suuplier Name' name={'supplierName'}  value={values.supplierName} onChange={handleInputChange}/>
            <Controls.MyInput label='supplierEmail' name={'supplierEmail'}  value={values.supplierEmail} onChange={handleInputChange}/>
            <Controls.MyInput label='supplierPhone' name={'supplierPhone'}  value={values.supplierPhone} onChange={handleInputChange}/>
            <Controls.MyInput label='supplierAddress' name={'supplierAddress '}  value={values.supplierAddress} onChange={handleInputChange}/>
            <Controls.MyInput label='supplierDetails' name={'supplierDetails'}  value={values.supplierDetails} onChange={handleInputChange}/>
            <Controls.MyInput label='country' name={'country'}  value={values.country} onChange={handleInputChange}/>
            <Controls.MyInput label='state' name={'state'}  value={values.state} onChange={handleInputChange}/>
            <Controls.MyInput label='city' name={'city'}  value={values.city} onChange={handleInputChange}/>
            <Controls.MyInput label='ZIP' name={'zip'}  value={values.zip} onChange={handleInputChange}/>
          
            <Controls.Button type='submit' text='Submit'/>
        </form>
    )
}

