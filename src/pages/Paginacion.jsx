import axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import FilterForPagination from "../components/FilterForPagination";
import MoviesPagination from "../components/MoviesPagination";
import "../css/App.css";
import ReactLoading from 'react-loading';
import { useParams } from "react-router-dom";

function Paginacion() {
  const params = useParams();
  const [selectedFilter, setSelectedFilter] = useState(1);
  const [numPage, setNumPage]= useState(params.pag*1);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=a83ecb449aa45a278bf5228ee3a95da6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&vote_average.gte=${(selectedFilter - 1) * 2}&page=${numPage}`);
      setMovies(response.data.results);
    };
    getMovies();
  }, [selectedFilter, numPage]);


  return (
    <>
      {!movies ? (<div className="react-loading">
        <ReactLoading type="spokes" color="#ffffff" height={'20%'} width={'20%'} />
        </div>
      ) : (
        <>
          <Header movies={movies} />
          <FilterForPagination
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            setNumPage={setNumPage}
          />
          <MoviesPagination movies={movies} numPage={numPage} setNumPage={setNumPage}/>
        </>
      )}
    </>
  );
}

export default Paginacion;