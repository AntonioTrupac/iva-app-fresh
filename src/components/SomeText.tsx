import { Text, Box, useBreakpointValue, useColorMode } from "@chakra-ui/react";

type MainTextProps = {
  text: string;
};

const MainText = ({ text }: MainTextProps) => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "md",
    sm: "2xl",
  });

  return (
    <>
      <Box
        backgroundColor={colorMode === "light" ? "gray.100" : "gray.400"}
        maxWidth={1120}
        mx="auto"
        my={6}
        py={6}
      >
        <Box d="flex" alignItems="center" justifyContent="center" px={6}>
          <Text fontSize={textSize} fontWeight="light">
            {text}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default MainText;
