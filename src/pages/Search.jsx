import { useEffect, useState } from "react";
import axios from "axios";
import SearchMovie from "../components/SearchMovie";
import MoviesContent from "../components/MoviesContent";
import ReactLoading from "react-loading";

function Search() {
  const [search, setSearch] = useState("");
  const [searchModified, setSearchModified] = useState("");
  const [moviesToRender, setMoviesToRender] = useState(null);
  const [numPages, setNumPages] = useState(2);
  //const [more, setMore] = useState(true)

  useEffect(() => {
    let stringModified = "";
    for (let i = 0; i < search.length; i++) {
      if (search[i] === " ") {
        stringModified += "%20";
      } else {
        stringModified += search[i];
      }
    }
    setSearchModified(stringModified);

    async function searchMoviesByName() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=a83ecb449aa45a278bf5228ee3a95da6&query=${searchModified}&include_adult=false&language=en-US`
      );
      setMoviesToRender(response.data.results);
    }
    searchMoviesByName();
  }, [search]);

  async function getMoreMovies() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=a83ecb449aa45a278bf5228ee3a95da6&query=${searchModified}&include_adult=false&language=en-US&page=${numPages}`
    );
    setNumPages((prev) => prev + 1);
    return setMoviesToRender((prevMovies) => [
      ...prevMovies,
      ...response.data.results,
    ]);
  }

  return (
    <>
      <SearchMovie setSearch={setSearch} />;
      {!moviesToRender ? (
        <ReactLoading
          type="spokes"
          color="#ffffff"
          height={"20%"}
          width={"20%"}
        />
      ) : (
        <MoviesContent movies={moviesToRender} getMoreMovies={getMoreMovies} />
      )}
    </>
  );
}
export default Search;
