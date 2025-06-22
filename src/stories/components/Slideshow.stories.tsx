import React from "react";

import { Box } from "@chakra-ui/react";
import type { StoryFn } from "@storybook/react";

import Slideshow from "@/src/components/Slideshow";
import { SlideshowProps } from "@/src/components/types";

interface SlideshowStoryArgs extends SlideshowProps {
  slideDuration: number;
  arrowDisabled: boolean;
  arrowSize: "s" | "m";
  selectorDisabled: boolean;
  textDisabled: boolean;
  grabEnabled: boolean;
}

const images = [
  {
    url: "/images/fireworks.jpg",
    text: "Over 20000 fireworks will shoot up in the beautiful sky at the night!",
  },
  {
    url: "/images/people-festival.jpg",
    text: "Try and taste 20 kinds of cuisines over the world!",
  },
  {
    url: "/images/female-customer-food-stand.jpg",
    text: "Famous artists will make you excited at the night!",
  },
  {
    url: "/images/fireworks.jpg",
    text: "Over 20000 fireworks will shoot up in the beautiful sky at the night!",
  },
  {
    url: "/images/people-festival.jpg",
    text: "Try and taste 20 kinds of cuisines over the world!",
  },
  {
    url: "/images/female-customer-food-stand.jpg",
    text: "Famous artists will make you excited at the night!",
  },
  {
    url: "/images/fireworks.jpg",
    text: "Over 20000 fireworks will shoot up in the beautiful sky at the night!",
  },
  {
    url: "/images/people-festival.jpg",
    text: "Try and taste 20 kinds of cuisines over the world!",
  },
  {
    url: "/images/female-customer-food-stand.jpg",
    text: "Famous artists will make you excited at the night!",
  },
];

const Template: StoryFn<SlideshowStoryArgs> = (args) => {
  const {
    slideDuration,
    arrowDisabled,
    arrowSize,
    selectorDisabled,
    textDisabled,
    grabEnabled,
    ...rest
  } = args;

  const arrowConfig = {
    disable: arrowDisabled,
    style: {
      size: arrowSize,
    },
  };

  const selectorConfig = {
    disable: selectorDisabled,
  };

  const textConfig = {
    disable: textDisabled,
  };

  const imageConfig = {
    grab: grabEnabled,
  };

  return (
    <Box w="100%" h="500px" bg="gray.100" p={4}>
      <Slideshow
        {...rest}
        slideDuration={slideDuration}
        arrowConfig={arrowConfig}
        selectorConfig={selectorConfig}
        textConfig={textConfig}
        imageConfig={imageConfig}
      />
    </Box>
  );
};

export default {
  title: "Components/Slideshow",
  component: Slideshow,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "default",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    arrowDisabled: {
      control: "boolean",
      description: "Disables the navigation arrows",
    },
    slideDuration: {
      control: "number",
      description: "frequency of the slide",
    },
    arrowSize: {
      control: { type: "radio" },
      options: ["s", "m"],
      description: "Size of the navigation arrows",
    },
    selectorDisabled: {
      control: "boolean",
      description: "Disables the selector dots",
    },
    textDisabled: {
      control: "boolean",
      description: "Disables the image text captions",
    },
    grabEnabled: {
      control: "boolean",
      description: "Enables image dragging",
    },
    // Hide nested config props from the controls panel and docs
    arrowConfig: { table: { disable: true } },
    selectorConfig: { table: { disable: true } },
    textConfig: { table: { disable: true } },
    imageConfig: { table: { disable: true } },
  },
};

export const Primary = Template.bind({});
Primary.args = {
  images,
  arrowDisabled: false,
  arrowSize: "m",
  selectorDisabled: false,
  textDisabled: false,
  grabEnabled: true,
};

// Arrows disabled
export const WithoutArrows = Template.bind({});
WithoutArrows.args = {
  ...Primary.args,
  arrowDisabled: true,
};

// Text disabled
export const WithoutText = Template.bind({});
WithoutText.args = {
  ...Primary.args,
  textDisabled: true,
};

// Selector disabled
export const WithoutSelector = Template.bind({});
WithoutSelector.args = {
  ...Primary.args,
  selectorDisabled: true,
};

// Dragging disabled
export const NoDrag = Template.bind({});
NoDrag.args = {
  ...Primary.args,
  grabEnabled: false,
};

// Minimal UI (no arrows, no selector, no text)
export const Minimal = Template.bind({});
Minimal.args = {
  ...Primary.args,
  arrowDisabled: true,
  selectorDisabled: true,
  textDisabled: true,
  grabEnabled: false,
};
