import {
  Box,
  List,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";

const CardStack = () => {
  return (
    <Box
      d="flex"
      // style={{
      //   overflowY: "hidden",
      //   overflowX: "scroll",
      //   display: "flex",
      //   // width: "auto",
      // }}
      justifyContent="center"
    >
      <Box
        width={1120}
        d="flex"
        overflowX="scroll"
        overflowY="hidden"
        padding={4}
      >
        <Box width={400} mx={4}>
          <Image
            src="/Launching-amico.svg"
            width={400}
            height={400}
            layout="fixed"
            alt="Launching Illustration"
          />
        </Box>

        <Box width={400} mx={4}>
          <Image
            src="/Launching-amico.svg"
            width={400}
            height={400}
            layout="fixed"
            alt="Launching Illustration"
          />
        </Box>

        <Box width={400} mx={4}>
          <Image
            src="/Launching-amico.svg"
            width={400}
            height={400}
            layout="fixed"
            alt="Launching Illustration"
          />
        </Box>

        <Box width={400} mx={4}>
          <Image
            src="/Launching-amico.svg"
            width={400}
            height={400}
            layout="fixed"
            alt="Launching Illustration"
          />
        </Box>
      </Box>

      {/* <UnorderedList padding={2} styleType="none">
        <ListItem>
          <Image
            src="/Launching-amico.svg"
            width={400}
            height={400}
            alt="Launching Illustration"
          />
        </ListItem>

        <ListItem>
          <Image
            src="/Launching-amico.svg"
            width={400}
            height={400}
            alt="Launching Illustration"
          />
        </ListItem>

        <ListItem>
          <Image
            src="/Launching-amico.svg"
            width={400}
            height={400}
            alt="Launching Illustration"
          />
        </ListItem>

        <ListItem>
          <Image
            src="/Launching-amico.svg"
            width={400}
            height={400}
            alt="Launching Illustration"
          />
        </ListItem>

        <ListItem>
          <Image
            src="/Launching-amico.svg"
            width={400}
            height={400}
            alt="Launching Illustration"
          />
        </ListItem>

        <ListItem>
          <Image
            src="/Launching-amico.svg"
            width={400}
            height={400}
            alt="Launching Illustration"
          />
        </ListItem>
      </UnorderedList> */}
    </Box>
  );
};

export default CardStack;
