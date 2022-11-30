import React from "react";
// import "./Login&sign.css";
import {
  Center,
  Heading,
  HStack,
  InputGroup,
  InputLeftElement,
  ModalHeader,
  useDisclosure,Image
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";
import Required from "./Required";

const Signup = () => {
  const init = {
    first_name: "",
    last_name: "",
    ph_no: "",
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(init);
  const [first, setFirst] = useState();
  const [ph, setPh] = useState();
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });

    switch (name) {
      case "first_name":
        setFirst(value === "" ? <Required info="This is required" /> : "");

        break;

      case "ph_no":
        setPh(
          value === "" ? (
            <Required info="This is required" />
          ) : (
            <Required info="Please enter a valid mobile number (eg. 9987XXXXXX)" />
          )
        );

        break;

      case "email":
        setMail(
          value === "" ? (
            <Required info="This is required" />
          ) : (
            <Required info="Please enter a valid email address e.g. johndoe@domain.com." />
          )
        );

        break;

      case "password":
        setPass(
          value === "" ? (
            <Required info="This is required" />
          ) : (
            <Required info="Password should be more than 6 characters." />
          )
        );

        break;

      default:
        break;
    }
   
  };

  const getData=(body)=>{
    fetch(`https://lenskart-clone.herokuapp.com/Users`,{
      method:"POST",
      body:JSON.stringify(body),
      headers:{
        'Content-Type':'application/json'
      }
    })
  }

  const handleRegister=()=>{
    getData(userData);


  }

  console.log(userData);
  return (
    <div>
      <Button onClick={onOpen}>Sign Up</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalHeader></ModalHeader>
        <ModalContent w={"430px"}>
          <ModalCloseButton />
          <ModalBody p={"0px 0px "}>
            <Box m={"5px 45px 20px 45px"}>
              <Heading
                fontFamily={" Times, serif"}
                fontWeight="100"
                fontSize={"26px"}
                mb="20px"
                color={"#333368"}
              >
                Create an Account
              </Heading>
              <Input
                onChange={handleChange}
                
                type="text"
                name="first_name"
                placeholder="First Name*"
                h={"49px"}
                focusBorderColor="rgb(206, 206, 223)"
                borderColor={"rgb(206, 206, 223)"}
                m={"8px 0px 8px 0px"}
              />
              {first}

              <Input
                onChange={handleChange}
                name="last_name"
                placeholder="Last Name"
                h={"49px"}
                focusBorderColor="rgb(206, 206, 223)"
                borderColor={"rgb(206, 206, 223)"}
                m={"8px 0px 8px 0px"}
              />
              <InputGroup>
              <InputLeftElement children="+91 " mt={"12px"} ml="10px" pr={"10px"}/>
              <Input
                onChange={handleChange}
                type="number"
                name="ph_no"
                placeholder=" Mobile*"
                h={"49px"}
                focusBorderColor="rgb(206, 206, 223)"
                borderColor={"rgb(206, 206, 223)"}
                m={"8px 0px 8px 0px"}
              />

              </InputGroup>
             
              {userData.ph_no.length == 10 ? "" : ph}
              <Input
                onChange={handleChange}
                name="email"
                placeholder="Email*"
                h={"49px"}
                focusBorderColor="rgb(206, 206, 223)"
                borderColor={"rgb(206, 206, 223)"}
                m={"8px 0px 8px 0px"}
              />
              {userData.email.includes("@gmail.") ? "" : mail}
              <Input
                onChange={handleChange}
                type={"password"}
                name="password"
                placeholder="Password*"
                h={"49px"}
                focusBorderColor="rgb(206, 206, 223)"
                borderColor={"rgb(206, 206, 223)"}
                m={"8px 0px 8px 0px"}
              />
              {userData.password.length >= 6 ? "" : pass}
              <HStack>
              <Box
                textDecoration={"underline"}
                fontFamily={" sans-serif"}
                color={"#333368"}
                fontSize="14px"
              >
                Got a Referral code?
              </Box>
              <Box 
              fontFamily={" sans-serif"}
              color={"#333368"}
              >(Optional)</Box>
              </HStack>
              <HStack>
              <Checkbox
                mb={"20px"}
                mt="20px"
                size="sm"
                fontFamily={" sans-serif"}
              >
                Get Update on whatsapp
              </Checkbox>
              <Image src="https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png" w={"22px"} h="22px"/>
              </HStack>
              <HStack spacing={"3px"} mb="10px">
                <Box
                  fontSize={"14px"}
                  fontFamily={" sans-serif"}
                  fontWeight="100"
                  letterSpacing={"-0.4px"}
                >
                  By creating this account, you agree to our
                </Box>
                <Box fontSize={"15px"} textDecoration="underline">
                  Privacy Policy
                </Box>
              </HStack>

              {userData.email.includes("@gmail.") &&
              userData.password.length >= 6 &&
              userData.ph_no.length == 10 ? (
                <Button
                onClick={handleRegister}
                  bgColor={"#11daac"}
                  width="100%"
                  borderRadius={"35px/35px"}
                  h="50px"
                  _hover={{ backgroundColor: "#11daac" }}
                  fontFamily={" sans-serif"}
                  fontWeight="300"
                >
                  Create an Account
                </Button>
              ) : (
                <Button
                  bgColor={"#cccccc"}
                  width="100%"
                  borderRadius={"35px/35px"}
                  h="50px"
                  _hover={{ backgroundColor: "#cccccc" }}
                  fontFamily={" sans-serif"}
                  fontWeight="300"
                >
                  Create an Account
                </Button>
              )}
              <Center mt={"14px"} fontSize="15px">
                Have an account?{" "}
                <Center fontWeight={"500"} textDecoration="underline">
                  Sign In
                </Center>
              </Center>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Signup;
