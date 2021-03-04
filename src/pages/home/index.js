import React from 'react'
import { Route } from 'react-router-dom'
import HomeLayout from '../../components/layout/HomeLayout'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import ProductCard from './ProductPage'
import ProductPage from './ProductDetailsPage'
import CartPage from './CartPage'
import PaymentPage from './PaymentPage'
export default function index() {
    return (
        <HomeLayout>
            <Route exact path='/home' component={HomePage}/>
            <Route exact path='/home/login' component={LoginPage}/>
            <Route exact path='/home/register' component={RegisterPage}/>
            <Route exact path='/home/productsList' component={ProductCard} />
            <Route exact path='/home/ProductDetailsPage' component={ProductPage} />
            <Route exact path='/home/CartPage' component={CartPage}  />
            <Route exact path='/home/PaymentPage' component={PaymentPage}  />
        </HomeLayout>
    )
}
