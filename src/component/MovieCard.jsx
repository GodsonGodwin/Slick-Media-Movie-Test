import React from "react";
import { Box, chakra, Text } from "@chakra-ui/react";

const MovieCardWrapper = chakra(Box, {
  baseStyle: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    padding: "10px",
    width: { base: "200px", md: "300px" },
    height: { base: "200px", md: "300px" },
    backgroundColor: "#000000",
    borderRadius: "12px",
  },
});

const InfoWrapper = chakra(Box, {
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    color: "white",
    height: { base: "180px", md: "280px" },
    width: { base: "180px", md: "280px" },
  },
});

const MovieInfo = chakra(Text, {
  baseStyle: {
    fontSize: { base: "18px", md: "24px" },
    color: "white",
  },
});

const MovieCard = ({ movie }) => {
  return (
    <MovieCardWrapper>
      <InfoWrapper>
        <MovieInfo>{movie.Title}</MovieInfo>
      </InfoWrapper>
    </MovieCardWrapper>
  );
};

export default MovieCard;
