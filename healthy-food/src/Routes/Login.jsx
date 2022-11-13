import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,Input,
    Text,useDisclosure, 
  } from '@chakra-ui/react';
import { useContext,useState } from 'react';
import { cartContext } from '../App';
 
  function Login() {
    const {number,isLogin,setNumber}=useContext(cartContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [mobileNum,setMobileNum]=useState(null);
    return (
      <>
        {   !isLogin ? 
             <Button  h="30px" onClick={onOpen} bgColor="#3e8e41">
          
                 Login/Register
             </Button>
             : <Text>
                {number}
             </Text>
        }
       
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>ENTER YOUR 10 DIGIT MOBILE NUMBER</ModalHeader>
          <hr/>
            <ModalCloseButton />
            <ModalBody>
                <Input placeholder='Enter Number' value={mobileNum} onChange={(e)=>{ setMobileNum(e.target.value)}} />
                <Text fontSize={"15px"}>By continuing, you agree to our Refund, Terms and Policies</Text>
                <br/>
                <Button w="200px" colorScheme='gray'marginR={"10px"} onClick={()=>{setNumber(mobileNum);onClose()}}>
                  Proceed
              </Button>
            </ModalBody>
  
            <ModalFooter>
              
             
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }export default Login;
