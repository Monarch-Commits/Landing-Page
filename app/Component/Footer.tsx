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
    <>
      <Flex
        w={"full"}
        justify={{ base: "start", md: "center", lg: "center" }}
        align={{ base: "start", md: "center", lg: "center" }}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        bg="black" // ← mas klaro!
        py={{ base: "5", md: "10", lg: "10" }}
        gap={{ base: "5", md: "10", lg: "20" }}
        px={{ base: "5", md: "10", lg: "20" }}
        color={"white"}
      >
        <Flex
          m={"auto"}
          align={{ base: "center", md: "center", lg: "start" }}
          flexDirection="column"
          w={{ base: "90%", md: "90%", lg: "20%" }}
        >
          <MotionBox
            viewport={{ once: false, amount: 0.3 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.2,
              ease: "easeInOut",
            }}
            py={3}
          >
            <Image src="/logo.png" width={80} height={80} alt="logo" />
          </MotionBox>
          <MotionText
            viewport={{ once: false, amount: 0.3 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              ease: "easeInOut",
            }}
            color={"gray.500"}
            m={"auto"}
            textAlign={{ base: "center", md: "center", lg: "start" }}
          >
            Our solution make production faster and cheaper. Contact us for more
            information.
          </MotionText>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <MotionFlex
            viewport={{ once: false, amount: 0.3 }}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeInOut",
            }}
            flexDirection="column"
            gap={1}
          >
            <Text fontSize={"md"} fontWeight={"bold"}>
              Company
            </Text>
            <Link href={"#"}>
              <Text color={"gray.500"}>About Us</Text>
            </Link>
            <Link href={"#"}>
              <Text color={"gray.500"}>Customers</Text>
            </Link>
            <Link href={"#"}>
              <Text color={"gray.500"}>Newsroom</Text>
            </Link>
            <Link href={"#"}>
              <Text color={"gray.500"}>Events</Text>
            </Link>
          </MotionFlex>

          <MotionFlex
            viewport={{ once: false, amount: 0.3 }}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeInOut",
            }}
            flexDirection="column"
            gap={1}
          >
            <Text fontSize={"md"} fontWeight={"bold"}>
              Industries
            </Text>
            <Link href={"#"}>
              <Text color={"gray.500"}>Precisions Metalforming</Text>
            </Link>
            <Link href={"#"}>
              <Text color={"gray.500"}>Industrial Manufacturing</Text>
            </Link>
            <Link href={"#"}>
              <Text color={"gray.500"}>High Tech and Electronic</Text>
            </Link>
            <Link href={"#"}>
              <Text color={"gray.500"}>Aerospace</Text>
            </Link>
          </MotionFlex>

          <MotionFlex
            viewport={{ once: false, amount: 0.3 }}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: "easeInOut",
            }}
            flexDirection="column"
            gap={1}
          >
            <Text fontSize={"md"} fontWeight={"bold"}>
              Product
            </Text>
            <Link href={"#"}>
              <Text color={"gray.500"}>Manufacturing Execution System</Text>
            </Link>
            <Link href={"#"}>
              <Text color={"gray.500"}>Enterprice Resource Planning </Text>
            </Link>
            <Link href={"#"}>
              <Text color={"gray.500"}>Quality Management System</Text>
            </Link>
            <Link href={"#"}>
              <Text color={"gray.500"}>Supply Chain Planning</Text>
            </Link>
          </MotionFlex>
          <MotionFlex
            viewport={{ once: false, amount: 0.3 }}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeInOut",
            }}
            flexDirection="column"
            gap={2}
          >
            <Text fontSize={"md"} fontWeight={"bold"}>
              Get In Touch
            </Text>
            <Text color={"gray.500"}>Sample@gmail.com</Text>
            <HStack spacing={4}>
              <CiLinkedin fontSize="24px" />
              <FaInstagram fontSize="24px" />
              <FaFacebookSquare fontSize="24px" />
            </HStack>
          </MotionFlex>
        </SimpleGrid>
      </Flex>
      <Box w={"90%"}>
        <Divider orientation="horizontal" />
      </Box>

      <Flex
        align={"center"}
        bg={"black"}
        justify={"space-between"}
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        padding={5}
        color={"white"}
      >
        <Flex align={"center"} gap={2}>
          <Text color={"gray.500"}>
            <FaRegCopyright />
          </Text>
          <Text color={"gray.500"}>2024 Monarch. All Right Reserve</Text>
        </Flex>
        <Flex gap={4}>
          <Link href={"#"}>
            <Text color={"gray.500"}>Terms &amp; Conditions</Text>
          </Link>
          <Link href={"#"}>
            <Text color={"gray.500"}>Privacy Policy</Text>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
