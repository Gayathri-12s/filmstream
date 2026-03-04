import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";

export default function MovieDetails() {

  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [addedToWatchlist, setAddedToWatchlist] = useState(false);

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

      setAddedToWatchlist(true);
      setTimeout(() => setAddedToWatchlist(false), 3000);

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
    return (
      <>
        <Navbar />
        <div className="container" style={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          minHeight: "60vh" 
        }}>
          <div className="spinner"></div>
        </div>
      </>
    );
  }

  // Error
  if (error) {
    return (
      <>
        <Navbar />
        <div className="container text-center" style={{ marginTop: "80px" }}>
          <h2 className="text-danger">{error}</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="container movie-details-clean">

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

            <h1 style={{ 
              fontSize: "48px", 
              fontWeight: "800",
              marginBottom: "20px",
              background: "linear-gradient(135deg, #f5f5f5 0%, #2dd881 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              {movie.title}
            </h1>

            <p className="movie-meta-clean">

              <span style={{ 
                background: "linear-gradient(135deg, #ff6b35, #ff8555)",
                padding: "6px 14px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "600"
              }}>
                {movie.release_year || "N/A"}
              </span>

              <span style={{ 
                color: "#b8c5b8",
                fontSize: "14px"
              }}>
                •
              </span>

              <span style={{ fontSize: "14px" }}>
                {movie.genre || "Movie"}
              </span>

              <span style={{ 
                color: "#b8c5b8",
                fontSize: "14px"
              }}>
                •
              </span>

              <span style={{ 
                color: "#ff6b35",
                fontSize: "14px",
                fontWeight: "600"
              }}>
                ⭐ {movie.rating || "8.0"}
              </span>

            </p>

            <p className="movie-description-clean">
              {movie.description}
            </p>

            <div className="mt-4" style={{ 
              display: "flex", 
              gap: "16px",
              marginTop: "32px" 
            }}>

              <button
                className="btn btn-brand"
                onClick={playMovie}
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "8px",
                  padding: "14px 28px",
                  fontSize: "16px"
                }}
              >
                ▶ Play Now
              </button>

              <button
                className={addedToWatchlist ? "btn btn-success" : "btn btn-soft"}
                onClick={addToWatchlist}
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "8px",
                  padding: "14px 28px",
                  fontSize: "16px"
                }}
              >
                {addedToWatchlist ? "✓ Added" : "+ Watchlist"}
              </button>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}