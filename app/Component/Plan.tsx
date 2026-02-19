import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { MotionText, MotionFlex } from "../Chakra-page/Motion";
import { FaCheckCircle } from "react-icons/fa";
const card = [
  {
    title: "Starter",
    description:
      "This Projects offers the basic features you need to get you started.",
    price: "$39/month",
    buttonText: "Get Started",
    Icon: <FaCheckCircle />,
    checked1: "Production up to 1000 units per month",
    checked2: "24/7 technical support",
    checked3: "Access the product dashboard",
    checked4: "Initial setuo guide",
  },
  {
    title: "Enterprise",
    description: "This Projects Provides full access to all premium features.",
    price: "$99/month",
    buttonText: "Get Started",
    Icon: <FaCheckCircle />,
    checked1: "Unlimited product units",
    checked2: "Dedicated account manager",
    checked3: "Tailord manufacturing solutions",
    checked4: "Predictive production optimization",
  },
];

export default function Plan() {
  return (
    <Flex
      flexDirection={"column"}
      w="100%"
      gap={8}
      justify="center"
      align="center"
      px={4}
      py={{ base: "5", md: "10", lg: "20" }}
      bg={"black"}
    >
      <VStack>
        <MotionText
          viewport={{ once: false, amount: 0.3 }}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="bold"
          textAlign={"center"}
          color={"white"}
        >
          Tailord Plans for your Manufacturing Scales
        </MotionText>
        <MotionText
          viewport={{ once: false, amount: 0.3 }}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
          color={"gray.500"}
        >
          Flexible Prizing for any business size
        </MotionText>
      </VStack>

      <Flex w={"100%"} justify="center" align="center" gap={8} flexWrap="wrap">
        {card.map((item, index) => (
          <MotionFlex
            viewport={{ once: false, amount: 0.3 }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2 * index,
              ease: "easeInOut",
            }}
            key={index}
            flexDirection={"column"}
            bg={"gray.800"}
            gap={4}
            color={"white"}
            p={6}
            borderRadius="2xl"
            w={{ base: "90%", md: "60%", lg: "29%" }}
          >
            <Text fontWeight={"bold"}>{item.title}</Text>
            <Text color={"gray.300"} fontSize={"sm"}>
              {item.description}
            </Text>
            <Text fontSize={"2xl"} pt={2} fontWeight={"bold"}>
              {item.price}
            </Text>
            <Button
              variant={"outline"}
              _hover={{ color: "aqua" }}
              color={"white"}
              borderRadius={"full"}
            >
              {item.buttonText}
            </Button>
            <Flex align="center" py={2} px={4}>
              <Box flex="1" borderBottom="1px solid" borderColor="gray.600" />
              <Text px={4} color="gray.300" fontSize={"sm"} whiteSpace="nowrap">
                Features
              </Text>

              <Box flex="1" borderBottom="1px solid" borderColor="gray.600" />
            </Flex>
            <HStack>
              <Text>{item.Icon}</Text>
              <Text color={"gray.500"} fontSize={"sm"}>
                {item.checked1}
              </Text>
            </HStack>
            <HStack>
              <Text>{item.Icon}</Text>
              <Text color={"gray.500"} fontSize={"sm"}>
                {item.checked2}
              </Text>
            </HStack>
            <HStack>
              <Text>{item.Icon}</Text>
              <Text color={"gray.500"} fontSize={"sm"}>
                {item.checked3}
              </Text>
            </HStack>
            <HStack>
              <Text>{item.Icon}</Text>
              <Text color={"gray.500"} fontSize={"sm"}>
                {item.checked4}
              </Text>
            </HStack>
          </MotionFlex>
        ))}
      </Flex>

      <MotionFlex
        viewport={{ once: false, amount: 0.3 }}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: "easeInOut",
        }}
        borderRadius={"2xl"}
        padding={6}
        gap={5}
        flexDirection={"column"}
        align="center"
        color={"white"}
        bg={"#1D4044"}
        w={{ base: "90%", md: "60%", lg: "60%" }}
        justify="center"
      >
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          Professional
        </Text>
        <Text
          color={"gray.300"}
          textAlign={"center"}
          fontSize={"sm"}
          w={{ base: "90%", md: "80%", lg: "60%" }}
        >
          Design for greater flexibility this solutions offers advanced tools
          for custom tailoring for your projects.
        </Text>
        <Button variant={"solid"} borderRadius={"full"}>
          Get Started
        </Button>
      </MotionFlex>
    </Flex>
  );
}
