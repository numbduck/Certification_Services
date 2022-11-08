import { Flex, HStack, Icon, Image, Box, Spacer, Text, Popover, PopoverTrigger, PopoverContent, Button, IconButton, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineMenu} from "react-icons/ai";
import { AiOutlineClose} from "react-icons/ai";
import  Logo  from '../assets/insta_logo_3.png'
import { Link } from "react-router-dom";
import { HeaderServices } from "./HeaderServices";

export const Header = () => {
const [display, setDisplay]= useState("none")
  return (
    <>
    <Flex
      px="100px"
      py="30px"
      width="full"
      bg="white.900"
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <Flex alignItems="flex-end">
        <Box mr="60px" w={["50%", "50%", "40%","20%"]} justifyContent="center">
          <Image
            src={Logo}
            w="100%"
            
          />
        </Box>
        <Flex display={["none","none","flex","flex"]}> 
        <HStack color="blue.800" fontWeight="semibold" spacing="40px" fontSize="20px">
          <Link to='/'>Home</Link>
          <Link><HeaderServices/></Link>
          <Link>About us</Link>
          <Link to="/news">News & Information</Link>
        </HStack></Flex>
        <Spacer/>
        <Button rightIcon={<FiArrowUpRight />} colorScheme='teal' variant='outline'>
          <a href="#footer">Call us</a>
        </Button>
        <IconButton onClick={()=>setDisplay("flex")} icon={<AiOutlineMenu/>} colorScheme="blackAlpha" aria-label="Open Menu" ml={5} display={["flex","flex","none","none"]}></IconButton>
      </Flex>
      
    </Flex>
    <Flex display={display} justifyContent="center" alignItems="flex-start" w="100vh" h="100vh" bgColor="gray.50" zIndex="20" pos="fixed" top="0px" left="0px" overflow="auto"> 
      
        <VStack color="blue.800" fontWeight="semibold" spacing="40px" fontSize="20px" >
        <IconButton icon={<AiOutlineClose/> } onClick={()=>setDisplay("none")}/>
          <Link>Home</Link>
          <Link><HeaderServices/></Link>
          <Link>About us</Link>
          <Link>News & Information</Link>
        </VStack></Flex></>
  );
};
