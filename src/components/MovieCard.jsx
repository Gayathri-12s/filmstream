import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie, onDelete, showDelete }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    if (onDelete) {
      onDelete(movie.id);
    }
  };

  return (
    <div className="ott-card" onClick={handleClick}>
      <img
        src={movie.thumbnail}
        className="movie-poster"
        alt={movie.title}
      />

      <div className="movie-title">
        {movie.title}
      </div>

      {showDelete && (
        <div className="card-actions">
          <button
            className="btn-delete"
            onClick={handleDelete}
            title="Remove from list"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}