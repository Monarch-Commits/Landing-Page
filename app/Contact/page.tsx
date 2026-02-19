import { Box } from "@chakra-ui/react";
import Contact from "../Component/Contact";

function contact() {
  return (
    <Box pt={20} w={"100%"} display={"flex"} justifyContent={"center"}>
      <Contact />
    </Box>
  );
}

export default contact;
