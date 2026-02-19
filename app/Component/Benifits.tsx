"use client";

import { Box, Flex, HStack, Text, Stack } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { MotionBox, MotionText } from "../Chakra-page/Motion";
import Image from "next/image";

const Benefit = [
  {
    Icon: <FaCheckCircle />,
    check: "Boosting Quality and Tech",
    description:
      "With Advance Technology, we help you achieve productivity and quality. Discover how our systems enhance your standards.",
  },
  {
    Icon: <FaCheckCircle />,
    check: "Optimizing Production Processes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    Icon: <FaCheckCircle />,
    check: "AI-Driven Production",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function Benefits() {
  return (
    <Flex
      m={"auto"}
      w="100%"
      justify="center"
      align="center"
      px={4}
      py={{ base: "5", md: "10", lg: "20" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        flexWrap="wrap"
        justify="center"
        align="center"
        w="100%"
        maxW="1200px"
        gap={{ base: 5, md: 15, lg: 20 }}
      >
        <MotionBox
          viewport={{ once: false, amount: 0.3 }}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          w={{ base: "90%", md: "40%", lg: "40%" }}
          h="auto"
          borderRadius={"2xl"}
        >
          <Image
            src="https://images.unsplash.com/photo-1707336862166-1e483cfa5c92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
            alt="Banner"
            width={600}
            height={500}
            style={{ borderRadius: "1rem", objectFit: "contain" }}
          />
        </MotionBox>

        <Flex
          justify={"center"}
          align={"center"}
          flexDirection={"column"}
          w={{ base: "full", md: "60%", lg: "50%" }}
        >
          <MotionText
            viewport={{ once: false, amount: 0.3 }}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
            fontSize={{ base: "2xl", md: "3xl" }}
            mb={2}
            textAlign={{ base: "center", md: "left", lg: "left" }}
            fontWeight="bold"
            w={"100%"}
          >
            Key Benefits of our System for your Business Efficiency
          </MotionText>
          <MotionText
            mb={6}
            viewport={{ once: false, amount: 0.3 }}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
            textAlign={{ base: "center", md: "left", lg: "left" }}
            color={"gray.600"}
          >
            Our systems boost productivity, cut costs, and accelerate business
            growth.
          </MotionText>

          <Stack spacing={6}>
            {Benefit.map((item, index) => (
              <MotionBox
                key={index}
                viewport={{ once: false, amount: 0.3 }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3 * index,
                  ease: "easeInOut",
                }}
              >
                <HStack align="start">
                  <Box color="green.500" pt={1}>
                    {item.Icon}
                  </Box>
                  <Box>
                    <Text as="b" fontSize="lg">
                      {item.check}
                    </Text>
                    <Text color="gray.600" fontSize={"sm"}>
                      {item.description}
                    </Text>
                  </Box>
                </HStack>
              </MotionBox>
            ))}
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
}
