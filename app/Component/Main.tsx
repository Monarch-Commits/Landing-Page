"use client";
import { Box, Button, Flex, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
const MotionHStack = motion(HStack);
const BoxMotion = motion(Box);
const TextMotion = motion(Text);
const ButtonMotion = motion(Button);
import { CiStar } from "react-icons/ci";
import { LuBoxes } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { BsSpeedometer } from "react-icons/bs";
import { GiStarSwirl } from "react-icons/gi";
import { FaRegFileAlt } from "react-icons/fa";
import { IoStatsChartOutline } from "react-icons/io5";
import { BsWater } from "react-icons/bs";
import { BsArrowDownLeftCircle } from "react-icons/bs";

export default function Main() {
  return (
    <Flex
      id="Home"
      w="100%"
      h={{ base: "100%", md: "100%", lg: "100vh" }}
      justifyContent="center"
      bg="#f4f4f9"
      pb={{ base: "5", md: "10", lg: "20" }}
      position={"relative"}
      pt={{ base: "20%", md: "10%", lg: "60px" }}
    >
      <Flex w={"100%"} flexDirection="column" gap={3} alignItems="center">
        <TextMotion
          viewport={{ once: true, amount: 0.3 }}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          as="h1"
          w={{ base: "90%", md: "90%", lg: "60%" }}
          fontSize={{ base: "2xl", md: "3xl", lg: "xxx-large" }}
          fontWeight="bold"
          textAlign="center"
          pt={{ base: 3, md: 3, lg: 10 }}
        >
          The Future of Manufacturing with Latest Technology
        </TextMotion>
        <TextMotion
          viewport={{ once: true, amount: 0.3 }}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
          as="p"

          textAlign={"center"}
          px={{ base: 2, md: 4, lg: 6 }}
        >
          Expert tech to elevate your Manufacturing. Lets take your business
          further
        </TextMotion>
        <HStack zIndex={1}>
          <ButtonMotion
            viewport={{ once: true, amount: 0.3 }}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
            borderRadius="full"
            bg="green.600"
            variant="solid"
            color={"white"}
            size={{ base: "sm", md: "md", lg: "md" }}
          >
            Get Started
          </ButtonMotion>
          <ButtonMotion
            viewport={{ once: true, amount: 0.3 }}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
            variant="outline"
            borderRadius="full"
            size={{ base: "sm", md: "md", lg: "md" }}
          >
            Try Demo
          </ButtonMotion>
        </HStack>
        <Flex direction="column" alignItems="center">
          <MotionHStack
            viewport={{ once: true, amount: 0.3 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
            gap={0.5}
            pt={{ base: 2, md: 3, lg: 4 }}
            pb={2}
          >
            <CiStar size="20" />
            <CiStar size="20" />
            <CiStar size="20" />
            <CiStar size="20" />
            <CiStar size="20" />
            <Text as="b">5.0</Text>
          </MotionHStack>
          <TextMotion
            viewport={{ once: true, amount: 0.3 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
            fontSize="sm"
            color="gray.500"
          >
            Rated by 1000+ users
          </TextMotion>
        </Flex>

        <TextMotion
          viewport={{ once: true, amount: 0.3 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
          display={{ base: "none", md: "none", lg: "block" }}
          position={"absolute"}
          right={"15%"}
          top="20%"
        >
          <GiStarSwirl size="24" />
        </TextMotion>
        <TextMotion
          viewport={{ once: true, amount: 0.3 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          display={{ base: "none", md: "none", lg: "block" }}
          position={"absolute"}
          left={"10%"}
          top="20%"
        >
          <BsArrowDownLeftCircle size="24" />
        </TextMotion>
        <TextMotion
          viewport={{ once: true, amount: 0.3 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          display={{ base: "none", md: "none", lg: "block" }}
          fontSize="lg"
          bg={"#d3edd9"}
          position={"absolute"}
          left={"15%"}
          top="25%"
          padding={2}
          borderRadius="full"
        >
          <FaRegFileAlt />
        </TextMotion>
        <TextMotion
          viewport={{ once: true, amount: 0.3 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
          display={{ base: "none", md: "none", lg: "block" }}
          fontSize="lg"
          bg={"#d3edd9"}
          position={"absolute"}
          right={"10%"}
          bottom="65%"
          padding={2}
          borderRadius="full"
        >
          <IoStatsChartOutline />
        </TextMotion>
        <TextMotion
          viewport={{ once: true, amount: 0.3 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          display={{ base: "none", md: "none", lg: "block" }}
          fontSize="lg"
          border="1px"
          borderRadius={"full"}
          padding={2}
          position={"absolute"}
          left={"10%"}
          bottom="65%"
        >
          <BsWater />
        </TextMotion>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          position={{ base: "static", md: "static", lg: "absolute" }}
          gap={5}
          justifyContent="center"
          alignItems={{ base: "flex-start", md: "flex-start", lg: "flex-end" }}
          w="100%"
          mt={{ base: 5, md: 5, lg: "39vh" }}
          flexWrap="wrap"
          display={{ base: "flex", md: "flex", lg: "flex" }}
        >
          <BoxMotion
            viewport={{ once: true, amount: 0.3 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            boxShadow={"lg"}
            bg={"lightskyblue"}
            h={300}
            borderRadius="lg"
            w={200}
            backgroundImage="url('https://plus.unsplash.com/premium_photo-1680404114169-e254afa55a16?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          ></BoxMotion>
          <BoxMotion
            viewport={{ once: true, amount: 0.3 }}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
            h={200}
            bg={"#122c13"}
            mt={0}
            boxShadow={"lg"}
            borderRadius="lg"
            w={150}
            textAlign={"center"}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection={"column"}
          >
            <Text as="h1" fontSize="3xl" color="white">
              100+
            </Text>
            <Text as="h1" px={4} color={"white"}>
              Our Steemed Clients and Partners
            </Text>
          </BoxMotion>
          <BoxMotion
            viewport={{ once: true, amount: 0.3 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
            h={180}
            boxShadow={"base"}
            borderRadius="lg"
            w={250}
            p={3}
          >
            <HStack w={"100%"} justifyContent="space-between" p={2}>
              <Button bg="#c4fbc7">
                <LuBoxes />
              </Button>
              <Button>
                <BsThreeDotsVertical />
              </Button>
            </HStack>

            <Text
              as={"p"}
              fontSize="sm"
              display={"flex"}
              gap={1}
              alignItems="center"
            >
              Total Projects <BsArrowUpRightCircleFill /> 8%
            </Text>
            <Text as={"b"} fontSize={"3xl"}>
              1951+
            </Text>
            <Text as="p" fontSize="sm">
              Increase of{" "}
              <Text as="span" color="green.300" fontWeight="bold">
                126
              </Text>{" "}
              this Month
            </Text>
          </BoxMotion>
          <BoxMotion
            viewport={{ once: true, amount: 0.3 }}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
            h={200}
            bg={"#dff7b3"}
            bottom={0}
            boxShadow={"lg"}
            borderRadius="lg"
            w={150}
            display={"flex"}
            flexDirection="column"
            justifyContent="center"
            alignItems={"center"}
            textAlign="center"
          >
            <Text as={"b"} fontSize={"3xl"}>
              6+
            </Text>
            <Text px={5} fontSize={"sm"}>
              Years of Dedicated Service
            </Text>
          </BoxMotion>
          <BoxMotion
            viewport={{ once: true, amount: 0.3 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            h={300}
            bg="url('https://images.unsplash.com/photo-1637516408720-c7d7fd09a16e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D')"
            boxShadow={"lg"}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            borderRadius="lg"
            w={200}
            display={"flex"}
            justifyContent="flex-end"
            justifyItems={"flex-start"}
            alignItems="flex-start"
            flexDirection="column"
            p={4}
            color="white"
            gap={2}
          >
            <Text as={"h1"} fontSize="3xl" textAlign={"right"} color="white">
              <BsSpeedometer />
            </Text>
            <Text>Achieve Optimal Efficeiency and Boost Productivity</Text>
          </BoxMotion>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}