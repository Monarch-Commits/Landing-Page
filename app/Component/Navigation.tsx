"use client";

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  // useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";

const ButtonMotion = motion(Button);
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Features", href: "#" },
  { label: "Services", href: "#" },
];

export default function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Flex
      as="nav"
      position="fixed"
      top={0}
      w="100%"
      maxW={"100vw"}
      borderBottom="1px solid"
      borderColor={borderColor}
      px={{ base: 4, md: 6, lg: 10 }}
      justifyContent="space-between"
      alignItems="center"
      zIndex={1000}
      bg={"whiteAlpha.800"}
      py={{ base: 2, md: 3 }}
    >
      {/* LOGO */}
    <div>
        <Link href={'/'}>
          <Image
            src="https://drive.google.com/uc?export=view&id=1czPtHOnb06NAo-awhCgsOgO_uHXNEUVU"
            width={40}
            height={40}
            alt="Logo"
          />
        </Link>
      </div>

      <Flex
        gap={4}
        align="center"
        display={{ base: "none", md: "flex", lg: "flex" }}
      >
        {navLinks.map((navLink, index) => (
          <Link key={index} href={navLink.href}>
            <ButtonMotion
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              whileHover={{
                y: -5,
                color: "green",
                scale: 1.05,
                transition: {
                  duration: 0.2,
                  ease: "easeInOut",
                },
              }}
              size="sm"
              variant="ghost"
            >
              {navLink.label}
            </ButtonMotion>
          </Link>
        ))}
      </Flex>

      {/* Right-side Actions */}
      <Flex gap={3} align="center">
        <Button
          size={{ base: "xs", md: "sm", lg: "sm" }}
          borderRadius="full"
          bg={"black"}
          color={"white"}
        >
          Login
        </Button>
        <Button
          colorScheme="blue"
          size={{ base: "xs", md: "sm", lg: "sm" }}
          borderRadius="full"
        >
          Get in Touch
        </Button>

        <Box display={{ base: "block", md: "none", lg: "none" }}>
          {/* Mobile Menu Button */}
          <IconButton
            icon={<IoIosMenu />}
            variant="outline"
            aria-label="Open Menu"
            onClick={onOpen}
            borderColor="white"
          />

          <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px">📋 Menu</DrawerHeader>
              <DrawerBody>
                <VStack align="start" spacing={4}>
                  {navLinks.map((navLink, index) => (
                    <Link key={index} href={navLink.href}>
                      <ButtonMotion
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.2,
                          ease: "easeInOut",
                        }}
                        whileHover={{
                          y: -5,
                          color: "green",
                          scale: 1.05,
                          transition: {
                            duration: 0.2,
                            ease: "easeInOut",
                          },
                        }}
                        size="sm"
                        variant="ghost"
                      >
                        {navLink.label}
                      </ButtonMotion>
                    </Link>
                  ))}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>

        {/*  <Button onClick={toggleColorMode} size="md" variant="ghost">
          {colorMode === "light" ? <FaCloudMoon /> : <FaCloudSun />}
        </Button> */}
      </Flex>
    </Flex>
  );
}
