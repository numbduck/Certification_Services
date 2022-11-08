import { Box, Button, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

export const ServiceCard = ({
  icon,
  heading,
  description,link}) => {
  return (
    <Flex
      flexDirection="column"
      bg="yellow.50"
      p="40px"
      w="full"
      height="380px"
      justifyContent="space-between"
    >
      <Box align="center">
      <Icon color="blue.900" h={20} w={20} as={icon}  /></Box>
      <Box align="center">
        <Heading color="blue.900" fontSize={28} letterSpacing="3px" pb="20px">
          {heading}
        </Heading>
        <Text color="blue.700">{description}</Text>
      </Box>
      <Button rightIcon={<IoArrowForwardCircleOutline />} colorScheme='teal' variant='outline'>
            <NavLink to={link}>Explore More</NavLink>
      </Button>
    </Flex>
  );
};
