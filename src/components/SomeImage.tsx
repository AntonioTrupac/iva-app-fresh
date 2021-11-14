import { Box } from "@chakra-ui/react";
import Image from "next/image";

const SomeImage = () => {
  return (
    <>
      <Box position="relative" width="100%" height="90vh">
        <Image
          src="/background/mockup2.jpg"
          objectFit="cover"
          width="100%"
          height="100%"
          layout="fill"
          alt="Launching Illustration"
          objectPosition="center"
        />
      </Box>
    </>
  );
};

export default SomeImage;
