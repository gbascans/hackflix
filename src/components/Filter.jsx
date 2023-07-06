import "../css/Filter.css";

function Filter({ selectedFilter, setSelectedFilter}) {
  const auxiliar = [0, 0, 0, 0, 0];
  return (
    <section className="filter-container">
      <h3 className="filter">Filtrar por rating</h3>
      {auxiliar.map((filter, index) => {
        return index < selectedFilter ? (
          <i key={index} className="fas fa-star star" onClick={(event) => setSelectedFilter(index + 1)}></i>
        ) : (
          <i key={index} className="far fa-star star"onClick={(event) => setSelectedFilter(index + 1)}></i>
        );
      })}
    </section>
  );
}

export default Filter;
