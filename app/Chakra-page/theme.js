"use client";

// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  global: (props) => ({
    body: {
      bg: props.colorMode === "dark" ? "#1A202C" : "#FFFFFF",

      transition: "background-color 0.2s ease",
    },
  }),
});

export default theme;
