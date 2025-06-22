import React, { useEffect } from "react";
import { useState } from "react";
import { ComponentProps } from "react";

import { Flex, Skeleton } from "@chakra-ui/react";

import { MotionImage } from "./MotionImage";

type MotionImageProps = ComponentProps<typeof MotionImage>;

interface CustomImageProps extends MotionImageProps {
  setMethod?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CustomImage({ setMethod, ...props }: CustomImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (setMethod) {
      setMethod(isLoaded);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  return (
    <Flex
      h="100%"
      w="100%"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      {!isLoaded && (
        <Skeleton
          position="absolute"
          top="0"
          left="0"
          height="100%"
          width="100%"
        />
      )}
      <MotionImage
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        decoding="async"
        style={{
          visibility: isLoaded ? "visible" : "hidden",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          cursor: props.drag ? "grab" : "default",
        }}
        {...props}
      />
    </Flex>
  );
}
