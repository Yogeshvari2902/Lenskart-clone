import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../ContextApi/AuthContext";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Button,
  Image,
  Box,
  Heading,
  Input,
  HStack,

  Flex,
  Center,
} from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { useEffect } from "react";


const Login = (props) => {
  const [loading,setLoading]=useState(false);
  const [btn, setbtn] = useState();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [pass, setpass] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {isAuth,setisAuth,register,setRegister}=useContext(AuthContext);
  const [resdata,setResdata]=useState();


  const handlechange = (e) => {
    const {name ,value}=e.target
    // setUser(e.target.value);
    // console.log(loginData.email.includes("@gmail."));
    // setLoginData({...loginData,email:loginData.email})
    setLoginData({...loginData,[name]:value})

    const buton = (
      <Box
        fontSize={"12px"}
        mt="18px"
        color={"#ff1f1f"}
        fontWeight="500"
        letterSpacing={"-0.4px"}
      >
        Please enter a valid Email or Mobile Number.
      </Box>
    );
    setbtn(buton);
  };
  const getData=()=>{
     setLoading(true);
    fetch(`https://lenskart-clone.herokuapp.com/Users`)
    .then((res)=>res.json())
    .then((res)=> setResdata(res.filter((el)=>el.email===loginData.email))
      // console.log(res)
      // setisAuth(true)
  //  setResdata( {
  //     res.filter((el)=>{
  //        return el.email===loginData.email
  //     })
  //   })
    )
    .catch((err)=>console.log(err))
    .finally(()=>setLoading(false))
    .finally(()=>onClose())
    .finally(()=>setRegister(resdata));

    
  }
 

  

  const handlesign = () => {
    setpass(true);
    if(loginData.password.length>6){
      getData(loginData);
    }
   
  };
  const HandleLogin=(e)=>{
    const val=e.target.value
   setLoginData({...loginData,password:val})
  

  }
  console.log(loginData)
  // if(register){
  //   onOpen();
  // }

   console.log("res",resdata);
  // if(isAuth){
  //   onClose();
  // }
  // useEffect(()=>{
  //   onOpen();
  // },[])


  return (
    <div>
      <Center onClick={onOpen} fontWeight={"400"} fontSize="13px" mt="15px">Sign In</Center>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalHeader></ModalHeader>
        <ModalContent w={"420px"}>
          <ModalCloseButton
            borderRadius={"50%"}
            bg="white"
            m={"10px 10px 0px 0px"}
          />
          <ModalBody p={"0px 0px "} borderRadius={"15px 15px 15px 15px "}>
            <Image
              src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg"
              alt="pic"
              // id="loginImage"
              borderRadius={"10px 10px 0px 0px "}
            />
            <Box m={"34px 45px 50px 45px"}>
              <Heading
                fontFamily={" Times, serif"}
                fontWeight="100"
                fontSize={"26px"}
                mb="24px"
                color={"#333368"}
              >
                Sign In
              </Heading>

              {pass === false ? (
                <Input
                name="email"
                  placeholder="Mobile/Email"
                  h={"50px"}
                  focusBorderColor="rgb(206, 206, 223)"
                  borderColor={"rgb(206, 206, 223)"}
                  onChange={handlechange}
                />
              ) : (
                <Box>
                  <Box fontSize={"15px"} color="#66668e">
                    Enter password for
                  </Box>
                  <Flex
                    justifyContent={"space-between"}
                    fontFamily={" sans-serif"}
                    mb="22px"
                    color={"#000042"}
                  >
                    <Box fontSize="18px">{loginData.email}</Box>
                    <Box
                      fontSize={"14px"}
                      textDecoration="underline"
                      onClick={() => setpass(false)}
                      cursor="pointer"
                    >
                      {" "}
                      Edit
                    </Box>
                  </Flex>
                  <Input
                  name="password"
                    placeholder="Enter password"
                    h={"50px"}
                    focusBorderColor="rgb(206, 206, 223)"
                    borderColor={"rgb(206, 206, 223)"}
                    onChange={handlechange}
                  />
                  <Box
                    textDecoration={"underline"}
                    m="15px 0px 0px 0px"
                    color="#000042"
                  >
                    Forget Password
                  </Box>
                </Box>
              )}
              {loginData.email.includes("@gmail.") ? "" : btn}

              <HStack fontSize={"12px"}>
                <Checkbox mb={"20px"} mt="20px" size="sm">
                  Get Update on whatsapp
                </Checkbox>
                <Image
                  src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png"
                  w={"22px"}
                  h="22px"
                />
              </HStack>
              {loginData.email.includes("@gmail.") ? (
                <Button
                isLoading={loading}
                  onClick={handlesign}
                  bgColor={"#11daac"}
                  width="100%"
                  borderRadius={"35px/35px"}
                  h="50px"
                  _hover={{ backgroundColor: "#11daac" }}
                >
                  Sign In
                </Button>
              ) : (
                <Button
                  bgColor={"#cccccc"}
                  width="100%"
                  borderRadius={"35px/35px"}
                  h="50px"
                  _hover={{ backgroundColor: "#cccccc" }}
                >
                  Sign In
                </Button>
              )}

              <HStack spacing={"0px"} mt="19px">
                <Box fontSize={"14px"}> New member?</Box>
                <Link
                  fontSize={"15px"}
                  fontWeight="500"
                  textDecoration={"underline"}
                >
                  Create an Account
                </Link>
              </HStack>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Login;
