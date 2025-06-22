import { chakra, shouldForwardProp } from "@chakra-ui/system";
import { isValidMotionProp, motion } from "motion/react";
export const MotionImage = chakra(motion.img, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});
//# sourceMappingURL=MotionImage.jsx.map