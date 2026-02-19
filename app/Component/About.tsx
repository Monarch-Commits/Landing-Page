import { Box, Button, Flex, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { GoNorthStar } from "react-icons/go";
import { RiArrowRightUpLine } from "react-icons/ri";
import { MotionBox, MotionText } from "../Chakra-page/Motion";
import { MdOutlineLayers } from "react-icons/md";
import { FiTool } from "react-icons/fi";
import { LuShieldHalf } from "react-icons/lu";
import { SiHackthebox } from "react-icons/si";
import { TfiStatsUp } from "react-icons/tfi";

const statsData = [
  {
    Icon1: <GoNorthStar />,
    Icon2: <RiArrowRightUpLine />,
    h1: "Production and Assembly",
    P: "Details on production processes and assembly capacity, and product types.",
  },
  {
    Icon1: <MdOutlineLayers />,
    Icon2: <RiArrowRightUpLine />,
    h1: "Custom Manufacturing ",
    P: "Custom Product creation with design and customization options.",
  },
  {
    Icon1: <FiTool />,
    Icon2: <RiArrowRightUpLine />,
    h1: "Supply Chain Management",
    P: "Details on supply chain logistics, inventory management, and procurement.",
  },
  {
    Icon1: <LuShieldHalf />,
    Icon2: <RiArrowRightUpLine />,
    h1: "Customer Support",
    P: "Information on customer service channels, response times, and support policies.",
  },
  {
    Icon1: <SiHackthebox />,
    Icon2: <RiArrowRightUpLine />,
    h1: "Sustainability Practices",
    P: "Details on sustainability initiatives, eco-friendly practices, and waste management.",
  },
  {
    Icon1: <TfiStatsUp />,
    Icon2: <RiArrowRightUpLine />,
    h1: "Innovation and R&D",
    P: "Information on research and development efforts, innovation strategies, and new product development.",
  },
];

export default function StatsSection() {
  return (
    <Flex
      py={{ base: "5", md: "10", lg: "20" }}
      w={"100%"}
      alignItems={"center"}
      justifyContent={"flex-start"}
      flexDirection={"column"}
      bg={"linear-gradient(to right, #f0f4f8, #d9e2ec)"}
      justifyItems={"center"}
      textAlign={"center"}
    >
      <Box w={{ base: "90%", md: "90%", lg: "40%" }} gap={4}>
        <MotionText
          viewport={{ once: false, amount: 0.3 }}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
          as={"p"}
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        >
          Efficient and Integrated Manufacturing Services
        </MotionText>
        <MotionText
          viewport={{ once: false, amount: 0.3 }}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          as={"p"}
          fontSize={{ base: "md", md: "lg", lg: "lg" }}
          mt={4}
        >
          Simplify Operation with our efficient, quality-focused services.
        </MotionText>
      </Box>
      <SimpleGrid
        alignItems={"center"}
        justifyItems={"center"}
        columns={{ base: 1, md: 2, lg: 3 }}
        pt={10}
        w={"90%"}
        justifyContent={"center"}
        width={"80%"}
      >
        {statsData.map((item, index) => (
          <MotionBox
            viewport={{ once: false, amount: 0.3 }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1 * index,
              ease: "easeInOut",
            }}
            key={index}
            w={{ base: "100%", md: "90%", lg: "300" }}
            bg={"#1b5e2a"}
            p={4}
            borderRadius="md"
            mb={4}
          >
            <HStack justifyContent={"space-between"} mb={2}>
              <Button bg={"none"} color={"white"} size="lg">
                {item.Icon1}
              </Button>
              <Button bg={"none"} color={"white"} size="lg">
                {item.Icon2}
              </Button>
            </HStack>
            <Text
              color={"white"}
              as={"b"}
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
            >
              {item.h1}
            </Text>
            <Text
              color={"white"}
              as={"p"}
              fontSize={{ base: "xs", md: "xs", lg: "xs" }}
              mt={2}
            >
              {item.P}
            </Text>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
