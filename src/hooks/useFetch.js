import React ,{useState,useEffect}from 'react'

export default function useFetch(url) {
    const controller = new AbortController();
const { signal } = controller;
    const baseurl='http://localhost:8080/'
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    
useEffect(async() => {
    setLoading(true)
    try{
   const req=await fetch(baseurl+url,{signal});
   const res=await req.json();
    
        setLoading(false);
        setData(res);
        console.log(res)
  }catch(e){
        setLoading(false)
        setError(e.message)
    };
    
    
    return () => {
        controller.abort()
    }
}, [url])
    return [loading,error,data];
}
