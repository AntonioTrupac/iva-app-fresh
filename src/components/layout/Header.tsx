import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" padding={4}>
      <Heading as="button" mx={2} size="md" fontWeight={400}>
        <Link href="/">Home</Link>
      </Heading>

      <Heading as="button" marginRight={2} size="md" fontWeight={400}>
        <Link href="/posters">Posteri</Link>
      </Heading>

      <Heading as="button" size="md" fontWeight={400}>
        <Link href="/contact">Kontakti</Link>
      </Heading>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
