import { Text, Box, Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
// import { MdArrowForward } from "react-icons/all";

type CTAProps = {
  text: string;
};

const CTASection = ({ text }: CTAProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/posters");
  };

  return (
    <Box textAlign="center" marginTop={8}>
      <Flex marginY={4} justifyContent="center" gridGap={2}>
        <Button variant="ghost" type="button" onClick={handleClick}>
          <Text
            d="flex"
            alignItems="center"
            borderBottom="3px solid black"
            paddingBottom={1}
            fontSize="2xl"
            fontWeight="light"
          >
            {text}
          </Text>
        </Button>
      </Flex>
    </Box>
  );
};

export default CTASection;
