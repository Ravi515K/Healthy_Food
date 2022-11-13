
import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Button, 
    Text,Box,Image
  } from '@chakra-ui/react'
  import { Link } from "react-router-dom"
import { useContext } from "react";
import { cartContext } from "../App";
import Qty from "../Component/Qty"
import { Navbar } from "../Component/Navbar";
import Footer from "../Component/Footer";


function Cart(){
    // previous is nothing but cart at previusly.
    const {cart,setCart}=useContext(cartContext);
     let  total=0;
    cart.forEach(el=>{
        total+=el.price*el.count
    })

    const Inc=(id)=>{
            setCart(previous=>{
                let UpdatedCart=previous.map((el)=>{
                    if(el.id==id){
                        el.count+=1
                    }
                    return el;
                })
                return UpdatedCart
            })
    }
    const Dec=(id)=>{
     setCart(previous=>{
        let UpDatedCart=previous.map((el)=>{
            if(el.id==id && el.count>1){
                el.count-=1
            
            }
            return el;
        })
        return UpDatedCart
     })
    }
    const handleDelete =(id)=>{
         setCart(previous=>{
            let filteredCart=previous.filter((el)=>{
                // if(el.id==id){
                //     return false
                // }
                // else{
                //     return true;
                // }
                return el.id!==id
            })
               return filteredCart;
            
         })
    }
    return (
        <>
            <Navbar/>

            <Box w="90%" ml="5%">

                    <Box display={"flex"} justifyContent="space-between">
                            <Text>My cart Items: {cart.length}</Text>
                    <Box>
                        <Button bgColor={"hsl(122, 78%, 57%)"}  > <Link to="/Organic"> ContinueShopping</Link> </Button>
                        <Button ml="20px" bgColor={"hsl(122, 78%, 57%)"} onClick={()=>{alert("Your Order Placed Succefully !"); setCart([])}} > Proceed to Checkout</Button>
                    </Box>

                    </Box>
                    <Box>
                         <Text textAlign={"center"} color="#B71761">GET YOUR ORDER DELIVERED IN 90 MINUTES . SERVICE TIMINGS BETWEEN 10:00 AM TO 9.30 PM .</Text>
                    </Box>
                    <Table variant='simple'>

                            <Thead>
                                <Tr>
                                    <Th>Name</Th>
                                    <Th>Price</Th>
                                    <Th>Discount</Th>
                                    <Th >QTY</Th>
                                    <Th>Sub-Total</Th>
                                    <Th>DELETE</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                            {
                                cart.map((el)=>{
                                    return(
                                    <Tr key={el.id}>
                                        <Td display={"flex"} alignItems="center">
                                            <Image  mr="30px" w="50px" src={el.avatar}/>
                                            <Text>{el.Title}</Text>
                                        </Td>
                                        <Td>{el.price}</Td>
                                        <Td >₹ 0</Td>
                                        <Td><Qty count={el.count} add={()=>Inc(el.id)} sub={()=>Dec(el.id)}/></Td>
                                        <Td>{el.price*el.count}</Td>
                                        <Td onClick={()=>handleDelete(el.id)}>Delete</Td>
                                    </Tr>
                                    )
                                })
                            }


                            </Tbody>

                    </Table>
                    <Box mt="20px" textAlign={"center"}>
                         Total: {total}
                    </Box>  

            </Box>        
            
            <Footer/>

        </>
    )
}export default Cart;