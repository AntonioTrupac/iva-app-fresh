import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth="full" transition="0.5s ease-out">
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
