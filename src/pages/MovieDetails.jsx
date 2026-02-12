import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";

export default function MovieDetails() {

  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const fetchMovie = async () => {

      try {

        const token = localStorage.getItem("token");

        const response = await axios.get(
          `http://127.0.0.1:8000/api/movies/${id}/`,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );

        setMovie(response.data);

      } catch (err) {

        console.error("Movie detail error:", err);

        setError("Movie not found");

      } finally {
        setLoading(false);
      }
    };

    fetchMovie();

  }, [id]);

  // Add to Watch History
  const addToHistory = async () => {

    try {

      const token = localStorage.getItem("token");

      await axios.post(
        "http://127.0.0.1:8000/api/history/add/",
        { movie_id: id },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

    } catch (error) {
      console.error("History error:", error);
    }
  };

  // Add to Watchlist
  const addToWatchlist = async () => {

    try {

      const token = localStorage.getItem("token");

      await axios.post(
        "http://127.0.0.1:8000/api/watchlist/add/",
        { movie_id: id },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      alert("Added to Watchlist");

    } catch (error) {
      console.error("Watchlist error:", error);
    }
  };

  // Play movie
  const playMovie = () => {
    addToHistory();
    alert("Playing movie...");
  };

  // Loading state
  if (loading) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  // Error
  if (error) {
    return <p className="text-center mt-5 text-danger">{error}</p>;
  }

  return (
    <>
      <Navbar />

      <div className="container mt-5 movie-details-clean">

        <div className="row align-items-center">

          {/* Poster */}
          <div className="col-md-4 text-center">

            <img
              src={movie.thumbnail}
              alt={movie.title}
              className="movie-detail-poster-clean"
            />

          </div>

          {/* Info */}
          <div className="col-md-8">

            <h1>{movie.title}</h1>

            <p className="movie-meta-clean">

              {movie.release_year || "N/A"} •
              {movie.genre || "Movie"} •
              ⭐ {movie.rating || "8.0"}

            </p>

            <p className="movie-description-clean">
              {movie.description}
            </p>

            <div className="mt-4">

              <button
                className="btn btn-brand me-3"
                onClick={playMovie}
              >
                ▶ Play
              </button>

              <button
                className="btn btn-soft"
                onClick={addToWatchlist}
              >
                + Watchlist
              </button>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}
