import { Box } from "@chakra-ui/react";

import CardStack from "components/CardStack";
import CTASection from "components/CTASection";
import SomeImage from "components/SomeImage";
import MainText from "components/SomeText";
import { cardImageData } from "fakeData/imageData";

const Home = () => {
  return (
    <Box mb={8} w="full">
      <SomeImage />

      <MainText text="Kada se spoji moderan i boho stil nastanu motivi i nijanse koje domu pružaju nježan, osoban dodir." />
      <CardStack items={cardImageData} />
      <CTASection text="POGLEDAJ SVE" />
    </Box>
  );
};

export default Home;
