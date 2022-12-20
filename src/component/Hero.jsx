import React from "react";
import { Box, chakra } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

const HeroWrapper = chakra(Box, {
  baseStyle: {
    background: "url('/assets/img/bg-image.jpg')",
    width: "100%",
    height: "550px",
    backgroundSize: "cover",
    objectFit: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
  },
});

const Overlay = chakra(Box, {
  baseStyle: {
    background: "rgba(0, 0, 0, 0.35)",
    width: "100%",
    height: { base: "257", md: "550px" },
    backgroundSize: "cover",
    objectFit: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: { base: "center", lg: "flex-start" },
  },
});

const TitleWrapp = chakra(Box, {
  baseStyle: {
    width: { base: "273", md: "490px" },
    height: { base: "72px", md: "282px" },
    margin: { base: "0", lg: "0 77px" },
  },
});

const Title = chakra(Heading, {
  baseStyle: {
    fontWeight: "700",
    fontSize: { base: "28px", md: "72px" },
    lineHeight: { base: "36px", md: "94px" },
    letterSpacing: "0.05em",
    color: "#FFFFFF",
    textAlign: { base: "center", lg: "left" },
  },
});

const Hero = () => {
  return (
    <HeroWrapper>
      <Overlay>
        <TitleWrapp>
          <Title>Watch something incredible.</Title>
        </TitleWrapp>
      </Overlay>
    </HeroWrapper>
  );
};

export default Hero;
