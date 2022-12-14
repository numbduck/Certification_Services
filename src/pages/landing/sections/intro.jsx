import {
  Box,
  Heading,
  Text,
  Link,
  Flex,
  Icon,
  AspectRatio,
  Img,
} from "@chakra-ui/react";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import group16x9 from "../../../assets/group16x9.jpg";

export const Intro = () => {
  return (
    <Box w="full" bg="blue.900" px="200px" py="60px" mb="120px">
      <Flex justifyContent="space-between" alignItems="center" pb="80px">
        <Heading fontSize={54} letterSpacing="6px" color="whiteAlpha.900">
          Business which cares <br /> about growth
        </Heading>
        <Box maxW="300px">
          <Text color="whiteAlpha.700" pb="20px">
            Proident aliquip elit nostrud dolore cupidatat id reprehenderit
            magna enim ullamco eu consequat labore. Laboris irure ea pariatur
            nulla exercitation Lorem duis. Nostrud id duis deserunt nostrud
            commodo quis. Ipsum dolore dolore ut esse reprehenderit.
          </Text>
          <Link color="whiteAlpha.900">
            Explore more
            <Icon as={IoArrowForwardCircleOutline} ml="10px" h={6} w={6} alignItems="flex-end" />
          </Link>
        </Box>
      </Flex>
      <AspectRatio w="full" ratio={16 / 9} mb="-200px">
        <Img src={group16x9} pb="60px" />
      </AspectRatio>
    </Box>
  );
};
