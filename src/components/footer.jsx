import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Img,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import  Logo  from '../assets/insta_logo_mono.png'

export const Footer = () => (
  <Box id="footer" as="footer" role="contentinfo" w="full" bgColor="blue.900" p="0px 40px 0px 40px">
    <Stack
      spacing="6"
      direction={{ base: 'column', md: 'row' }}
      justify="space-between"
      py={{ base: '12', md: '16' }}
    >
      <Stack spacing={{ base: '6', md: '8' }} w={["50%", "50%", "40%","20%"]} align="start">
        <Img src={Logo}></Img>
        <Text color="whiteAlpha.600" fontWeight="semibold" fontFamily="sans-serif">Instant Certification for your Business.</Text>
      </Stack>
      <Stack
        direction={{ base: 'column-reverse', md: 'column', lg: 'row' }}
        spacing={{ base: '10', md: '8' }}
      >
        <Stack direction="row" spacing="8">
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="md" fontWeight="bold" color="whiteAlpha.900">
              Product
            </Text>
            <Stack spacing="3" shouldWrapChildren color="whiteAlpha.700" fontWeight="semibold">
              <Button color="whiteAlpha.700" fontWeight="semibold" variant="link">How it works</Button>
              <Button color="whiteAlpha.700" fontWeight="semibold" variant="link">Pricing</Button>
              <Button color="whiteAlpha.700" fontWeight="semibold" variant="link">Use Cases</Button>
            </Stack>
          </Stack>
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="md" fontWeight="bold" color="whiteAlpha.900" >
              Legal
            </Text>
            <Stack spacing="3" shouldWrapChildren >
              <Button color="whiteAlpha.700" fontWeight="semibold" variant="link">Privacy</Button>
              <Button color="whiteAlpha.700" fontWeight="semibold" variant="link">Terms</Button>
              <Button color="whiteAlpha.700" fontWeight="semibold" variant="link">License</Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack spacing="4">
          <Text fontSize="md" fontWeight="bold" color="whiteAlpha.900">
            Reach us
          </Text>
          <Stack spacing="4" direction={{ base: 'column', sm: 'row' }} maxW={{ lg: '360px' }}>
          <iframe src="https://maps.google.com/maps?q=noida&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas"></iframe>
          
          </Stack>
          <Text color="whiteAlpha.700" fontWeight="semibold">+91 9468260000</Text>
        </Stack>
      </Stack>
    </Stack>
    <Divider />
    <Stack
      pt="8"
      pb="12"
      justify="space-between"
      direction={{ base: 'column-reverse', md: 'row' }}
      align="center"
    >
      <Text fontSize="sm" color="whiteAlpha.900">
        &copy; {new Date().getFullYear()} InstaCertify. All rights reserved.
      </Text>
      <ButtonGroup variant="ghost" color="blackAlpha.900">
        <IconButton
          as="a"
          href="#"
          aria-label="LinkedIn"
          icon={<FaLinkedin fontSize="1.25rem" />}
        />
        <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
        <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="1.25rem" />} />
      </ButtonGroup>
    </Stack>
  </Box>
)
