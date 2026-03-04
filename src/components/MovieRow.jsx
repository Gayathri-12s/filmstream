import MovieCard from "./MovieCard";

export default function MovieRow({ title, movies }) {
  return (
    <div>
      <h4>{title}</h4>
      
      <div className="movie-row">
        {movies && movies.length > 0 ? (
          movies.map(movie => (
            <MovieCard 
              key={movie.id} 
              movie={movie}
              showDelete={false}
            />
          ))
        ) : (
          <p style={{ color: "var(--text-muted)" }}>No movies available</p>
        )}
      </div>
    </div>
  );
}