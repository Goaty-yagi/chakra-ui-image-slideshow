import React from "react";

import { ImageProps as ChakraImageProps } from "@chakra-ui/react";
import { chakra, shouldForwardProp } from "@chakra-ui/system";
import { HTMLMotionProps, isValidMotionProp, motion } from "motion/react";

export type MotionImageProps = Omit<ChakraImageProps, "color"> &
  HTMLMotionProps<"img">;

export const MotionImage = chakra(motion.img, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
}) as React.FC<MotionImageProps>;
