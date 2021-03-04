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
            <Controls.MyInput label='customerName' name={'customerName'}  value={values.customerName} onChange={handleInputChange}/>
            <Controls.MyInput label='customerEmail' name={'customerEmail'}  value={values.customerEmail} onChange={handleInputChange}/>
            <Controls.MyInput label='customerPhone' name={'customerPhone'}  value={values.customerPhone} onChange={handleInputChange}/>
            <Controls.MyInput label='customerAddress' name={'customerAddress'}  value={values.customerAddress} onChange={handleInputChange}/>
            <Controls.MyInput label='Address 1' name={'address1'}  value={values.address1} onChange={handleInputChange}/>
            <Controls.MyInput label='Address 2' name={'address2'}  value={values.address2} onChange={handleInputChange}/>
            <Controls.MyInput label='country' name={'country'}  value={values.country} onChange={handleInputChange}/>
            <Controls.MyInput label='state' name={'state'}  value={values.state} onChange={handleInputChange}/>
            <Controls.MyInput label='city' name={'city'}  value={values.city} onChange={handleInputChange}/>
            <Controls.MyInput label='ZIP' name={'zip'}  value={values.zip} onChange={handleInputChange}/>
          
            <Controls.Button type='submit' text='Submit'/>
        </form>
    )
}

