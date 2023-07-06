import MovieDetail from "../components/MovieDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

function Movie() {
  const [err, setErr] = useState(null);
  const [idMovie, setIdMovie] = useState(null);
  const params = useParams();
  useEffect(() => {
    async function getMovie() {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_APP_BACK_SHORT +
            params.id +
            import.meta.env.VITE_APP_BACK_KEY
          }`
        );
        setErr(null);
        setIdMovie(response.data);
      } catch (err) {
        setErr(err);
      }
    }
    getMovie();
  }, []);

  return (
    <>
      {err && (
        <h2 className="error-mesage">
          Lo sentimos. La pelicula no se encuentra disponible en TMDb. Vuelve a
          intentarlo!
        </h2>
      )}
      {!err && !idMovie ? (
        <div className="react-loading">
          <ReactLoading
            type="spokes"
            color="#ffffff"
            height={"20%"}
            width={"20%"}
          />
        </div>
      ) : (
        idMovie && <MovieDetail movie={idMovie} /> //sino entra ac'a cuando hay error
      )}
    </>
  );
}

export default Movie;
