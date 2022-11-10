import React from "react";
import {Box,Text,Stack,HStack,VStack, Heading,Image,Input, Button, Divider} from "@chakra-ui/react"

function Footer(){
    return (
        <Box w="100%" className="footer" gap="20px" mt="50px" bgColor={"gray.10"}>
            <Box >
                <HStack mt="20px">
                    <Box w="200px" h="200px">
                        
                            
                                <VStack>
                                    <Heading fontSize={"15px"} color="grey" align="fex-start">DOWNLOAD THE APP</Heading>
                                    <a href="https://play.google.com/store/apps/details?id=com.godrej.naturesbasketltd">  <Image w="150px"  src="https://cdn.worldvectorlogo.com/logos/get-it-on-google-play.svg" /></a>
                                  <a href="https://apps.apple.com/in/app/natures-basket/id1013402486"> <Image w="150px" src="https://cdn.worldvectorlogo.com/logos/available-on-the-app-store.svg" /></a>
                                   
                                </VStack>
                            
                            
                    </Box>
                    <Box w="200px" h="200px" fontSize={"15px"} >
                    <VStack>
                            <Heading fontSize={"15px"} color="grey" align="fex-start">CONTACT US</Heading>
                            <Text textAlign="left">About us</Text>
                            <Text>Quality Standard</Text>
                            <Text>Our Vision</Text>
                            <Text>Awards</Text>
                            <Text>Vision</Text>
                    </VStack>
                    </Box>
                    <Box w="200px" h="200px" fontSize={"15px"} >
                    <VStack textAlign="left">
                            <Heading fontSize={"15px"} color="grey" align="fex-start">NEWS & MEDIA</Heading>
                            <Text >Pressreleases</Text>
                            <Text>Newsletters</Text>
                            <Text>Events</Text>
                            <Text>Photo Gallery</Text>
                            <Text>Recipes</Text>
                        
                    </VStack>
                    </Box>
                    <Box w="200px" h="200px" fontSize={"15px"} >
                    <VStack textAlign="left">
                            <Heading fontSize={"15px"} color="grey" align="fex-start">OUR POLICIES</Heading>
                            <Text >Private Policy</Text>
                            <Text>payment Policy</Text>
                            <Text>Disclaimer</Text>
                            <Text>Grievance officer</Text>
                        
                        
                    </VStack>
                    </Box>
                    <Box>
                    <VStack>
                        <Heading fontSize={"15px"} color="grey" align="fex-start">SIGN UP TO STAY UPDATED</Heading>
                        <Input  placeholder="Enter Your Email Address" />
                        <Button w="180px" bg={"green.500"} color="whiteAlpha.500">SUBSCRIBE</Button>
                    </VStack>
                    </Box>
                    
                </HStack>
            </Box>
           
           
             <Box ml="40px">
                <hr style={{}}/>
                <Text>PAYMENT METHOD</Text>
                <Image src="https://www.naturesbasket.co.in/Images/icons-card-payments-mode.png"/>
                <hr/>
             </Box>
             <Box display="flex" fontSize={"12px"}  ml="40px" gap="10px" mt="20px">
                <Text>© 2020 Natures Basket Limited.  All rights reserved.</Text>
                <Text>|</Text>
                <Text>Privacy Policy</Text>
                <Text>|</Text>
                <Text>Terms of Use</Text>
                <Text>|</Text>
                <Text>Delivery Number - 8880077745</Text>
                <Text>|</Text>
                <Text>Mobile Site</Text>
                <Text>|</Text>
                <text>FSSAI License Number - 11519002000496</text>
                
             </Box>

                 
                 
            
              
        </Box>
    )
}export default Footer;