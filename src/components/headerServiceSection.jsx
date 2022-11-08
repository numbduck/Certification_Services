import "./headerServiceSection.css";
import {AiOutlineArrowRight} from "react-icons/ai";
import {GrServices} from "react-icons/gr";
import {MdPointOfSale} from "react-icons/md";
import {IoIosPeople} from "react-icons/io"
import { Box, Flex, Icon, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

 
function Header_ServiceSection(){
  const c = "color.600";
  return (
    <Box className="mainb">
      <Text className="heading" color={c}>
        The HubSpot CRM Platform
      </Text>
      <Text className="heading1" color={c}>
        All of HubSpot's marketing, sales CRM, customer service, CMS, and
        operations software on one platform.
      </Text>
      <Box className="btnlinkbox" w={["90%", "90%", "60%"]}>
        <Flex
          justifyContent="space-between"
          direction={["column", "column", "row"]}
        >
          <Box className="boxstyle" w={["100%", "100%", "45%"]}>
            
              Free HubSpot CRM <AiOutlineArrowRight />
        
          </Box>
          <Box className="boxstyle" w={["100%", "100%", "45%"]}>
            
              Overview of all products <AiOutlineArrowRight />
           
          </Box>
        </Flex>
      </Box>
      <SimpleGrid className="cards" minChildWidth="250px" w={["90%","90%","80%"]}>
        
          <Box className="card" boxShadow="sm" _hover={{ boxShadow: "md" }}>
            <Flex textAlign="left" justifyContent="space-around">
              <Box width="10%">
                <Icon as={GrServices} alt="Marketing Hub" width="100%"/>
              </Box>
              <Box>
                <Text className="cardhead">Marketing Hub</Text>
                <Text>
                  Marketing automation <br />
                  software.{" "}
                  <span style={{ color: "teal", fontWeight: "500" }}>
                    <Link>
                      Free and premium <br /> plans <AiOutlineArrowRight />
                    </Link>
                  </span>
                </Text>
              </Box>
            </Flex>
          </Box>
        
        <Box className="card" boxShadow="sm" _hover={{ boxShadow: "md" }}>
          
            <Flex textAlign="left" justifyContent="space-around">
              <Box width="10%">
                <Icon as={MdPointOfSale} alt="Sales Hub" width="100%" />
              </Box>
              <Box>
                <Text className="cardhead">Sales Hub</Text>
                <Text>
                  Sales CRM software.{" "}
                  <span style={{ color: "teal", fontWeight: "500" }}>
                    <Link>
                      Free <br /> and premium plans <AiOutlineArrowRight />
                    </Link>
                  </span>
                </Text>
              </Box>
            </Flex>
          
        </Box>
        <Box className="card" boxShadow="sm" _hover={{ boxShadow: "md" }}>
          <Flex textAlign="left" justifyContent="space-around">
            <Box width="10%">
              <Icon as={GrServices} alt="Service Hub" width="100%" />
            </Box>
            <Box>
              <Text className="cardhead">Service Hub</Text>
              <Text>
                Customer service software. <br />
                <span style={{ color: "teal", fontWeight: "500" }}>
                  <Link>
                    Free and premium plans <AiOutlineArrowRight />
                  </Link>
                </span>
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box className="card" boxShadow="sm" _hover={{ boxShadow: "md" }}>
          <Flex textAlign="left" justifyContent="space-around">
            <Box width="10%">
              <Icon as={IoIosPeople} alt="CMS Hub" width="100%" />
            </Box>
            <Box>
              <Text className="cardhead">CMS Hub</Text>
              <Text>
                Content management <br />
                software.{" "}
                <span style={{ color: "teal", fontWeight: "500" }}>
                  <Link>
                    Free and premium <br /> plans <AiOutlineArrowRight />
                  </Link>
                </span>
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box className="card" boxShadow="sm" _hover={{ boxShadow: "md" }}>
          <Flex textAlign="left" justifyContent="space-around">
            <Box width="10%">
              <Icon as={IoIosPeople} alt="Operations Hub" width="100%" />
            </Box>
            <Box>
              <Text className="cardhead">Operations Hub</Text>
              <Text>
                Operations software.{" "}
                <span style={{ color: "teal", fontWeight: "500" }}>
                  <Link>
                    Free and <br /> premium plans <AiOutlineArrowRight />
                  </Link>
                </span>
              </Text>
            </Box>
          </Flex>
        </Box>
      </SimpleGrid>
      <Box className="bbox">
        <Box className="cardbottomhead">
          <Text color={c}>App Marketplace</Text>
        </Box>
        <Box>
          <Text pb="30px">
            Connect your favorite apps to HubSpot.{" "}
            <span className="bottomtext">
              <Link>
                See all integration
                <AiOutlineArrowRight />{" "}
              </Link>
            </span>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export {Header_ServiceSection};

