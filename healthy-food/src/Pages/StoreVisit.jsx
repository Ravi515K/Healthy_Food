import React from "react";
import { Select,Box , Input,Text, Stack,Center } from '@chakra-ui/react'
import { Navbar } from "../Component/Navbar";
import Footer from "../Component/Footer";

function StoreVisit(){
    return (
        <Box>
            <Box mb="80px">
                <Navbar/>
            </Box>
            <Center>
                <Box> 
                <Stack direction={"row"}>
                    <Box>
                        <Stack direction={"column"}>
                            <Text>City:*</Text>
                            <Select placeholder='Select option'>
                                <option value='option1'>Mumbai</option>
                                <option value='option2'>Banglore</option>
                                <option value='option3'>Pune</option>
                            </Select>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack direction={"column"}>
                        <Text>Store:*</Text>
                        <Input placeholder="" />
                        </Stack>
                    </Box>
                    
                </Stack>
        
                </Box>
         
                <Box>
                    <Stack direction={"row"}>
                        <Box>
                            <Stack direction={"column"}>
                                <Text>Date:*</Text>
                                <Input placeholder="Select Date" />
                            </Stack>
                        </Box>
                        <Box>
                            <Stack direction={"column"}>
                            <Text>Mobile Number:*</Text>
                            <Input placeholder="Enter Mobile Number" />
                            </Stack>
                        </Box>
            
                    </Stack>
            
                </Box>
            </Center>   
            <Box>
                <Footer/>
            </Box>
       
    </Box>
    )

   
    

} export default StoreVisit;