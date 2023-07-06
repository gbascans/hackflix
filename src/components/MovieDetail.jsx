import "../css/MovieDetail.css"
import { Link } from "react-router-dom";

function MovieDetail ({movie}){
    return (<>
    <section className="movie-container">
        <div className="poster-container">
            <img src={"https://image.tmdb.org/t/p/original/"+movie.poster_path} alt="" className="image" />
          </div>
          <div className="movie-content-container">
            <h3>{movie.original_title}</h3>
            <small>{movie.release_date} - Rating {movie.vote_average}</small>
            <p>{movie.overview}</p>
            <h5>Languages</h5>
            <ul className="languajes-list"> 
            {movie.spoken_languages.map((languaje)=>{
                return <li>{languaje.name}</li>
            })}
            </ul>
            <h5>Revenue</h5>
            <p>USD {movie.revenue.toLocaleString()}</p>
            <Link to={"/"} className="back">&#8592; Back</Link>
          </div>
    </section>
    </>)
    
}

export default MovieDetail;
