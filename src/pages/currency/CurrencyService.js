import React, { useReducer } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage';

export const useCurrencyService=()=>{
    const [data,setData]=useLocalStorage('Currency',[]);

    const add=(v)=>{setData([...(data||[]),{id:Date.now(),...v}])}

    const update=(v)=>setData(data.map(item1=>item1.id==v.id?v:item1))
    
    const deleteC=(v)=>setData(data.filter(item1=>item1.id!=v.id))

return{mydata:data,add,update,deleteC}
}