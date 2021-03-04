import { Toolbar } from '@material-ui/core';
import React from 'react'
import { Route } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout'
import BrandListPage from '../brand/BrandListPage';
import CategoryPage from '../catergory/CategoryPage';
import CurrencyListPage from '../currency/CurrencyListPage';
import CustomerPage from '../customer/CustomerPage';
import NewOrder from '../order/NewOrder';
import ManageOrder from '../order/OrdersPage';
import ManageProducts from '../products/ManageProducts';
import NewProduct from '../products/NewProduct';
import ManageInvoice from '../sales/ManageInvoice';
import NewInvoice from '../sales/NewInvoice';
import SupplierPage from '../supplier/SupplierPage';
import TaxListPage from '../tax/TaxListPage';
import UnitListPage from '../unit/UnitListPage';
import VarientListPage from '../varients/VarientListPage';
import SubscriberPage from './SubscriberPage';
import SubscriptionPage from './SubscriptionPage';

export default function index() {
    const base='/admin'  
const menus = [
   
    {
      title: "product",
      link:base+'/product',
      submenu: [
        {
          title: "new Product",
          link:base+'/product/add'
        },
        {
          title: "manage product",
          link:base+'/product/manage'
        }
      ]
    },
    {
      title: "Category",
      link:base+'/category'
    },
    {
      title: "Brands",
      link:base+'/brand'
    },
    {
      title: "Customer",
      link:base+'/customer'
    },
    {
      title: "Supplier",
      link:base+'/supplier'
    },
    {
      title: "Varient",
      link:base+'/varient'
    },
    {
      title: "Unit",
      link:base+'/unit'
    },
    {
      title: "Tax",
      link:base+'/tax'
    },
    {
      title: "Currency",
      link:base+'/currency'
    },
    {
      title: "sales",
      link:base+'/sales',
      submenu: [
        {
          title: "new invoice",
          link:base+'/sales/add'
        },
        {
          title: "manage invoice",
          link:base+'/sales/manage'
        }
      ]
    },
    {
      title: "orders",
      link:base+'/orders',
      submenu: [
        {
          title: "new Order",
          link:base+'/orders/add'
        },
        {
          title: "manage orders",
          link:base+'/orders/manage'
        }
      ]
    },
    {
      title: "SubScription",
      submenu: [
        {
          title: "SubScriber",
          link:base+'/'
        },
        {
          title: "Subscription",
          link:base+'/subscription'
        }
      ]
    },
  ];
  
const Routes=[{
    path:base+'/subscription',
    component:SubscriptionPage
},
{
  path:base+'/category',
  component:CategoryPage
},
{
  path:base+'/brand',
  component:BrandListPage
},
{
  path:base+'/varient',
  component:VarientListPage
},
{
  path:base+'/tax',
  component:TaxListPage
},
{
  path:base+'/unit',
  component:UnitListPage
},
{
  path:base+'/currency',
  component:CurrencyListPage
},
{
  path:base+'/customer',
  component:CustomerPage
},
{
  path:base+'/supplier',
  component:SupplierPage
},
{
  path:base+'/sales/manage',
  component:ManageInvoice
},
{
  path:base+'/sales/add',
  component:NewInvoice
},
{
  path:base+'/orders/manage',
  component:ManageOrder
},
{
  path:base+'/orders/add',
  component:NewOrder
},
{
  path:base+'/product/manage',
  component:ManageProducts
},
{
  path:base+'/product/add',
  component:NewProduct
},
{
    path:base+'/',
    exact:true,
    component:SubscriberPage
}

]











    return (
        <DashboardLayout menus={menus}>
            <Toolbar/>
            {
                Routes?.map(item=><Route {...item}/>)
            }
            </DashboardLayout>
    )
}
