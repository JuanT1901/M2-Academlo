import axios from "axios";
import { useState } from "react";
import "./App.css";
import AnimeList from "./components/AnimeList";

function App() {
  const [animes, setAnimes] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const animeName = e.target.animeName.value;

    axios
      .get(`https://api.jikan.moe/v4/anime?q=${animeName}`)
      .then(({ data }) => setAnimes(data.data))
      .catch((err) => err);
  };

  return (
    <main className="bg-black min-h-screen text-white pt-5">
      <h1 className="text-center text-2xl font-semibold">Anime Searcher</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-max mx-auto mt-4 flex rounded-lg overflow-hidden"
      >
        <input
          name="animeName"
          className="text-black outline-none px-4"
          type="text"
        />
        <button className="bg-red-500 p-2 px-4 hover:bg-red-600 transition-colors">
          Search
        </button>
      </form>

      <AnimeList animes={animes}/>
    </main>
  );
}

export default App;
