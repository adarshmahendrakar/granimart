import React, { lazy, Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';
 const Home=lazy(()=>import('./home'))
 const Supplier=lazy(()=>import('./supplier'))
 const Store=lazy(()=>import('./store'))
 const Admin=lazy(()=>import('./admin'))
export default function index() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Route exact path='/' render={()=><Redirect to='/home'/>}/>
      <Route  path='/home' component={Home}/>
      <Route  path='/admin' component={Admin}/>
      <Route  path='/store' component={Store}/>
      <Route  path='/supplier' component={Supplier}/>
      </Suspense>
  );
}

