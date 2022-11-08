
import {AiOutlineCheckCircle} from "react-icons/ai";
import styles from "../domesticService.module.css";
import { Box, HStack, Text } from '@chakra-ui/layout'
import { Img } from '@chakra-ui/react'
import React from 'react'
import Laptop_certificate from "../../../assets/Laptop_certificate.png";


const CRS = () => {
  return (
    <div>
         <Box mt='4rem' ml="1rem">
              <Text mb="12px" fontSize="24px" fontWeight="600" color="gray.600">
              CRS Compliances
              </Text>
              <Text fontSize="20px" fontWeight="500" lineHeight="30px" color="gray.600">
              The <b>Compulsory Registration Scheme (CRS)</b>  is introduced by the Ministry of Electronics & Information Technology <br/> and in this Scheme, it is compulsory for manufacturers to obtain BIS CRS Registration Certificate for their electronic products <br/> before launching them into the market.
              </Text>
              <button className={styles.crmbtn}>Get Certified</button>
            </Box>
          <Box className={styles.crmImg}>
            <Box align="left" w="38%" mr="2rem" ml="1rem">
              <Text mb="12px" mt='3rem' fontSize="23px" fontWeight="500" color="gray.700">
              Capture more new leads, and grow your database.
              </Text>
              <Text mt='1rem'  fontSize="17px" fontWeight="100" lineHeight="30px" color="gray.500">
              Get a real-time view of your entire sales pipeline on a visual dashboard.
              </Text>
              <Text  mt='1rem' fontSize="17px" fontWeight="100" lineHeight="30px" color="gray.500">
              Access detailed reports on sales activity, productivity, and individual performance. Then use those insights to track team performance and spot opportunities for growth
              </Text>
              <Text mt='1rem'  fontSize="17px" fontWeight="100" lineHeight="30px" color="gray.500">
              Enjoy unlimited users, data, and up to 1,000,000 contacts with no time limit or expiration date — whether you're a team of 1 or 1,000.
              </Text>
            </Box>
            <Box w="50%">
              <Img
                src={Laptop_certificate}
                alt="leader"
                w="80%"
                ml='3rem'
              />
            </Box>
          </Box>
          <Box mt='2rem' textAlign='center'>
                <Text fontSize="14px" fontWeight="600" color="gray.600">FREE FEATURES YOU'LL LOVE</Text>
                <HStack ml='20%' gap='1rem' mt='1rem' mb='4rem'>
                    <Box fontWeight='600' color='cyan.800'> <AiOutlineCheckCircle  w={5} h={5} color="orangered" mx='5px' /> <a className={styles.anchorTagCRM} >Reporting dashboard</a></Box>
                    <Box fontWeight='600' color='cyan.800'> <AiOutlineCheckCircle  w={5} h={5} color="orangered" mx='5px' /> <a className={styles.anchorTagCRM} >Company insights</a></Box>
                    <Box fontWeight='600' color='cyan.800'> <AiOutlineCheckCircle w={5} h={5} color="orangered" mx='5px' /> <a className={styles.anchorTagCRM} >Deal tracking</a></Box>
                    <Box fontWeight='600' color='cyan.800'> <AiOutlineCheckCircle  w={5} h={5} color="orangered" mx='5px' /> <a className={styles.anchorTagCRM} >Pipeline management</a></Box>
                </HStack>
            </Box>

    </div>
  )
}

export default CRS;