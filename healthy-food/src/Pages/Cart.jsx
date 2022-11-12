
import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
   
    Text,Box
  } from '@chakra-ui/react'


function Cart(){
    return (
        <>
           <Box>
             <Text color="#B71761">GET YOUR ORDER DELIVERED IN 90 MINUTES . SERVICE TIMINGS BETWEEN 10:00 AM TO 9.30 PM .</Text>
           </Box>
            <Table variant='simple'>
                
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Price</Th>
                        <Th>Discount</Th>
                        <Th >QTY</Th>
                        <Th>Sub-Total</Th>
                    </Tr>
                </Thead>
                <Tbody>
                   
                    <Tr>
                        <Td></Td>
                        <Td></Td>
                        <Td ></Td>
                        
                    </Tr>
                   
                </Tbody>
                
            </Table>

        </>
    )
}export default Cart;