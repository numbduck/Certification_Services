import React from "react";
import styles from "./domesticService.module.css";
import {
  Box,
  Img,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Link,
} from "@chakra-ui/react";
import {AiOutlineRight} from "react-icons/ai";
import {AiOutlineCheckCircle} from "react-icons/ai";
import BIS from "./tabs_services/BIS";
import ISI_image from "../../assets/ISI_image.png"
import ISI_logo from "../../assets/ISI_logo.png";
import BEEE_logo from "../../assets/BEEE_logo.png";
import CRS_logo from "../../assets/CRS_logo.png";
import FMCS_logo from "../../assets/FMCS_logo.png";
import AERB_logo from "../../assets/AERB_logo.png";
import Laptop_certificate from "../../assets/Laptop_certificate.png";
import CRS from "./tabs_services/CRS";
import ISO from "./tabs_services/ISO";
const DomesticService = () => {
  return (
    <>
      <div className={styles.Container} >

        <Box className={styles.box}>
          <Box className={styles.home} pt='1rem'>
            <Box> <Link to="/">Home</Link></Box>
            <Box>
              <AiOutlineRight fontSize='30px' color='gray.600' mt='-4px' />
            </Box>
            <Box>Domestic Services</Box>
          </Box>
          <Box className={styles.crmImg}>
            <Box align="left" w="40%" mr="2rem" ml="1rem">
              <Text mb="12px" fontSize="21px" fontWeight="500" color="gray.600">
                Instant Certification
              </Text>
              <Text mb="12px" fontSize="33px" fontWeight="600" color="gray.600">
              Technical Compliance Services
              </Text>
              <Text fontSize="" fontWeight="500" lineHeight="30px">
              Providing the security of recognized certification wherever your business needs it.
              </Text>
              <button className={styles.crmbtn}>Contact</button>
            </Box>
            <Box w="50%">
              <Img src={ISI_image} alt="leader" w="100%" />
            </Box>
          </Box>
          {/* Tab bar start Here’s */}
          <Box background="white">
            <Tabs variant="unstyled">
              <TabList
                pl="12rem"
                gap="20px"
                bg="blue.800"
                color="white"
                h="4rem"
                fontSize="1rem"
                justifyContent="space-evenly"
                
              >
                <Tab _selected={{ bg: "gray.400" }}>BIS</Tab>
                <Tab _selected={{ bg: "gray.400" }}>CRS</Tab>
                <Tab _selected={{ bg: "gray.400" }}>FMCS</Tab>
                <Tab _selected={{ bg: "gray.400" }}>BEEE</Tab>
              </TabList>
              <TabPanels align="center">
                <TabPanel>
                  <BIS />
                </TabPanel>
                <TabPanel>
                  <CRS />
                </TabPanel>
                <TabPanel>
                  <ISO />
                </TabPanel>
                <TabPanel>
                  <BIS />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
          <Box className={styles.crmImg}>
            <Box align="left" w="50%" mr="2rem" ml="1rem">
              <Text mb="12px" fontSize="21px" fontWeight="600" color="gray.700">
                Looking for enterprise CRM features?
              </Text>
              <Text
                fontSize="16px"
                fontWeight="500"
                lineHeight="30px"
                color="gray.500"
              >
                HubSpot’s CRM platform also offers enterprise software for
                marketing, sales, customer service, content management, and
                operations. Get premium versions of all the free features you
                see here — and much more!
              </Text>
              <button className={styles.crmbtn}><a href="https://www.hubspot.com/products/crm/enterprise?hubs_content=www.hubspot.com%2Fproducts%2Fcrm&hubs_content-cta=crmpersona-middle-salesleader">Learn more</a></button>
            </Box>
            <Box w="50%">
              <Img src={Laptop_certificate.png} alt="leader" w="120%" pb="1rem" />
            </Box>
          </Box>
          {/* start calendar */}
          <Box background="white" pt="1rem">
            <Box className={styles.crmImg}>
              <Box w="50%">
                <Img
                  src={ISI_image}
                  ml="4rem"
                  boxShadow="2xl"
                  alt="leader"
                  w="80%"
                  pb="1rem"
                />
              </Box>
              <Box align="left" w="32%" ml="5rem">
                <Text
                  mb="25px"
                  fontSize="21px"
                  fontWeight="600"
                  color="gray.700"
                >
                  Arm your sales team with time-saving tools they’ll actually
                  use.
                </Text>
                <Text
                  mb="1rem"
                  fontSize="16px"
                  fontWeight="500"
                  lineHeight="30px"
                  color="gray.500"
                >
                  Close more deals with less work using tools that remove
                  friction from the sales process.
                </Text>
                <Text
                  fontSize="16px"
                  fontWeight="500"
                  lineHeight="30px"
                  color="gray.500"
                >
                  Your sales team can use free CRM tools that notify them when a
                  prospect opens an email or visits your website. Then they can
                  use that information to follow up at the right time via live
                  chat, email, or call.
                </Text>
              </Box>
            </Box>

            <Box mt="2rem" textAlign="center">
              <Text fontSize="14px" fontWeight="600" color="gray.600">
                FREE FEATURES YOU'LL LOVE
              </Text>
              <HStack ml="26%" gap="1rem">
                <Box fontWeight="600" color="cyan.800" my="2rem">
                  {" "}
                  <AiOutlineCheckCircle
                    w={5}
                    h={5}
                    color="orangered"
                    mx="5px"
                  />{" "}
                  <a className={styles.anchorTagCRM} href="https://www.hubspot.com/products/sales/email-tracking?hubs_content=www.hubspot.com%252F&hubs_content-cta=nav-software-freecrm">Email tracking</a>
                </Box>
                <Box fontWeight="600" color="cyan.800" my="2rem">
                  {" "}
                  <AiOutlineCheckCircle
                    w={5}
                    h={5}
                    color="orangered"
                    mx="5px"
                  />{" "}
                   <a className={styles.anchorTagCRM} href="https://www.hubspot.com/products/sales/email-tracking?hubs_content=www.hubspot.com%252F&hubs_content-cta=nav-software-freecrm">Prospect tracking</a>
                </Box>
                <Box fontWeight="600" color="cyan.800" my="2rem">
                  {" "}
                  <AiOutlineCheckCircle
                    w={5}
                    h={5}
                    color="orangered"
                    mx="5px"
                  />{" "}
                   <a className={styles.anchorTagCRM} href="https://www.hubspot.com/products/sales/schedule-meeting?hubs_content=www.hubspot.com%252F&hubs_content-cta=nav-software-freecrm">Meeting scheduler</a>
                </Box>
                <Box fontWeight="600" color="cyan.800" my="2rem">
                  {" "}
                  <AiOutlineCheckCircle
                    w={5}
                    h={5}
                    color="orangered"
                    mx="5px"
                  />{" "}
                  <a className={styles.anchorTagCRM} href="https://www.hubspot.com/products/sales/schedule-meeting?hubs_content=www.hubspot.com%252F&hubs_content-cta=nav-software-freecrm">Live chat</a>
                </Box>
              </HStack>
            </Box>

            <Box ml="16.5%" align="left">

            </Box>
          </Box>
          <Box className={styles.crmImg}>
            <Box w="70%" m="auto" mb="4rem">
              <Text mb="12px" fontSize="33px" fontWeight="600" color="gray.600">
                Top-Rated Free CRM Software for Your Whole Business
              </Text>
              <Text fontSize="" fontWeight="500" lineHeight="30px">
                Start using the CRM that’s 100% free — with something for
                everyone.
              </Text>
              <button className={styles.crmbtn}>Get Free CRM</button>
            </Box>
          </Box>
          <Box display="flex" ml="18%" gap="1.5rem" justifyContent="center">
            <Img w="130px" h="100px" src={ISI_logo} alt="icon" />
            <Img w="130px" h="100px" src={BEEE_logo} alt="icon" />
            <Img w="110px" h="100px" src={CRS_logo} alt="icon" />
            <Img w="110px" h="100px" src={AERB_logo} alt="icon" />
            <Img w="125px" h="100px" src={FMCS_logo} alt="icon" />
          </Box>
          <Text w="57%" m="auto" mt="3.5rem" fontSize="30px" fontWeight="600" color="gray.600">
            Frequently Asked Questions
          </Text>
          <Box w="57%" m="auto" mt="2rem" pb='3rem'>
            <Accordion allowToggle>
              <AccordionItem
                py="1rem"
                background="white"
                border="1px solid gray"
                mb="1rem"
              >
                <h2>
                  <AccordionButton>
                    <AccordionIcon color="cyan.600" fontSize="30px" />
                    <Box
                      ml="1rem"
                      flex="1"
                      textAlign="left"
                      fontWeight="600"
                      fontSize="18px"
                    >
                      What is CRM software?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="gray.600"
                  mx="1.5rem"
                  align="left"
                  pb={4}
                >
                  CRM stands for “customer relationship management.” Customer
                  relationship management software is a powerful tool that helps
                  businesses organize and manage their customer relationships on
                  a centralized and easy-to-use platform. By tracking leads and
                  building a full database of customer activity, businesses have
                  clear insight into where they stand with each customer in the
                  buying process. <br />
                  <br />
                  When you use HubSpot’s CRM solution, your CRM is automatically
                  integrated with your HubSpot marketing, sales, customer
                  service, and operations tools right out of the box. This makes
                  it easy to optimize and personalize your campaigns and
                  processes with data from your CRM, which leads to more
                  powerful and impactful work from your teams
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                py="1rem"
                background="white"
                border="1px solid gray"
                mb="1rem"
              >
                <h2>
                  <AccordionButton>
                    <AccordionIcon color="cyan.600" fontSize="30px" />
                    <Box
                      ml="1rem"
                      flex="1"
                      textAlign="left"
                      fontWeight="600"
                      fontSize="18px"
                    >
                      What are popular free CRM software feature?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="gray.600"
                  mx="1.5rem"
                  align="left"
                  pb={4}
                >
                  <ul>
                    <li className={styles.listOne}>
                      HubSpot’s free CRM includes all of the following popular
                      features (and more!):
                    </li>
                    <li>Contact deal and task management</li>
                    <li>Email tracking and engagement notification</li>
                    <li>Email templates and scheduling</li>
                    <li>Document sharing</li>
                    <li>Meeting scheduling</li>
                    <li>Live chat</li>
                    <li>Sales quotes</li>
                  </ul>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                py="1rem"
                background="white"
                border="1px solid gray"
                mb="1rem"
              >
                <h2>
                  <AccordionButton>
                    <AccordionIcon color="cyan.600" fontSize="30px" />
                    <Box
                      ml="1rem"
                      flex="1"
                      textAlign="left"
                      fontWeight="600"
                      fontSize="18px"
                    >
                      How much does your CRM software cost?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="gray.600"
                  mx="1.5rem"
                  align="left"
                  pb={4}
                >
                  You can use HubSpot’s free CRM functionality at no cost. With
                  up to 1,000,000 contacts and no limits on users or customer
                  data, HubSpot’s free CRM functionality is 100% free, with no
                  expiration date.
                  <br />
                  <br />
                  More advanced CRM functionality is available as part of our
                  premium Sales Hub products. Learn more about Sales Hub
                  features and general pricing info here.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                py="1rem"
                background="white"
                border="1px solid gray"
                mb="1rem"
              >
                <h2>
                  <AccordionButton>
                    <AccordionIcon color="cyan.600" fontSize="30px" />
                    <Box
                      ml="1rem"
                      flex="1"
                      textAlign="left"
                      fontWeight="600"
                      fontSize="18px"
                    >
                      Is your CRM software a good fit for my business?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  color="gray.600"
                  mx="1.5rem"
                  align="left"
                  pb={4}
                >
                  Whether you're a one-person business or a large-scale
                  enterprise, HubSpot's CRM platform scales with your needs. You
                  can start for free or request a demo to learn more about
                  HubSpot's premium features for enterprise businesses.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default DomesticService;
