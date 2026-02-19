"use client";

import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
const MotionText = motion(Text);

const projects = [
  {
    title: "Contact",
    description: "Contact page for the application.",
  },
  {
    title: "Contact Us",
    description: "Get in touch with us through our contact page.",
  },
  {
    title: "Reach Out",
    description: "Reach out to us for any inquiries or support.",
  },
];

export default function Contact() {
  return (
    <Box id="Contact">
      {projects.map((projects, index) => (
        <MotionText
          key={index}
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          {projects.description}
        </MotionText>
      ))}
    </Box>
  );
}
