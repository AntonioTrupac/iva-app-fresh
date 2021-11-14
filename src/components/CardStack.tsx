import { Box } from "@chakra-ui/react";
import Image from "next/image";

type CardItem = {
  id: number;
  name: string;
  image: string;
};

type CardStackProps = {
  items: CardItem[];
};

const CardStack = ({ items }: CardStackProps) => {
  return (
    <>
      <Box d="flex" justifyContent="center" marginY={10}>
        <Box
          width={1120}
          d="flex"
          overflowX="scroll"
          overflowY="hidden"
          padding={4}
        >
          {items.map((item) => {
            return (
              <Box width={400} height={400} mx={4} border="1px solid black">
                <Image
                  src={item.image}
                  width={398}
                  height={398}
                  layout="fixed"
                  alt={item.name}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default CardStack;
