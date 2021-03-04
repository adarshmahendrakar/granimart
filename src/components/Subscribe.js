import { Fab, Hidden } from '@material-ui/core'
import React from 'react'
import myimage from './assets/sunbscribe.png'
export default function Subscribe() {
  
   
        return (
        <Hidden smDown>
        <div style={{height:'243px',width:'100%',marginBottom:'91px',
        backgroundBlendMode:'darken',
        backgroundColor:'yellowgreen',
        backgroundImage:`url(${myimage})`
        ,display:'flex',alignItems:'center',justifyContent:'space-around',gap:'20px',overflow:'auto'}}>
      <p style={{width:'40%',fontSize:'29px',lineHeight:1.31,color:"white"}}>Subscribe to our newsletter and
      receive exclusive offers every week</p>
      <div>
      <input placeholder='Enter Email...' style={{ width: '315px',
        margin:'0 25px',
        padding:'0 15px',
        height: '48px',
        borderRadius: '30px',
        backgroundColor: '#ffffff',outline:'none',border:'none'}}/>
      <Fab variant="extended"  color="secondary">
        
        subscribe
      </Fab>
      </div>
           </div>
           </Hidden>)
       
}
