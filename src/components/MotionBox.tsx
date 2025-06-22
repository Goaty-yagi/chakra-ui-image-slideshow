import React from "react";

import { chakra, shouldForwardProp } from "@chakra-ui/system";
import { isValidMotionProp, motion } from "motion/react";

export const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});
