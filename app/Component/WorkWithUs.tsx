"use client";

import { Flex, Box } from "@chakra-ui/react";
import Image from "next/image";
import { MotionText, MotionButton, MotionBox } from "../Chakra-page/Motion";

export default function WorkWithUs() {
  return (
    <Flex
      as="section"
      justify="center"
      align="center"
      flexDirection={{ base: "column", md: "row" }}
      w="100%"
      px={{ base: "6", md: "12", lg: "24" }}
      py={{ base: "12", md: "20", lg: "32" }}
      gap={{ base: "12", md: "16", lg: "24" }}
      bg="white"
      overflow="hidden"
    >
      <Flex
        flexDirection="column"
        gap={{ base: 5, md: 6, lg: 8 }}
        w={{ base: "100%", md: "50%" }}
        align={{ base: "center", md: "start" }}
      >
        <MotionText
          viewport={{ once: true, amount: 0.3 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          textAlign={{ base: "center", md: "left" }}
          fontWeight="extrabold"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          lineHeight="1.1"
          letterSpacing="tight"
          color="gray.900"
        >
          Empowering Top Companies with Seamless Integration
        </MotionText>

        <MotionText
          viewport={{ once: true, amount: 0.3 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          textAlign={{ base: "center", md: "left" }}
          color="gray.600"
          fontSize={{ base: "md", lg: "lg" }}
          lineHeight="relaxed"
          maxW="540px"
        >
          Experience seamless connection with amodern solutions designed 
          to effortlessly integrate with your existing systems, enhance 
          productivity, and drive your business towards greater success.
        </MotionText>

        <Box>
          <MotionButton
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            borderRadius="full"
            bg="teal.500"
            color="white"
            variant="solid"
            size="lg"
            px={10}
            h="60px"
            fontSize="md"
            fontWeight="bold"
            boxShadow="0 10px 20px -10px rgba(49, 151, 149, 0.5)"
            _hover={{
              bg: "teal.600",
              boxShadow: "0 15px 25px -10px rgba(49, 151, 149, 0.6)",
            }}
          >
            Work with Us
          </MotionButton>
        </Box>
      </Flex>

      <MotionBox
        viewport={{ once: true, amount: 0.3 }}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        w={{ base: "100%", md: "45%" }}
        position="relative"
      >
        <Box
          position="absolute"
          top="-20px"
          right="-20px"
          w="100%"
          h="100%"
          bg="teal.50"
          borderRadius="3xl"
          zIndex={0}
        />
        <Box
          position="relative"
          zIndex={1}
          borderRadius="3xl"
          overflow="hidden"
          boxShadow="dark-lg"
          transform="rotate(2deg)"
          transition="0.5s ease"
          _hover={{ transform: "rotate(0deg) scale(1.02)" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1707336862166-1e483cfa5c92?w=800&auto=format&fit=crop&q=80"
            alt="Collaboration Banner"
            width={800}
            height={600}
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
          />
        </Box>
      </MotionBox>
    </Flex>
  );
}