import { Button, Checkbox, fade, FormControl, FormGroup, FormHelperText, label, Input, InputAdornment, InputBase, InputLabel, MenuItem, RadioGroup, Select, TextField, Typography, withStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { PanoramaFishEyeOutlined, RemoveRedEyeOutlined, Visibility, VisibilityOff } from '@material-ui/icons'
const BootstrapInput = withStyles((theme) => ({
    root: {
      position: 'relative',
      'label + &': {
       marginTop: theme.spacing(1),
       
      },
      
     // position: 'relative',
      background: '#FFFFFF',
      border: '0.5px solid rgba(0, 0, 0, 0.33)',
      boxSizing: 'border-box',
      fontSize: 16,
      width: '100%',
      padding: '1px 10px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the const Roboto font.
      
      '&:focus-within': {
        border: `1px solid ${theme.palette.secondary.main}`
        
      },
    },
    
    
   
  }))(InputBase);
  
 export const MyInput=({label,error,...props}) =>{
    return (
        
  <FormControl  fullWidth error={error} >
  <label  style={{fontWeight:500,fontSize:13,textTransform:'capitalize',color:'#aaa'}}>{label}</label>
  <BootstrapInput color='secondary' {...props}/>
  <FormHelperText>{error}</FormHelperText>
  </FormControl>

    )
}
export const MyPassword=({label,error,...props}) =>{
  const [show,setShow]=useState(false)
  return (
      
<FormControl  fullWidth error={error} >
<label  style={{fontWeight:500,fontSize:13,textTransform:'capitalize',color:'#aaa'}}>{label}</label>
<BootstrapInput color='secondary'  {...props} type={show?'text':'password'} endAdornment={<InputAdornment onClick={()=>setShow(!show)} position="end">{show?<Visibility/>:<VisibilityOff/>}</InputAdornment>} />
<FormHelperText>{error}</FormHelperText>
</FormControl>

  )
}

  
 export const MySelect=({label,options,...props}) =>{
    
  return (
      <FormControl fullWidth>
      <label  style={{fontWeight:600,fontSize:13,textTransform:'capitalize',color:'#aaa'}}>{label}</label>
      <Select
        {...props}
        input={<BootstrapInput color='secondary' />}
      >
          <MenuItem value="">
          <em>None</em>
        </MenuItem>
           {options?.map((item,i)=><MenuItem key={i}  {...item}  />)}
        
        
      </Select>
    </FormControl>
  )
}

 export const MyCheckBox=({error,label,handleChange,options})=> {
    
  return (
      <FormControl color='secondary'  error={error} component="fieldset"  >
      <label  style={{fontWeight:600,fontSize:13,textTransform:'capitalize',color:'#aaa'}}>{label}</label>
      <FormGroup>
      {options?.map((item,i)=><FormControlLabel key={i} control={<Checkbox checked={item.value} onChange={handleChange} name={item.value} />} label={item.label}  />)}
      </FormGroup>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  )
}


 export const MyRadioButton=({error,label,options,...props})=> {
  
  // options=[{label:'',value:''}]
    return (
      <FormControl color='secondary' error={error} component="fieldset">
          <label  style={{fontWeight:600,fontSize:13,textTransform:'capitalize',color:'#aaa'}}>{label}</label>
        <RadioGroup color='secondary' aria-label="gender" {...props}>
            {options?.map((item,i)=><FormControlLabel key={i} control={<Radio />} {...item}  />)}
        </RadioGroup>
        <FormHelperText>{error}</FormHelperText>
      </FormControl>
    );
  }

 