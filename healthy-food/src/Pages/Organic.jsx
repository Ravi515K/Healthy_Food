import React,{Fragment, useState} from "react";
import { useEffect } from "react";
import {
  Box,
  Center,
 
  
  Text,
  Stack,
  Image,
  Button,
  Heading,
  Divider,
  VStack,
  
} from '@chakra-ui/react';

import { Navbar } from "../Component/Navbar";
import Footer from "../Component/Footer"
import { useContext } from "react";
import { cartContext } from "../App";

function Organic(){

  const { setCart}=useContext(cartContext);
  const [data,setData]=useState([])

  


  useEffect(()=>{
    fetch("https://636ca1c3ab4814f2b2699397.mockapi.io/products")
    .then((res)=>res.json())
    
    .then((res)=> setData(res))
},[])

const handleAdd=(el)=>{
 
  
    setCart(previous=>{

      previous.push({...el,count:1})
      console.log(previous)
      return [...previous]
    })
    
 }
  return (
    <>
     
          <Navbar/>
        
        <Box ml="0px">
          <VStack  spacing="20px">
            <Heading>Organic</Heading>
            <Divider/>
          </VStack>
          
        </Box>
        <Box className="organic">
          {
            data.map((el)=>{
              return (
                  <Fragment key={el.id}>
                      <Center py={12}  >
                      <Box
                      
                        role={'group'}
                        p={6}
                        maxW={'330px'}
                        w={'full'}
                        // bg={useColorModeValue('white', 'gray.800')}
                        boxShadow={'2xl'}
                        rounded={'lg'}
                        pos={'relative'}
                        zIndex={1}>
                        <Box
                          rounded={'lg'}
                          // mt={-12}
                          pos={'relative'}
                          height={'250px'}
                          
                          >
                          <Image
                            rounded={'lg'}
                            height={230}
                            width={282}
                            objectFit={'cover'}
                            src={el.avatar}
                          />
                        </Box>
                        <Stack pt={10} align={'center'}>
                          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                            {el.Title}
                          </Text>
                          <Text >
                            1 pc
                          </Text>
                          <Stack direction={'row'} align={'center'} spacing="30px">
                            <Text >
                              {`MRP ₹ ${el.price}`} 
                            </Text>
                            <Button style={{ width:"100px", padding:"0px"}} onClick={()=>handleAdd(el)} >
                              <Image   borderRadius={"5px"} w="100%" src="https://www.naturesbasket.co.in/Images/CartAddBtn.PNG"></Image> 
                              </Button>
                          
                          
                          </Stack>
                        </Stack>
                      </Box>
                     
                    </Center>
                  </Fragment>
              )
            })
          }
          

          
          
        </Box>
        
        <Box>
          <Footer/>
        </Box>
    </>
   
  )
}export default Organic;