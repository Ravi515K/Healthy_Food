import React from "react";
import { Select,Box , Input,Text, Stack } from '@chakra-ui/react'

function StoreVisit(){
<Box>
    
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
</Box>
   
    

} export default StoreVisit;