import { Box,Image } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaGreaterThan,FaLessThan } from 'react-icons/fa';
import Navbar from "../Component/Navbar"


const SlideImg=()=>{
    const img=[
        'https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_pastaBlog_banner.jpg',
        'https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_1320x355-blog2.jpg',
        'https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_paneerBlog_banner.jpg'
    ]

    const [index, setIndex]=useState(0);
    useEffect(()=>{
        setIndex(0)
    },[])

    const next=()=>{
        if(index==img.length-1){
            setIndex(0)
        }else{
            setIndex(index+1)
        }
    }
    const prev=()=>{
        if(index==0){
            setIndex(img.length-1)
        }else{
            setIndex(index-1)
        }
    }

    return (
        <Box className="slideshow">
            <Image src={img[index]} />
            <Box>
                <button  onClick={prev}> <FaLessThan/></button>
                <button onClick={next} > <FaGreaterThan/> </button>
            </Box>
        </Box>
    )
}

const SlideBrand=()=>{
    const brands=[
        'https://d1z88p83zuviay.cloudfront.net/Images/barilla.jpg',
        'https://d1z88p83zuviay.cloudfront.net/Images/ceres.jpg',
        'https://d1z88p83zuviay.cloudfront.net/Images/lindt.jpg',
        'https://d1z88p83zuviay.cloudfront.net/Images/silk.jpg',
        'https://d1z88p83zuviay.cloudfront.net/Images/davidoff-cafe.jpg',
        'https://d1z88p83zuviay.cloudfront.net/Images/lexlusif.jpg',
        'https://d1z88p83zuviay.cloudfront.net/Images/healthy.jpg',
        'https://d1z88p83zuviay.cloudfront.net/Images/cambay-tiger.jpg',
    ]
    const [index, setIndex]=useState(0);
    useEffect(()=>{
        setIndex(0)
    },[])

    const next=()=>{
        if(index==0){
            setIndex(4)
        }else if(index==4){
            setIndex(0)
        }
    }
    const prev=()=>{
        
        if(index==0){
            setIndex(4)
        }else if(index==4){
            setIndex(0)
        }
        
    }

    return (
        <Box className="slideshow">
            <Box style={{display:"flex",justifyContent:"space-between"}}>
            <Image src={brands[index]} />
            <Image src={brands[index+1]} />
            <Image src={brands[index+2]} />
            <Image src={brands[index+3]} />
            <Image src={brands[index+4]} />
            </Box>
            
            <Box  >
                <button onClick={prev}><FaLessThan/> </button>
                <button onClick={next} > <FaGreaterThan/>  </button>
            </Box>
        </Box>
    )
}



function Home(){
   
   
    return (
        <Box className="home">
                <Box id="navbar" > 
                    <Navbar/>
                </Box>

                <Box id="body"> 
                   <Box>
                     <img src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/d8cc09f5-5d68-4853-ae9a-233ceabe3acd.jpg" alt="" />
                   </Box>
                   <Box mt="50px">
                        <Box style={{display:"flex" ,justifyContent:"space-between"}}>
                            <img src="https://www.naturesbasket.co.in/Images/NaturesBasketGifting.jpeg?v=8" alt="" />
                            <img src="https://www.naturesbasket.co.in/Images/Fruits-Vegetables.png?v=17" alt="" />
                            <img src="https://www.naturesbasket.co.in/Images/Gluten-free-web%20box%20banner.png?v=15" alt="" />

                        </Box>
                   </Box>
                  
                   <Box style={{marginTop:"50px"}}>
                       <SlideImg/>
                   </Box>
                   <Box style={{marginTop:"50px"}} >
                        <h2 >OUR EVENTS</h2>
                        <Box id="events" display="flex" justifyContent={"space-between"}>
                                <img src="https://www.naturesbasket.co.in/Images/PhotoGallery/SanjeevKapoor_at_KolkataGallary.jpg" alt="" />
                                <img src="https://www.naturesbasket.co.in/Images/PhotoGallery/3-ph150419.jpeg" alt="" />
                                <img src="https://www.naturesbasket.co.in/Images/PhotoGallery/American-Food-Festival---Cheef-Saby-Vicky-Ratnani.jpg" alt="" />
                        </Box>
                   </Box>

                   <Box>
                      <h2>SHOP BY WORLD BRANDS</h2>
                      <Box>
                         <SlideBrand/>
                      </Box>
                   </Box>
                
                </Box>
        </Box>
    )
   
}export default Home