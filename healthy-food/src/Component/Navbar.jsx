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
} from '@chakra-ui/react'


function PinCode() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
           
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

function Navbar(){
  return (
    <Box className="navbar">
      <Box display="flex" >
        <Box boxSize='100px' >
            <Image src='https://www.naturesbasket.co.in/Images/logosnew.png?v=2' alt='' />
        </Box>
        <Box ml={"20%"}>
            <Box boxSize={"70%"} display="flex" justifyContent={"space-between"}>
              <Text>Store Locator  |</Text>
              <Text>Contact Us  |</Text>
              <Select placeholder='Enter Pincode'>
                  <option value='option1'>Mumbai</option>
                  <option value='option2'>Delhi</option>
                  <option value='option3'>Thane</option>
                  <option value='option1'>Bengaluru</option>
                  <option value='option2'>Navi Mimbai</option>
                  <option value='option3'>Pune</option>
              </Select>
              <Box><PinCode/></Box>
            </Box>
            <Box></Box>
        </Box>
      </Box>
      
    </Box>
  )
}export default Navbar;