import React from "react";
import { useCallback, useEffect, useState } from "react";

import { Box } from "@chakra-ui/react";
import { AnimatePresence, PanInfo } from "motion/react";
import { wrap } from "popmotion";

import Allow from "./Arrow";
import CustomImage from "./CustomImage";
import { ImageText } from "./ImageText";
import { MotionBox } from "./MotionBox";
import Selector from "./Selector";
import type { SlideshowProps } from "./types";

//This number 10000 acts like a minimum "swipe power" to be considered a valid swipe.
const swipeConfidenceThreshold = 10000;

function swipePower(offset: number, velocity: number): number {
  return Math.abs(offset) * velocity;
}

function getVariants() {
  return {
    enter(direction: number) {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit(direction: number) {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        transition: { duration: 0.5 },
      };
    },
  };
}

function Slideshow({
  slideDuration = 5000, // 5 seconds
  images,
  arrowConfig,
  selectorConfig,
  textConfig,
  imageConfig,
}: SlideshowProps) {
  const [check, setCheck] = useState(0);
  const [refIsLoaded, setRefIsLoaded] = useState(false);
  const [paused, setPaused] = useState(false);
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  useEffect(
    function setupTimer() {
      if (paused) return;
      const timeoutID = setTimeout(function handleTimeout() {
        paginate(1);
        resetTimer();
      }, slideDuration);
      return function cleanup() {
        clearTimeout(timeoutID);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [check, paused],
  );

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  }, []);

  const resetTimer = useCallback(() => {
    setCheck((prev) => prev + 1);
  }, []);

  function imageProps(index: number) {
    return {
      src: images[index].url,
      alt: "image",
      layout: "fill",
      objectFit: "cover",
      objectPosition: "50% 0",
    };
  }

  return (
    <Box w="100%" h="100%" position="relative">
      <AnimatePresence initial={false} custom={direction}>
        <MotionBox
          key={page}
          custom={direction}
          variants={getVariants()}
          initial="enter"
          animate="center"
          exit="exit"
          transition={
            {
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } as any
          }
          w="100%"
          h="100%"
          position="absolute"
        >
          <CustomImage
            setMethod={setRefIsLoaded}
            {...imageProps(imageIndex)}
            h="100%"
            w="100%"
            onPointerDown={() => {
              setPaused(true);
            }}
            onPointerUp={() => {
              setPaused(false);
              resetTimer();
            }}
            drag={imageConfig?.grab === false ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            // @ts-ignore
            onDragEnd={(
              _: MouseEvent | TouchEvent | PointerEvent,
              { offset, velocity }: PanInfo,
            ) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
              resetTimer();
              setPaused(false);
            }}
          />
          {textConfig?.disable !== true && refIsLoaded && (
            <ImageText text={images[imageIndex].text} />
          )}
        </MotionBox>
      </AnimatePresence>
      {arrowConfig?.disable !== true && (
        <>
          <Allow
            paginate={paginate}
            resetTimer={resetTimer}
            direction="left"
            style={arrowConfig?.style}
          />
          <Allow
            paginate={paginate}
            resetTimer={resetTimer}
            direction="right"
            style={arrowConfig?.style}
          />
        </>
      )}

      {selectorConfig?.disable !== true && (
        <Selector
          images={images}
          imageIndex={imageIndex}
          paginate={paginate}
          resetTimer={resetTimer}
        />
      )}
    </Box>
  );
}

export default Slideshow;
