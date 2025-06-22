import React from "react";
import { Box, Center, Flex, HStack } from "@chakra-ui/react";
export default function Selector({ images, imageIndex, paginate, resetTimer, }) {
    const selectorWidth = images.length * 32;
    return (<Flex w="100%" position="absolute" justifyContent="center" bottom="20px" zIndex="10">
      <HStack fontWeight="bold" w={selectorWidth} gap={2} justifyContent="center">
        {images.map(function (_, index) {
            return (<Box key={index} fontWeight="bold" color="gray" onClick={function handleClick() {
                    if (imageIndex !== index) {
                        paginate(index - imageIndex);
                        resetTimer();
                    }
                }}>
              <Center>
                <Box fontSize={{ base: "0.5rem", md: "0.8rem" }} cursor="pointer" transition=".3s" _hover={{ color: "white" }}>
                  {index === imageIndex ? "○" : "●"}
                </Box>
              </Center>
            </Box>);
        })}
      </HStack>
    </Flex>);
}
//# sourceMappingURL=Selector.jsx.map