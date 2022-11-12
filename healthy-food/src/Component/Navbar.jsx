import { Box,Image,Text,Button } from "@chakra-ui/react";
import React from "react";
import { Select,useDisclosure } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input
} from '@chakra-ui/react';

import { Stack, HStack, VStack } from '@chakra-ui/react'
import {useState} from "react"
import Login from "../Routes/Login"


 function Pincode() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen} bg="green.300" fontSize={"12px"}>Enter PinCode</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ENTER YOUR DELIEVARY PINCODE</ModalHeader>
          <hr/>
          <Box mt="20px">
            <Input w="250px" mr="10px" ml="20px"/>
            <Button colorScheme='green' mr={3}>
              SUBMIT
            </Button>
            <Text padding="10px" fontSize={"12px"}>Entering your delivery pincode will allow us to show you the products available in your area and to ensure timely delivery.</Text>
          </Box>
          <ModalCloseButton />
          <ModalBody pb={6}>
           
          </ModalBody>

          <ModalFooter>
          
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}




function Navbar(){
  const [state, setState]=useState(false)
  const [text,setText]=useState("")
  
  return (
    <Box className="main" position="sticky"  top="0px">
      <Box className="navbar"  mt="10px" mb="40px" padding="2px">
        <Box display="flex" mt="10px">
          <Box w="10%">
              <Image src='https://i.ibb.co/C0wMf72/Natural.png' alt='' />
          </Box>
            <Box  ml={"20%"} width={"70%"} display="flex" flexDirection={"column"}  >
            
            
                  <Box display={"flex"} justifyContent="space-between">
                  <HStack width={"80%"} display="flex" justifyContent={"space-evenly"} spacing='50px' textAlign={"center"}>
                      <Box  w='70%'  textAlign="center" h='20px'fontSize={"15px"} paddingRight="20px" borderRight="1px solid #d9d9d9">
                        <a href="https://www.naturesbasket.co.in/HTML/LocateStore.aspx?v=1" style={{paddingBottom:"5px" }}> Store Locator  </a>   
                      </Box>
                    
                      <Box  w='65%'  textAlign="center" h='20px'fontSize={"15px"} paddingRight="20px" borderRight="1px solid #d9d9d9">
                        Contact Us   
                      </Box>
                        
                         
                          <Select >
                            <option value='option1'>Mumbai</option>
                            <option value='option2'>Delhi</option>
                            <option value='option3'>Thane</option>
                            <option value='option1'>Bengaluru</option>
                            <option value='option2'>Navi Mimbai</option>
                            <option value='option3'>Pune</option>
                          </Select>
                          <Box> <Pincode/></Box>
                  </HStack>
                  <Box>
                    <Login />
                  </Box>
                
                  </Box>
                  <Box  display="flex" justifyContent={"space-between"}>
                      <Box w="90%" display="flex" id="dropdown">
                          <Input id="input"  value={text} onMouseOver={()=>setState(true) } onMouseOut={()=>setState(false)} m="5px" placeholder="Start shopping..."/>
                          
                          
                          <span  style={{position:"relative", top:"5px", right:"10px"}}><Image h="40px" src="https://www.naturesbasket.co.in/Images/search-button.jpg"/></span> 
                          
                          
                                    <Box id="drop-down-content">
                                    <a href="" style={{color:"#b71761"}}>Trending Searches</a>
                                    <a href="/Organic">Organic</a>
                                    <a href="https://www.naturesbasket.co.in/Online-grocery-shopping/Breakfast,-Dairy---Bakery/Bakery/62_0_0">Fresh Artisinal Breads</a>
                                    <a href="https://www.naturesbasket.co.in/BrandProduct/Healthy-Alternatives/631">Healthy Alternatives</a>
                                    <a href="https://www.naturesbasket.co.in/Online-grocery-shopping/Confectionary-Patisserie/Ice-Creams-Desserts-/46_0_0">Ice creams & Desserts</a>
                                    <a href="https://www.naturesbasket.co.in/Online-grocery-shopping/Health/Diabetic-Friendly-Foods/16_0_0">Diabetic Friendly Foods</a>
                                </Box>
                            
                          

                            
                      
                      </Box>
                      
                      <Box position="relative" top="-10px">
                      <Image src="	https://www.naturesbasket.co.in/Images/header-icons.jpg" />
                      </Box>
                  </Box>
                
              

              
              
          </Box>
        </Box>

        <Box className="Navbar" mb="20px" >
          <ul style={{listStyle:"none",marginBottom:"20px"}}>
            <HStack spacing="80px"  >
            <li style={{backgroundColor:"grey",color:"black",background:"white"}}> SHOP BY CATEGORY
              <Box w="200px"  id="drop" textAlign="center">
                  <ul style={{listStyle:"none" }}>
                    <VStack spacing="5px" listStyle="none" textAlign={"left"}>
                        <li><a href="https://www.naturesbasket.co.in/Online-grocery-shopping/Gift-Hampers/1_0_0">Gifting</a></li>
                        <li><a href="https://www.naturesbasket.co.in/Online-grocery-shopping/Cheese-Meat-Fruit-Platters/21_0_0">cheese, meat and fruit</a></li>
                        <li><a href="https://www.naturesbasket.co.in/Online-grocery-shopping/Cheese-Meat-Fruit-Platters/21_0_0">Indian Cuisine</a></li>
                        <li><a href="https://www.naturesbasket.co.in/Online-grocery-shopping/Health/3_0_0">Health</a></li>
                        <li><a href="https://www.naturesbasket.co.in/Online-grocery-shopping/Indian-Grocery/12_0_0">Indian Grocery</a></li>
                        <li><a href="https://www.naturesbasket.co.in/Online-grocery-shopping/Confectionary-Patisserie/6_0_0">Confectionary</a></li>
                        <li><a href="https://www.naturesbasket.co.in/Online-grocery-shopping/Snack-Bar/16_0_0">Snack Bar</a></li>
                        <li><a href="https://www.naturesbasket.co.in/Online-grocery-shopping/Breakfast--Dairy-Bakery/11_0_0">Breakfast and Dairy</a></li>
                    </VStack>
                  
                  </ul>
              </Box>
            </li>
            <li>MY ORDERS</li>
            <li>GIFTING</li>
            <li>REWARDS</li> 
            <li>BLOG</li>
            <li>OFFERS</li>
            <li>BOOK STORE VISIT</li>
            </HStack>
            
            
          </ul>
        </Box>
      
      </Box>
    </Box>
    
  )
}export  {Navbar,Pincode};