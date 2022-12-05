import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import TopNav from '../Componets/Navbar/TopNav';
import Account from '../Componets/Account'
import MyOrders from './MyOrders'
import { Box } from '@chakra-ui/react'
import Footer from '../Componets/Footer/Footer';
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        {/* <Route path='/customer' element={<MyOrders/>}>
        <Route path='account' element={<Account/>}/> */}
        <Route path='/Navbar' element={<TopNav/>}/>
        <Route path='/Footer' element={<Footer/>}/>
        {/* <Route path='notification' element={<Box fontSize={"40px"}>Manage Notification</Box>}/> */}
        {/* </Route> */}
    </Routes>
  )
}

export default AllRoutes