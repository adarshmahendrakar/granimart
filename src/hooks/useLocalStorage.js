import React, { useState } from 'react'

export default function useLocalStorage(name,initialValues) {

    const [data,setData]=useState(()=>{
        try{
            return JSON.parse(localStorage.getItem(name))||initialValues;
        }
        catch(e){
            return initialValues
        }
    })

    const handleData=(v)=>{
        setData(v)
        localStorage.setItem(name,JSON.stringify(v))
    }
    return [data,handleData];
}
