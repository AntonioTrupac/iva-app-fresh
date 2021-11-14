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
        backgroundColor={colorMode === "light" ? "gray.200" : "gray.500"}
        maxWidth={1120}
        margin="0 auto"
        py={6}
      >
        <Box d="flex" alignItems="center" justifyContent="center" px={6}>
          <Text fontSize={textSize}>{text}</Text>
        </Box>
      </Box>
    </>
  );
};

export default MainText;
