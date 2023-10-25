import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL } from "./constants/movies";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const getAllMovies = () => {
    axios
      .get(`${BASE_URL}/movies/`)
      .then(({ data }) => setMovies(data))
      .catch((err) => console.log(err));
  };

  const createMovie = (data, form) => {
    axios
      .post(`${BASE_URL}/movies/`, data)
      .then(() => {
        getAllMovies()
        form.reset()
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllMovies()
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    createMovie(data, e.target);
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h2>Crear pelicula</h2>
        <div>
          <label htmlFor="name">Nombre</label>
          <input id="name" name="name" type="text" />
        </div>
        <div>
          <label htmlFor="genre">Genero</label>
          <input id="genre" name="genre" type="text" />
        </div>
        <div>
          <label htmlFor="duration">Duración</label>
          <input id="duration" name="duration" type="text" />
        </div>
        <div>
          <label htmlFor="release_date">Lanzamiento</label>
          <input id="release_date" name="release_date" type="date" />
        </div>
        <button type="submit">Crear película</button>
      </form>

      <MovieList movies={movies} />
    </main>
  );
}

export default App;
