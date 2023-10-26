import MovieCard from "./MovieCard";

const MovieList = ({ movies, deleteMovie, handleClickEdit }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          deleteMovie={deleteMovie}
          handleClickEdit={handleClickEdit}
        />
      ))}
    </ul>
  );
};
export default MovieList;
