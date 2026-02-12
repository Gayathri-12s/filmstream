import MovieCard from "./MovieCard";

export default function MovieRow({ title, movies }) {
  return (
    <>
      <h4 className="mt-4">{title}</h4>
      <div className="movie-row">
        {movies.map(m => <MovieCard key={m.id} movie={m}/>)}
      </div>
    </>
  );
}
