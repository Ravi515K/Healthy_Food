import React,{useState} from "react";
import { useEffect } from "react";
import {
  Box,
  Center,
  useColorModeValue,
  
  Text,
  Stack,
  Image,
  Button,
  Heading,
  Divider,
  VStack
} from '@chakra-ui/react';
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
import { Navbar } from "../Component/Navbar";
import Footer from "../Component/Footer"

function Organic(){
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("https://636ca1c3ab4814f2b2699397.mockapi.io/products")
    .then((res)=>res.json())
    
    .then((res)=> setData(res))
},[])
  return (
    <>
    <Box >
      <Navbar/>
    </Box>
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
              <>
                 <Center py={12}>
        <Box
          key={el.id}
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
              <Image w="100px" src="https://www.naturesbasket.co.in/Images/CartAddBtn.PNG"  />
            
             
            </Stack>
          </Stack>
        </Box>
      </Center>
              </>
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