"use client";

import { Box, Divider, Flex, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { MotionText, MotionFlex, MotionBox } from "../Chakra-page/Motion";
import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
  return (
    <Box bg="black" w="full">
      <Flex
        w={"full"}
        justify={{ base: "start", md: "center", lg: "center" }}
        align={{ base: "start", md: "center", lg: "flex-start" }}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        py={{ base: "10", md: "10", lg: "20" }}
        gap={{ base: "10", md: "10", lg: "20" }}
        px={{ base: "5", md: "10", lg: "20" }}
        color={"white"}
      >
        <Flex
          align={{ base: "start", md: "start", lg: "start" }}
          flexDirection="column"
          w={{ base: "100%", md: "100%", lg: "25%" }}
        >
          <MotionBox
           
            viewport={{ once: true, amount: 0.3 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeInOut",
            }}
            mb={4}
          >
        
 <Image  src="https://drive.google.com/uc?export=view&id=1czPtHOnb06NAo-awhCgsOgO_uHXNEUVU" width={40} height={40}
                      alt="Logo"
                    />
          </MotionBox>
          <MotionText
          
            viewport={{ once: true, amount: 0.3 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: "easeInOut",
            }}
            color={"gray.500"}
            textAlign={{ base: "left", md: "left", lg: "start" }}
            fontSize="sm"
            lineHeight="tall"
          >
            Our solutions make production faster and more cost-effective. 
            Contact us today to streamline your manufacturing processes.
          </MotionText>
        </Flex>

        <SimpleGrid columns={{ base: 2, md: 4, lg: 4 }} spacing={{ base: 8, md: 10 }} w="full">
          {/* Company Column */}
          <MotionFlex
            viewport={{ once: true, amount: 0.3 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
            flexDirection="column"
            gap={3}
          >
            <Text fontSize={"md"} fontWeight={"bold"} mb={2}>
              Company
            </Text>
            <Link href={"#"}><Text color={"gray.500"} fontSize="sm" _hover={{color: "white"}}>About Us</Text></Link>
            <Link href={"#"}><Text color={"gray.500"} fontSize="sm" _hover={{color: "white"}}>Customers</Text></Link>
            <Link href={"#"}><Text color={"gray.500"} fontSize="sm" _hover={{color: "white"}}>Newsroom</Text></Link>
            <Link href={"#"}><Text color={"gray.500"} fontSize="sm" _hover={{color: "white"}}>Events</Text></Link>
          </MotionFlex>

          {/* Industries Column */}
          <MotionFlex
            viewport={{ once: true, amount: 0.3 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            flexDirection="column"
            gap={3}
          >
            <Text fontSize={"md"} fontWeight={"bold"} mb={2}>
              Industries
            </Text>
            <Link href={"#"}><Text color={"gray.500"} fontSize="sm" _hover={{color: "white"}}>Precision Metalforming</Text></Link>
            <Link href={"#"}><Text color={"gray.500"} fontSize="sm" _hover={{color: "white"}}>Industrial Manufacturing</Text></Link>
            <Link href={"#"}><Text color={"gray.500"} fontSize="sm" _hover={{color: "white"}}>High Tech & Electronics</Text></Link>
            <Link href={"#"}><Text color={"gray.500"} fontSize="sm" _hover={{color: "white"}}>Aerospace</Text></Link>
          </MotionFlex>

          {/* Product Column */}
          <MotionFlex
            viewport={{ once: true, amount: 0.3 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
            flexDirection="column"
            gap={3}
          >
            <Text fontSize={"md"} fontWeight={"bold"} mb={2}>
              Product
            </Text>
            <Link href={"#"}><Text color={"gray.500"} fontSize="sm" _hover={{color: "white"}}>MES System</Text></Link>
            <Link href={"#"}><Text color={"gray.500"} fontSize="sm" _hover={{color: "white"}}>Enterprise Resource Planning</Text></Link>
            <Link href={"#"}><Text color={"gray.500"} fontSize="sm" _hover={{color: "white"}}>Quality Management</Text></Link>
            <Link href={"#"}><Text color={"gray.500"} fontSize="sm" _hover={{color: "white"}}>Supply Chain Planning</Text></Link>
          </MotionFlex>

          {/* Contact Column */}
          <MotionFlex
            viewport={{ once: true, amount: 0.3 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
            flexDirection="column"
            gap={4}
          >
            <Text fontSize={"md"} fontWeight={"bold"} mb={2}>
              Get In Touch
            </Text>
            <Text color={"gray.500"} fontSize="sm">support@monarch.com</Text>
            <HStack spacing={4}>
              <Box _hover={{color: "teal.400", cursor: "pointer"}} transition="0.3s"><CiLinkedin fontSize="24px" /></Box>
              <Box _hover={{color: "teal.400", cursor: "pointer"}} transition="0.3s"><FaInstagram fontSize="24px" /></Box>
              <Box _hover={{color: "teal.400", cursor: "pointer"}} transition="0.3s"><FaFacebookSquare fontSize="24px" /></Box>
            </HStack>
          </MotionFlex>
        </SimpleGrid>
      </Flex>

      <Box px={{ base: "5", md: "20" }}>
        <Divider borderColor="gray.800" />
      </Box>

      <Flex
        align={"center"}
        justify={"space-between"}
        flexDirection={{ base: "column-reverse", md: "row" }}
        py={8}
        px={{ base: "5", md: "20" }}
        color={"gray.500"}
        fontSize="sm"
        gap={4}
      >
        <HStack spacing={1}>
          <FaRegCopyright />
          <Text>2026 Monarch. All Rights Reserved.</Text>
        </HStack>
        
        <HStack spacing={6}>
          <Link href={"#"}><Text _hover={{color: "white"}}>Terms & Conditions</Text></Link>
          <Link href={"#"}><Text _hover={{color: "white"}}>Privacy Policy</Text></Link>
        </HStack>
      </Flex>
    </Box>
  );
}