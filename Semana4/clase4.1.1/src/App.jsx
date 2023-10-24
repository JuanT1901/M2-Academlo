import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL } from "./constants/movies";

function App() {
  useEffect(() => {
    axios
      .get(BASE_URL + "/movies/")
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  axios
    .get("https://movies-crud-2.academlo.tech/movies/")
    .then(({ data }) => console.log(data))
    .catch((err) => console.log(err));

    const handleSubmit = () => {
      e.preventDefault()
    }

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
          <input id="genre" type="text" />
        </div>
        <div>
          <label htmlFor="duration">Duración</label>
          <input id="duration" type="text" />
        </div>
        <div>
          <label htmlFor="release_date">Lanzamiento</label>
          <input id="release_date" type="date" />
        </div>
        <button type="submit">Crear película</button>
      </form>
    </main>
  );
}

export default App;
