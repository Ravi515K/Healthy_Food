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
 
  function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button h="30px" onClick={onOpen} bgColor="green">Login/Register</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>ENTER YOUR 10 DIGIT MOBILE NUMBER</ModalHeader>
          <hr/>
            <ModalCloseButton />
            <ModalBody>
                <Input placeholder='Enter Number' />
                <Text fontSize={"15px"}>By continuing, you agree to our Refund, Terms and Policies</Text>
                <br/>
                <Button w="200px" colorScheme='gray'marginR={"10px"} onClick={onClose}>
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
