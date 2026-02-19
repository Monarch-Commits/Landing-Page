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

  useDisclosure,
  VStack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
const BoxMotion = motion(Box);

const navLinks = [
  { label: "Home", href: "#Home" },
  { label: "Features", href: "#Features" },
  { label: "Benefits", href: "#Benefits" }, 
  { label: "Pricing", href: "#Pricing" },
  { label: "Contact", href: "#Contact" },
];

export default function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <BoxMotion
      as="nav"
      position="fixed"
      top={4} 
      left="50%"
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.6 }}
      w={{ base: "95%", md: "90%", lg: "1200px" }}
      zIndex={1000}
     
      backdropFilter="blur(10px)"
      bg="rgba(255, 255, 255, 0.8)"
      borderRadius="full"
      border="1px solid"
      borderColor="whiteAlpha.300"
      boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.1)"
      px={{ base: 4, md: 8 }}
      py={3}
    >
      <Flex justifyContent="space-between" alignItems="center">
   
        <Link href={'/'}>
          <Flex align="center" gap={2}>
            <Image
              src="https://drive.google.com/uc?export=view&id=1czPtHOnb06NAo-awhCgsOgO_uHXNEUVU"
              width={32}
              height={32}
              alt="Logo"
            />
           
          </Flex>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <Flex
          gap={2}
          align="center"
          display={{ base: "none", md: "flex" }}
        >
          {navLinks.map((navLink, index) => (
            <Link key={index} href={navLink.href}>
              <Button
                size="sm"
                variant="ghost"
                borderRadius="full"
                fontSize="sm"
                fontWeight="medium"
                _hover={{
                  bg: "teal.50",
                  color: "teal.600",
                }}
              >
                {navLink.label}
              </Button>
            </Link>
          ))}
        </Flex>

        {/* RIGHT SIDE ACTIONS */}
        <Flex gap={3} align="center">
          <Button
            display={{ base: "none", sm: "block" }}
            variant="ghost"
            size="sm"
            fontWeight="bold"
            borderRadius="full"
          >
            Login
          </Button>
          <Button
            bg="black"
            color="white"
            size="sm"
            borderRadius="full"
            px={5}
            _hover={{
              bg: "teal.600",
              transform: "scale(1.05)",
            }}
            _active={{ transform: "scale(0.95)" }}
            transition="0.2s"
          >
            Get Started
          </Button>

          {/* MOBILE MENU ICON */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            icon={<HiOutlineMenuAlt3 size={24} />}
            variant="ghost"
            aria-label="Open Menu"
            onClick={onOpen}
            borderRadius="full"
          />
        </Flex>
      </Flex>

      {/* MOBILE DRAWER */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter="blur(4px)" />
        <DrawerContent borderLeftRadius="2xl">
          <DrawerHeader borderBottomWidth="1px" textAlign="center" fontSize="xl" fontWeight="bold">
            NAVIGATION
          </DrawerHeader>
          <DrawerBody py={10}>
            <VStack spacing={6}>
              {navLinks.map((navLink, index) => (
                <Link key={index} href={navLink.href} onClick={onClose} style={{ width: '100%' }}>
                  <Button
                    w="100%"
                    variant="ghost"
                    fontSize="lg"
                    py={6}
                    borderRadius="xl"
                  >
                    {navLink.label}
                  </Button>
                </Link>
              ))}
              <Box w="100%" h="1px" bg="gray.100" />
              <Button w="100%" colorScheme="teal" borderRadius="xl" py={6}>
                Login Now
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </BoxMotion>
  );
}