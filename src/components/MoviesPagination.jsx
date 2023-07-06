import "../css/MoviesContent.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import HackModal from "./HackModal";
import { animateScroll as scroll } from 'react-scroll';

function MoviesPagination({ movies, numPage, setNumPage}) {
  const [modalShow, setModalShow] = useState("");

  return (
    <section>
      <div className="contenedor-general">
        {movies.length > 0 ? (
          <>
            {movies.map((movie) => {
              return (
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
                      alt=""
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
              );
            })}
          </>
        ) : (
          <p className="alert">
            "No se encuentran películas segun los parametros seleccionados"
          </p>
        )}
      </div>
      
<nav aria-label="Page navigation example" className="d-flex justify-content-center mt-3 mb-3">
  {numPage===1 
  ? <ul className="pagination">
  <li className="page-item disabled"><Link className="page-link">Previous</Link></li>
  <li className="page-item disabled"><Link className="page-link">1</Link></li>
  <li className="page-item"><Link to={`/paginacion/${numPage*1+1}`} className="page-link" onClick={()=>{ setNumPage( (prev)=>prev+1 ) & scroll.scrollToTop()}}>{numPage*1+1}</Link></li>
  <li className="page-item"><Link to={`/paginacion/${numPage*1+2}`} className="page-link" onClick={()=>{ setNumPage( (prev)=>prev+2 ) & scroll.scrollToTop()}}>{numPage*1+2}</Link></li>
  <li className="page-item"><Link to={`/paginacion/${numPage*1+1}`} className="page-link" onClick={()=>{ setNumPage( (prev)=>prev+1 ) & scroll.scrollToTop()}}>Next</Link></li>
</ul>
  :<ul className="pagination">
    <li className="page-item"><Link to={`/paginacion/${numPage-1}`} className="page-link" onClick={()=>{ setNumPage( (prev)=>prev-1 ) & scroll.scrollToTop()}}>Previous</Link></li>
    <li className="page-item"><Link to={`/paginacion/${numPage-1}`} className="page-link" onClick={()=>{ setNumPage( (prev)=>prev-1 ) & scroll.scrollToTop()}}>{numPage-1}</Link></li>
    <li className="page-item disabled"><Link className="page-link">{numPage}</Link></li>
    <li className="page-item"><Link to={`/paginacion/${numPage*1+1}`} className="page-link" onClick={()=>{ setNumPage( (prev)=>prev+1 ) & scroll.scrollToTop()}}>{numPage*1+1}</Link></li>
    <li className="page-item"><Link to={`/paginacion/${numPage*1+1}`} className="page-link" onClick={()=>{ setNumPage( (prev)=>prev+1 ) & scroll.scrollToTop()}}>Next</Link></li>
  </ul>}
</nav>
      
    </section>
  );
}

export default MoviesPagination;
