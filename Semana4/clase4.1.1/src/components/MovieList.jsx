const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h5>{movie.name}</h5>
          <ul>
            <li>Género: {movie.genre}</li>
            <li>Duración: {movie.duration}</li>
            <li>Lanzamiento: {movie.release_date}</li>
          </ul>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
