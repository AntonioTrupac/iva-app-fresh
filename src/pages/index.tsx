import { Box } from "@chakra-ui/react";

import CardStack from "components/CardStack";
import MainText from "components/SomeText";

// import CTASection from "components/CTASection";
// import SomeImage from "components/SomeImage";

const Home = () => {
  return (
    <Box mb={8} w="full">
      <MainText text="Kada se spoji moderan i boho stil nastanu motivi i nijanse koje domu pružaju nježan, osoban dodir." />
      <CardStack />
    </Box>
  );
};

export default Home;
