import React from 'react';
import { Box, Center, Flex, Image, Input } from '@chakra-ui/react';
import Login from './Login';
import Signup from './Signup';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {useContext} from "react";
import { AuthContext } from '../ContextApi/AuthContext';



const UpNav = () => {
 
const {register}=useContext(AuthContext);
console.log(register)
  return (
    <Flex justifyContent={"space-between"}>
        <Flex border={"1px"}>
         <Center>
            <Image h="50px " w="200px" src='https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg' />
         </Center>
         <Center>
            <Image h="26px" ml="60px"src='https://static.lenskart.com/media/mobile/images/phone_number.svg'/>
         </Center>
        </Flex>
        <Flex border={"1px"}>
        <Input w="500px"/>
        </Flex>
        <Flex justifyContent={"space-around"} border={"1px"} w="330px">
            <Link  to="/customer"fontWeight={"400"} fontSize="13px"> Track Order</Link>
            <Flex>
              {/* {register!==false?<Box>{register[0].first_name}</Box>: */}
              {/* // <Box> */}
                <Login/>
                <Signup/>
                {/* </Box> */}
                {/* } */}
                {/* <Link to="/login" fontWeight={"400"} fontSize="13px">Sign In</Link>
                <Link  fontWeight={"400"} fontSize="13px">Sign Up</Link> */}
            </Flex>
            <Center fontWeight={"400"} fontSize="13px">Wishlist</Center>
            <Center fontWeight={"400"} fontSize="13px">Cart</Center>

        </Flex>

    </Flex>
  )
}

export default UpNav