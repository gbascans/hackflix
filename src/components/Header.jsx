import { useState, useEffect } from "react";
import HackNavbar from "./HackNavbar";
import HeaderContent from "./HeaderContent";
import "../css/Header.css";

function Header({ movies }) {
  const [currentMovie, setCurrentMovie] = useState(0);
  const moviesLimit = [movies[0], movies[1], movies[2], movies[3], movies[4]];

  useEffect(() => {
    //Hook de primer renderizado. cada 5 seg. cambia el numero current Movie que es el index del array de MoviesLimit
    const interval = setInterval(() => {
      setCurrentMovie((prevMovie) => (prevMovie + 1) % moviesLimit.length);
    }, 5000);

    return () => clearInterval(interval); //este return es el hook de finalizacion por si me voy a otra pag que no siga operando
  }, []);

  const style = {
    backgroundImage: `linear-gradient(to bottom, transparent, #080F28),url(${
      import.meta.env.VITE_APP_BACK_IMG + moviesLimit[currentMovie].poster_path
    })`,
  };

  return (
    <section className="header" style={style}>
      <HeaderContent
        title={moviesLimit[currentMovie].original_title}
        date={moviesLimit[currentMovie].release_date}
        content={moviesLimit[currentMovie].overview}
      />
    </section>
  );
}

export default Header;
