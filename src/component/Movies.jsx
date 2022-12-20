import React, { useState } from "react";
import { Box, chakra, Text, Input, Heading} from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import axios from "axios";

const SearchWrapper = chakra(Box, {
  baseStyle: {
    height: { base: "59", md: "89px" },
    margin: {
      base: "56px 27px 33px 27px",
      md: "63px 77px 48px 77px",
      lg: "63px 57px 48px 77px",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "4px",
  },
});

const SearchTitle = chakra(Text, {
  baseStyle: {
    fontWeight: "400",
    fontSize: { base: "16px", md: "24px" },
    lineHeight: { base: "21px", md: "31px" },
    flex: "none",
    order: "0",
    flexGgrow: "0",
    color: "#000000",
  },
});

const SearchInput = chakra(Input, {
  baseStyle: {
    border: "1px solid #000000",
    borderRadius: "none",
    height: { base: "34px", md: "52px" },
    flex: "none",
    order: { base: "1", md: "0" },
    flexGgrow: "0",
    outline: "none",
    width: "100%",
  },
});

const Category = chakra(Box, {
  baseStyle: {
    margin: {
      base: "0px 0px 33px 27px",
      md: "0px 0px 48px 77px",
      lg: "0px 0px 48px 77px",
    },
  },
});

const MovieTitle = chakra(Text, {
  baseStyle: {
    fontWeight: "400",
    fontSize: { base: "18px", md: "24px" },
    lineHeight: { base: "21px", md: "31px" },
    marginBottom: { base: "26px", md: "18px" },
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#000000",
  },
});

const MovieItem = chakra(Box, {
  baseStyle: {
    display: "flex",
    flexDirection: "row",
    height: { base: "220px", md: "320px" },
    alignItems: "flex-start",
    padding: "0px",
    gap: "13px",
    overflowX: "auto",
  },
});

const MovieContainer = () => {
  const [userInput, setUserInput] = useState();
  const [inputTimeOut, setInputTimeOut] = useState();
  const [movieResult, setMovieResult] = useState(null);

  const API_KEY = "a625269d";

  const getMovieData = async (userSearchInput) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${userSearchInput}&apikey=${API_KEY}`
    );

    const result = response.data?.Search || [];
    const series = result.filter((item) => item.Type === "series");
    const movies = result.filter((item) => item.Type === "movie");
    setMovieResult({ series, movies });
  };

  const handleChange = (e) => {
    clearTimeout(inputTimeOut);
    setUserInput(e.target.value);
    const timeOutInput = setTimeout(() => getMovieData(userInput), 500);
    setInputTimeOut(timeOutInput);
  };

  const movies = movieResult?.movies || [];
  const series = movieResult?.series || [];

  return (
    <Box style={{ width: "100%" }}>
      <SearchWrapper>
        <SearchTitle>Search</SearchTitle>
        <SearchInput value={userInput} onChange={handleChange} />
      </SearchWrapper>

      {!movieResult && (
        <Heading
          style={{ fontSize: "20px", margin: "40px auto", textAlign: "center" }}
        >
          Seach for an interesting movie...
        </Heading>
      )}

      {!movies.length && !series.length && movieResult ? (
        <Heading
          style={{ margin: "30px auto", fontSize: "20px", textAlign: "center" }}
        >
          No result found
        </Heading>
      ) : (
        <Box>
          {movies.length > 0 && (
            <Category>
              <MovieTitle>Category(Movies)</MovieTitle>

              <MovieItem>
                {movies.length &&
                  movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                  ))}
              </MovieItem>
            </Category>
          )}

          {series.length > 0 && (
            <Category>
              <MovieTitle>Category(Series)</MovieTitle>

              <MovieItem>
                {series.length &&
                  series.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                  ))}
              </MovieItem>
            </Category>
          )}
        </Box>
      )}
    </Box>
  );
};

export default MovieContainer;
