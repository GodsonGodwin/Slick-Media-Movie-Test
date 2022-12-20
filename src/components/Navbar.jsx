import React from "react";
import { Box, chakra, Image } from "@chakra-ui/react";

const NavWrapper = chakra(Box, {
  baseStyle: {
    backgroundColor: "#292929;",
    height: "140px",
    display: "flex",
    alignItems: "center",
    justifyContent: { base: "center", lg: "flex-start" },
  },
});

const LogoWrapp = chakra(Box, {
  baseStyle: {
    width: { base: "108px", md: "193px" },
    height: { base: "33.58px", md: "60px" },
    margin: { base: "0", lg: "0 77px" },
    border: "1px solid #FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Logo = chakra(Image, {
  baseStyle: {
    width: { base: "87.68px", md: "156.7px" },
    height: { base: "18.43px", md: "32.94px" },
  },
});

const Navbar = () => {
  return (
    <NavWrapper>
      <LogoWrapp>
        <Logo src="/assets/img/logo.png" alt="brand logo" />
      </LogoWrapp>
    </NavWrapper>
  );
};

export default Navbar;
