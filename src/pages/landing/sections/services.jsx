import { Box, Flex, Text, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { ServiceCard } from "../../../components/serviceCard";
import { RiComputerLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import Carousel from 'react-elastic-carousel';

export const Services = () => {
  return (
    <Box w="full" py="60px" px="200px">
      <Flex justifyContent="space-between" alignItems="center" pb="60px">
        <Heading fontSize={42} letterSpacing="4px" color="blue.900">
          What we can <br /> provide you
        </Heading>
        <Text maxW="300px" color="blue.700">
          Aliquip anim id ea minim enim excepteur. Sint do qui irure
          consectetur. Nulla quis incididunt dolore veniam. Ullamco id ullamco
          cillum magna consectetur mollit elit commodo veniam nisi.
        </Text>
      </Flex>
      <HStack w="full" spacing="60px">
      <Carousel color="orange.900">
        <ServiceCard
          icon={RiComputerLine}
          heading="Indian Compliance"
          description="Sint sunt eiusmod ipsum mollit exercitation occaecat commodo incididunt nulla pariatur aliqua ut reprehenderit."
          link="/domesticService"
        />
        <ServiceCard
          icon={BsPencilSquare}
          heading="International Compliance"
          description="Voluptate fugiat nisi veniam nulla enim dolore ex magna pariatur duis anim amet eiusmod."
          link="/internationalService"
        />
         <ServiceCard
          icon={BsPencilSquare}
          heading="Testing and Calibration"
          description="Voluptate fugiat nisi veniam nulla enim dolore ex magna pariatur duis anim amet eiusmod."
        /></Carousel>
      </HStack>
    </Box>
  );
};
