import "../css/Filter.css";
import { Link } from "react-router-dom";

function FilterForPagination({
  selectedFilter,
  setSelectedFilter,
  setNumPage,
}) {
  const auxiliar = [0, 0, 0, 0, 0];
  return (
    <section className="filter-container">
      <h3 className="filter">Filter by rating</h3>
      {auxiliar.map((filter, index) => {
        return index < selectedFilter ? (
          <Link to="/paginacion/1">
            <i
              key={index}
              className="fas fa-star star"
              onClick={(event) => setSelectedFilter(index + 1) & setNumPage(1)}
            ></i>
          </Link>
        ) : (
          <Link to="/paginacion/1">
            <i
              key={index}
              className="far fa-star star"
              onClick={(event) => setSelectedFilter(index + 1) & setNumPage(1)}
            ></i>
          </Link>
        );
      })}
    </section>
  );
}

export default FilterForPagination;
