import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { MotionText, MotionButton, MotionBox } from "../Chakra-page/Motion";

export default function WorkWithUs() {
  return (
    <Flex
      justify="center"
      align="center"
      flexDirection={{ base: "column", md: "row" }}
      w="100%"
      px={{ base: "5", md: "10", lg: "40" }}
      py={{ base: "5", md: "10", lg: "20" }}
      gap={{ base: "5", md: "10", lg: "20" }}
    >
      <Flex
        flexDirection="column"
        gap={{ base: 4, md: 5, lg: 7 }}
        w={{ base: "90%", md: "50%" }}
      >
        <MotionText
          viewport={{ once: false, amount: 0.3 }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          textAlign={{ base: "center", md: "left" }}
          fontWeight="bold"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        >
          Empowering Top Companies with Seamless Integration
        </MotionText>
        <MotionText
          viewport={{ once: false, amount: 0.3 }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
        >
          Experience seamless connection with our innovative solutions, designed
          to effortlessly integrate with your existing system, enhance
          productivity, and drive your business towards greater success.
        </MotionText>
        <Text>
          <MotionButton
            viewport={{ once: false, amount: 0.3 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            borderRadius="full"
            colorScheme="teal"
            variant="solid"
          >
            Work with Us
          </MotionButton>
        </Text>
      </Flex>

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
    </Flex>
  );
}
