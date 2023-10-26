import { useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL } from "./constants/movies";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [idMovieToEdit, setIdMovieToEdit] = useState(null);

  const formRef = useRef(null);

  const createMovie = (data, form) => {
    axios
      .post(`${BASE_URL}/movies/`, data)
      .then(() => {
        getAllMovies();
        form.reset();
      })
      .catch((err) => console.log(err));
  };

  const getAllMovies = () => {
    axios
      .get(`${BASE_URL}/movies/`)
      .then(({ data }) => setMovies(data))
      .catch((err) => console.log(err));
  };

  const deleteMovie = (id) => {
    axios
      .delete(`${BASE_URL}/movies/${id}/`)
      .then(() => getAllMovies())
      .catch((err) => console.log(err));
  };

  const updateMovie = (data) => {
    axios
      .put(`${BASE_URL}/movies/${idMovieToEdit}/`, data)
      .then(() => {
        getAllMovies();
        setIdMovieToEdit(null);
        formRef.current.reset();
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    //Condición para saber si estamos o no editando
    if (idMovieToEdit) {
      updateMovie(data);
    } else {
      createMovie(data, e.target);
    }
  };

  const handleClickEdit = (movieToEdit) => {
    formRef.current.name.value = movieToEdit.name;
    formRef.current.genre.value = movieToEdit.genre;
    formRef.current.duration.value = movieToEdit.duration;
    formRef.current.release_date.value = movieToEdit.release_date;
    setIdMovieToEdit(movieToEdit?.id);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <main>
      <form ref={formRef} onSubmit={handleSubmit}>
        <h2>{idMovieToEdit ? "Editar película" : "Crear película"}</h2>
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
        <button type="submit">
          {idMovieToEdit ? "Guardar cambios" : "Crear película"}
        </button>
      </form>

      <MovieList
        movies={movies}
        deleteMovie={deleteMovie}
        handleClickEdit={handleClickEdit}
      />
    </main>
  );
}

export default App;
