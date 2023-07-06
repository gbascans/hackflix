import "../css/SearchMovie.css";
function SearchMovie({ setSearch }) {
  return (
    <>
      <section className="search-header">
        <div className="form-container">
          <form
            action=""
            onSubmit={(event) => {
              event.preventDefault();
            }}
            onInput={(event) => {
              setSearch(event.target.value);
            }}
          >
            <input
              type="text"
              placeholder="Buscar..."
              className="input-buscar"
            />
            <button type="submit" className="button-buscar">
              Buscar
            </button>
          </form>
        </div>
      </section>
      <section className="movies-container"></section>
    </>
  );
}
export default SearchMovie;
