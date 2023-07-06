import "../css/Modal.css";
import { Link } from "react-router-dom";

function HackModal({ movie, setModalShow, modalShow }) {
  return (
    <>
      <div
        id="modal-container"
        className="modal-container"
        onClick={(event) =>
          event.target.id === "modal-container" && setModalShow(null)
        }
      >
        <div className="modal-content">
          <div className="image-container">
            <img
              src={import.meta.env.VITE_APP_BACK_IMG + movie.poster_path}
              alt=""
              className="image"
            />
          </div>
          <div className="content">
            <h3>{movie.original_title}</h3>
            <small>
              {movie.release_date} - Rating {movie.vote_average}
            </small>
            <p>{movie.overview}</p>
            <Link to={"/pelicula/" + movie.id} className="button-ver">
              Watch more...
            </Link>
          </div>
          <button onClick={() => setModalShow(null)} className="button">
            X
          </button>
        </div>
      </div>
    </>
  );
}

export default HackModal;
