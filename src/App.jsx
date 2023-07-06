import { Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import HackNavbar from "./components/HackNavbar";
import Movie from "./pages/Movie";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import Paginacion from "./pages/Paginacion";

function App() {
  

  return (
    <>
    <HackNavbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pelicula/:id" element={<Movie/>}/>
      <Route path="/movie/:id" element={<Navigate replace to="/pelicula/:id"/>}/>
      <Route path="/sobre-nosotros" element={<AboutUs/>}/>
      <Route path="/contacto" element={<Contact/>}/>
      <Route path="/buscar" element={<Search/>}/>
      <Route path="/paginacion/:pag" element={<Paginacion />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
    </>
  );
}

export default App;
