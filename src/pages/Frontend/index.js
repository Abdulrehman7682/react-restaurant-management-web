import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductInfo from './MenuItemInfo'
import CartItems from './CartItems'
import Dashboard from './Dashboard'
// import AddProducts from './Dashboard/AddProducts'
import UpdateProducts from './Dashboard/UpdateProducts'
// import { useAuthContext } from '../../contexts/AuthContext'
import PrivateRoute from '../../private/PrivateRoute'
import AdminRoute from '../../private/AdminRoute'
import Order from './Order'
// import AllProducts from './AllMenuItem'
import WishlistItems from './WishlistItems'
import AddMenu from './Dashboard/AddMenu'
import AllMenuItem from './AllMenuItem'
// import Header from '../../components/Header'

export default function Frontend() {
  // const {isAuthenticated} = useAuthContext()
  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menuItems' element={<AllMenuItem/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/menuItemInfo/:id' element={<PrivateRoute Component= {ProductInfo}/>}/>
        <Route path='/cart' element={<PrivateRoute Component= {CartItems}/>}/>
        <Route path='/wishlist' element={<PrivateRoute Component= {WishlistItems}/>}/>
        <Route path='/order' element={<PrivateRoute Component= {Order}/>}/>
        <Route path='/admin' element={<AdminRoute Component= {Dashboard}/>}/>
        <Route path='/addMenu' element={<AdminRoute Component= {AddMenu}/>}/>
        <Route path='/updateProducts' element={<AdminRoute Component= {UpdateProducts}/>}/>
        <Route path='*' element={<h1>404 , Error , Wrong Path ,  Page Not Found</h1>}/>
    </Routes>
    <Footer/>
    </>
  )
}
