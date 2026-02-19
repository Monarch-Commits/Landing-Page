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
      py={{ base: "5", md: "10", lg: "20" }}
      gap={5}
      color="white"
    >
      <MotionText
        viewport={{ once: false, amount: 0.3 }}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
        fontWeight="bold"
        textAlign="center"
        padding={2}
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
      >
        From Idea to Production in Days
      </MotionText>
      <MotionText
        viewport={{ once: false, amount: 0.3 }}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
        color="gray.200"
        textAlign="center"
        w={{ base: "90%", md: "40%" }}
        px={{ base: 2, md: 0 }}
      >
        Accelerate your Production with our Technology. Reduce Downtime and
        Optimize Costs. Get a special offer now.
      </MotionText>
      <MotionButton
        viewport={{ once: false, amount: 0.3 }}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
        borderRadius="full"
        colorScheme="teal"
        variant="solid"
      >
        Work With Us
      </MotionButton>
    </Flex>
  );
}
