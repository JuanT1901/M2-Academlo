import { IconEdit, IconTrash } from "@tabler/icons-react"

const MovieCard = ({ movie, deleteMovie, handleClickEdit }) => {
  return (
    <li>
      <h5>{movie.name}</h5>
      <ul>
        <li>Género: {movie.genre}</li>
        <li>Duración: {movie.duration}</li>
        <li>Lanzamiento: {movie.release_date}</li>
      </ul>
      <div>
        <button onClick={() => handleClickEdit(movie)}>
          <IconEdit size={16}/>
        </button>
        <button onClick={() => deleteMovie(movie.id)}>
          <IconTrash size={16}/>
        </button>
      </div>
    </li>
  )
}

export default MovieCard