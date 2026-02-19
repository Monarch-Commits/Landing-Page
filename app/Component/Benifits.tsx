"use client";

import { Box, Flex, HStack, Text, Stack, Icon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { MotionBox, MotionText } from "../Chakra-page/Motion";
import Image from "next/image";

const BenefitList = [
  {
    title: "Boosting Quality and Tech",
    description: "Achieve world-class precision. Our systems integrate advanced monitoring to ensure every unit meets your highest standards.",
    color: "blue.400"
  },
  {
    title: "Optimizing Production Processes",
    description: "Eliminate bottlenecks with automated workflows. We transform chaotic floors into streamlined, data-driven environments.",
    color: "teal.400"
  },
  {
    title: "AI-Driven Insights",
    description: "Leverage predictive maintenance and real-time resource allocation to stay ahead of downtime before it even happens.",
    color: "purple.400"
  },
];

export default function Benefits() {
  return (
    <Box w="100%" bg="white" overflow="hidden">
      <Flex
        m={"auto"}
        w="100%"
        maxW="1300px"
        justify="center"
        align="center"
        px={{ base: 6, md: 10 }}
        py={{ base: "12", md: "20", lg: "32" }}
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          align="center"
          w="100%"
          gap={{ base: 12, lg: 20 }}
        >
          {/* IMAGE SIDE - Modern Frame Effect */}
          <MotionBox
            viewport={{ once: true, amount: 0.3 }}
            initial={{ opacity: 0, scale: 0.9, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            w={{ base: "100%", lg: "50%" }}
            position="relative"
          >
            {/* Background Decorative Element */}
            <Box
              position="absolute"
              top="-20px"
              left="-20px"
              w="100px"
              h="100px"
              bg="teal.50"
              borderRadius="full"
              zIndex={-1}
            />
            
            <Box
              borderRadius="3xl"
              overflow="hidden"
              boxShadow="2xl"
              border="8px solid"
              borderColor="white"
            >
              <Image
                src="https://images.unsplash.com/photo-1707336862166-1e483cfa5c92?w=800&auto=format&fit=crop&q=80"
                alt="Manufacturing Tech"
                width={800}
                height={600}
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </Box>

            {/* Floating Badge (Modern Touch) */}
            <MotionBox
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              position="absolute"
              bottom="30px"
              right="-10px"
              bg="white"
              p={4}
              borderRadius="xl"
              boxShadow="xl"
              display={{ base: "none", md: "block" }}
            >
              <HStack>
                <Icon as={FaCheckCircle} color="teal.500" />
                <Text fontWeight="bold" fontSize="sm">AI Integrated System</Text>
              </HStack>
            </MotionBox>
          </MotionBox>

          {/* CONTENT SIDE */}
          <Flex
            direction="column"
            w={{ base: "100%", lg: "45%" }}
            align={{ base: "center", lg: "start" }}
          >
            <MotionText
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              fontSize="sm"
              fontWeight="bold"
              color="teal.600"
              textTransform="uppercase"
              letterSpacing="widest"
              mb={3}
            >
              Why Choose Monarch
            </MotionText>
            
            <MotionText
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="extrabold"
              lineHeight="1.1"
              mb={6}
              textAlign={{ base: "center", lg: "left" }}
            >
              Key Benefits of our System for your Efficiency
            </MotionText>

            <Stack spacing={8} w="100%">
              {BenefitList.map((item, index) => (
                <MotionBox
                  key={index}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <HStack align="start" spacing={5}>
                    <Flex
                      minW="48px"
                      h="48px"
                      bg="teal.50"
                      color="teal.600"
                      borderRadius="lg"
                      align="center"
                      justify="center"
                      transition="0.3s"
                      _groupHover={{ bg: "teal.600", color: "white" }}
                    >
                      <Icon as={FaCheckCircle} fontSize="20px" />
                    </Flex>
                    <Box>
                      <Text as="h3" fontSize="xl" fontWeight="bold" mb={1}>
                        {item.title}
                      </Text>
                      <Text color="gray.600" fontSize="md" lineHeight="tall">
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
    </Box>
  );
}