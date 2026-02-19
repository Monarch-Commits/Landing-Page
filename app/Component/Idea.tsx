"use client";

import { Flex } from "@chakra-ui/react";
import { MotionButton, MotionText } from "../Chakra-page/Motion";

export default function Idea() {
  return (
    <Flex
      justify="center"
      align="center"
      flexDirection="column"
      w="100%"
      bg="teal.900"
      py={{ base: "10", md: "16", lg: "24" }} // Medyo tinaasan ko ang padding para mas premium ang dating
      gap={6}
      color="white"
    >
      <MotionText
        // BINAGO: once: true para hindi na uulit
        viewport={{ once: true, amount: 0.3 }}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
        fontWeight="bold"
        textAlign="center"
        padding={2}
        fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }} // Ginawa nating 5xl para mas "catchy" sa desktop
        lineHeight="1.2"
      >
        From Idea to Production in Days
      </MotionText>

      <MotionText
        // BINAGO: once: true
        viewport={{ once: true, amount: 0.3 }}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }} // Delay increased for cascading
        color="gray.300"
        textAlign="center"
        w={{ base: "90%", md: "60%", lg: "45%" }}
        px={{ base: 2, md: 0 }}
        fontSize={{ base: "md", md: "lg" }}
      >
        Accelerate your production with our technology. Reduce downtime and
        optimize costs. Get a special offer now to scale your business.
      </MotionText>

      <MotionButton
        // BINAGO: once: true
        viewport={{ once: true, amount: 0.3 }}
        initial={{ opacity: 0, scale: 0.9 }} // Added scale for a better "pop" effect
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }} // Huling lalabas
        borderRadius="full"
        bg="white"
        color="teal.900"
        _hover={{ bg: "teal.50", transform: "scale(1.05)" }}
        _active={{ bg: "gray.200" }}
        size="lg"
        px={10}
        fontWeight="bold"
      >
        Work With Us
      </MotionButton>
    </Flex>
  );
}