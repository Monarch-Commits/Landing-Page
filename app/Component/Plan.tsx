"use client";

import { Box, Button, Flex, HStack, Text, VStack, Icon } from "@chakra-ui/react";
import { MotionText, MotionFlex } from "../Chakra-page/Motion";
import { FaCheckCircle } from "react-icons/fa";

const card = [
  {
    title: "Starter",
    description: "Basic features you need to jumpstart your production line.",
    price: "$39",
    unit: "/month",
    buttonText: "Get Started",
    features: [
      "Production up to 1000 units",
      "24/7 technical support",
      "Access to product dashboard",
      "Initial setup guide",
    ],
    highlight: false,
  },
  {
    title: "Enterprise",
    description: "Full access to premium features for large-scale operations.",
    price: "$99",
    unit: "/month",
    buttonText: "Go Enterprise",
    features: [
      "Unlimited product units",
      "Dedicated account manager",
      "Tailored manufacturing solutions",
      "Predictive production optimization",
    ],
    highlight: true, // Marker para sa modern highlight effect
  },
];

export default function Plan() {
  return (
    <Flex
      flexDirection={"column"}
      w="100%"
      gap={12}
      justify="center"
      align="center"
      px={4}
      py={{ base: "10", md: "20" }}
      bg={"black"}
    >
      {/* Header Section */}
      <VStack spacing={4}>
        <MotionText
          viewport={{ once: true, amount: 0.3 }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="extrabold"
          textAlign={"center"}
          color={"white"}
          letterSpacing="tight"
        >
          Tailored Plans for your Scaling
        </MotionText>
        <MotionText
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          color={"gray.400"}
          textAlign={"center"}
          fontSize="lg"
          maxW="500px"
        >
          Choose the right tools to optimize your manufacturing efficiency.
        </MotionText>
      </VStack>

      {/* Pricing Cards Section */}
      <Flex 
        w={"100%"} 
        maxW="1200px"
        justify="center" 
        align="stretch" // Siguraduhin na pantay ang taas ng cards
        gap={8} 
        flexWrap="wrap"
      >
        {card.map((item, index) => (
          <MotionFlex
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}
            flexDirection={"column"}
            bg={item.highlight ? "gray.900" : "transparent"}
            color={"white"}
            p={8}
            borderRadius="3xl"
            w={{ base: "100%", md: "45%", lg: "380px" }}
            border="1px solid"
            borderColor={item.highlight ? "teal.500" : "gray.800"}
            position="relative"
            _hover={{ transform: "translateY(-10px)", transition: "0.3s", borderColor: "teal.300" }}
          >
            {item.highlight && (
              <Text 
                position="absolute" 
                top="-12px" 
                left="50%" 
                transform="translateX(-50%)" 
                bg="teal.500" 
                px={4} 
                py={1} 
                borderRadius="full" 
                fontSize="xs" 
                fontWeight="bold"
              >
                MOST POPULAR
              </Text>
            )}

            <VStack align="start" spacing={4} flex="1">
              <Text fontWeight={"bold"} fontSize="xl" color="teal.300">
                {item.title}
              </Text>
              
              {/* Description na may Fixed Height para pantay ang kasunod */}
              <Text color={"gray.400"} fontSize={"md"} minH="50px">
                {item.description}
              </Text>

              <HStack align="baseline">
                <Text fontSize={"5xl"} fontWeight={"extrabold"}>
                  {item.price}
                </Text>
                <Text color="gray.500">{item.unit}</Text>
              </HStack>

              <Button
                w="full"
                size="lg"
                variant={item.highlight ? "solid" : "outline"}
                colorScheme="teal"
                _hover={item.highlight ? { bg: "teal.300" } : { bg: "white", color: "black" }}
                borderRadius={"full"}
              >
                {item.buttonText}
              </Button>

              <Box w="full" pt={4}>
                <Text color="gray.500" fontSize={"xs"} fontWeight="bold" mb={4} letterSpacing="widest">
                  WHATS INCLUDED
                </Text>
                <VStack align="start" spacing={4}>
                  {item.features.map((feature, idx) => (
                    <HStack key={idx} align="center">
                      <Icon as={FaCheckCircle} color="teal.400" />
                      <Text color={"gray.300"} fontSize={"sm"}>
                        {feature}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </MotionFlex>
        ))}
      </Flex>

      {/* Custom Plan / Footer CTA */}
      <MotionFlex
        viewport={{ once: true }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        borderRadius={"3xl"}
        p={{ base: 6, md: 10 }}
        gap={6}
        flexDirection={{ base: "column", lg: "row" }}
        align="center"
        color={"white"}
        bgGradient="linear(to-r, teal.900, #1D4044)"
        w={{ base: "90%", md: "100%" }}
        maxW="1000px"
        justify="space-between"
        border="1px solid"
        borderColor="whiteAlpha.200"
      >
        <VStack align={{ base: "center", lg: "start" }} spacing={2}>
          <Text fontWeight={"bold"} fontSize={"2xl"}>
            Professional Custom Plan
          </Text>
          <Text color={"gray.300"} textAlign={{ base: "center", lg: "left" }} maxW="500px">
            Need more? We offer advanced tools for custom tailoring your large-scale manufacturing projects.
          </Text>
        </VStack>
        <Button 
          bg="white" 
          color="teal.900" 
          _hover={{ bg: "gray.200", transform: "scale(1.05)" }} 
          borderRadius={"full"} 
          size="lg"
          px={10}
        >
          Contact Sales
        </Button>
      </MotionFlex>
    </Flex>
  );
}