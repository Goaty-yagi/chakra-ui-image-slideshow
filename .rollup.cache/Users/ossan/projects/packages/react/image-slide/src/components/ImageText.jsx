import React from "react";
import { Heading } from "@chakra-ui/react";
export function ImageText({ text }) {
    return (<Heading w={{ base: "80%", md: "50%" }} fontSize={{ base: "1.4rem", md: "2rem" }} top={{ base: "50%", md: "calc(50% - 20px)" }} left={{ base: "50%", md: "50px" }} transform={{ base: "translate(-50%, -50%)", md: "none" }} textAlign="center" color="white" border="solid gray" bg="rgba(0,0,0,0.6)" p="0.5rem 2rem" position="absolute" textShadow="2px 2px black" fontFamily="palatino" zIndex={2}>
      {text}
    </Heading>);
}
//# sourceMappingURL=ImageText.jsx.map