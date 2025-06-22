import React, { memo } from "react";

import { Flex } from "@chakra-ui/react";

interface ArrowProps {
  paginate: (_offset: number) => void;
  resetTimer: () => void;
  direction: "left" | "right";
  style?: ArrowStyle;
}
interface ArrowStyle {
  size: "s" | "m";
}

const Arrow = memo(function Allow({
  paginate,
  resetTimer,
  direction,
  style,
}: ArrowProps) {
  const size = style?.size;

  const customStyle = () => {
    if (size === "s") {
      return {
        w: "20px",
        h: "30px",
        fontSize: "12px",
      };
    }
    return {}; // default styles
  };
  return (
    <>
      <Flex
        top="calc(50% - 20px)"
        right={direction === "right" ? "10px" : ""}
        left={direction === "left" ? "10px" : ""}
        position="absolute"
        w="30px"
        h="40px"
        bg="none"
        color="white"
        zIndex="1"
        justifyContent="center"
        alignItems="center"
        fontSize="16px"
        border="none"
        borderRadius="0.2rem"
        transition=".3s"
        transform={direction === "left" ? "scale(-1)" : ""}
        cursor="pointer"
        _hover={{ bg: "rgba(0,0,0,.7)" }}
        {...customStyle()}
        onClick={function handleRightClick() {
          paginate(direction === "right" ? 1 : -1);
          resetTimer();
        }}
      >
        ❯
      </Flex>
    </>
  );
});

export default Arrow;
