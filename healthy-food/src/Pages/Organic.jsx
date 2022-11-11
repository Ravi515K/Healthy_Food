import React from  "react";
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button
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
  
  
  const IMAGE =
    'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1351176_1_425x425.jpg';

  
  export default function Organic() {
   
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            // mt={-12}
            pos={'relative'}
            height={'250px'}
            // _after={{
            //   transition: 'all .3s ease',
            //   content: '""',
            //   w: 'full',
            //   h: 'full',
            //   pos: 'absolute',
            //   top: 5,
            //   left: 0,
            //   backgroundImage: `url(${IMAGE})`,
            //   filter: 'blur(15px)',
            //   zIndex: -1,
            // }}
            // _groupHover={{
            //   _after: {
            //     filter: 'blur(20px)',
            //   },
            // }}>
            >
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={IMAGE}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
               Name
            </Text>
            <Text >
              1 pc
            </Text>
            <Stack direction={'row'} align={'center'} spacing="30px">
              <Text >
                MRP ₹ 190
              </Text>
              <Image w="100px" src="https://www.naturesbasket.co.in/Images/CartAddBtn.PNG"  />
            
             
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }
 // https://www.naturesbasket.co.in/Images/CartAddBtn.PNG

