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
            <h3 className="fs-1">{movie.original_title}</h3>
            <small className="fs-3">
              {movie.release_date} - Rating {movie.vote_average}
            </small>
            <p className="fs-2">{movie.overview}</p>
          </div>
          <div className="buttons-container">
            <Link to={"/pelicula/" + movie.id} className="button-ver">
              Watch more...
            </Link>

            <button onClick={() => setModalShow(null)} className="button">
              X
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HackModal;
