import {
  Container,
  Box, Text,
  Image, Stack,
} from "@chakra-ui/react";

const Footer = () => (
  <Box w="full" bottom="0" position="absolute">
    <Container
      py={4}
      as={Stack}
      spacing={4}
      maxW={"7xl"}
      align={{ base: "center", md: "center" }}
      direction={{ base: "column", md: "row" }}
      justify={{ base: "center", md: "space-between" }}
    >
      <Text>© 2022 Online platform for professionals</Text>
      <Image h={6} src="/workflow_logo_white.svg" />
    </Container>
  </Box>
);

export default Footer;
