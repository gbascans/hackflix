import axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Filter from "../components/Filter";
import MoviesContent from "../components/MoviesContent";
import "../css/App.css";
import ReactLoading from 'react-loading';
import IsOnline from "../components/IsOnline";

function Home() {
  const [selectedFilter, setSelectedFilter] = useState(1);
  const [numPages, setNumPages]= useState(2);
  const [movies, setMovies] = useState(null);
  

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=a83ecb449aa45a278bf5228ee3a95da6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&vote_average.gte=${(selectedFilter - 1) * 2}`);
      setMovies(response.data.results);
    };
    getMovies();
  }, [selectedFilter]);

  async function getMoreMovies () {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=a83ecb449aa45a278bf5228ee3a95da6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&vote_average.gte=${(selectedFilter - 1) * 2}&page=${numPages}`);
    setMovies((prevMovies) => [...prevMovies,...response.data.results]);
    setNumPages((prev)=>prev+1)
  };
  

  return (
    <>
      {!movies ? (<div className="react-loading">
        <ReactLoading type="spokes" color="#ffffff" height={'20%'} width={'20%'} />
        </div>
      ) : (
        <>
          <IsOnline/>
          <Header movies={movies} />
          <Filter
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
          <MoviesContent movies={movies} getMoreMovies={getMoreMovies}/>
        </>
      )}
    </>
  );
}

export default Home;