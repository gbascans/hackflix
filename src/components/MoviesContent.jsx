import "../css/MoviesContent.css";
import { useState } from "react";
import HackModal from "./HackModal";
import InfiniteScroll from "react-infinite-scroll-component";

function MoviesContent({ movies, getMoreMovies }) {
  const [modalShow, setModalShow] = useState("");

  return (
    <InfiniteScroll
      dataLength={movies.length} //This is important field to render the next data
      next={getMoreMovies}
      hasMore={true}
      loader={""}
      endMessage={
        <p className="scroll-alert">
          <b>Estas son todas las peliculas para el filtro aplicado</b>
        </p>
      }
    >
      <section>
        <div className="contenedor-general">
          {movies.length > 0 ? (
            <>
              {movies.map((movie) => (
                <>
                  <div
                    key={movie.id}
                    className="movie-frame"
                    onClick={() => setModalShow(movie.original_title)}
                  >
                    <img
                      src={
                        "https://image.tmdb.org/t/p/original/" +
                        movie.poster_path
                      }
                      alt={movie.original_title}
                      className="movie"
                    />
                  </div>
                  {modalShow && movie.original_title === modalShow && (
                    <HackModal
                      movie={movie}
                      modalShow={modalShow}
                      setModalShow={setModalShow}
                    />
                  )}
                </>
              ))}
            </>
          ) : (
            <p className="alert">
              "No se encuentran películas segun los parametros seleccionados"
            </p>
          )}
        </div>
      </section>
    </InfiniteScroll>
  );
}

export default MoviesContent;
