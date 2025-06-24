import React from "react";

import { Box } from "@chakra-ui/react";
import { Slideshow } from "chakra-ui-slideshow";
// import Slideshow from "@/components/Slideshow";

const App = () => {
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
  const textConfig = {
    disable: true,
  };
  const arrowConfig = {
    // disable: true,
    style: {
      size: "s",
    },
  };
  const selectorConfig = {
    disable: true,
  };
  const imageConfig = {
    grab: true,
  };
  return (
    <div>
      <h1>Component Visual Test</h1>
      <Box w={"100%"} h={"800px"}>
        {/* <Slideshow
          images={images}
          textConfig={textConfig}
          arrowConfig={arrowConfig}
          selectorConfig={selectorConfig}
          imageConfig={imageConfig}
        /> */}
        <Slideshow images={images} />
      </Box>
    </div>
  );
};

export default App;
