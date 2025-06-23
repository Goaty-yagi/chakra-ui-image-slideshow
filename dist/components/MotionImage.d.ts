import React from "react";
import { ImageProps as ChakraImageProps } from "@chakra-ui/react";
import { HTMLMotionProps } from "motion/react";
export type MotionImageProps = Omit<ChakraImageProps, "color"> & HTMLMotionProps<"img">;
export declare const MotionImage: React.FC<MotionImageProps>;
