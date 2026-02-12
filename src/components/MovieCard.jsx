import { useNavigate } from "react-router-dom";
import { FaPlay, FaHeart, FaCheck } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";

export default function MovieCard({ movie }) {

  const navigate = useNavigate();

  const [added, setAdded] = useState(false);
  const [loading, setLoading] = useState(false);


  // ▶ Play
  const handlePlay = async (e) => {

    e.stopPropagation();

    try {

      const token = localStorage.getItem("token");

      await axios.post(
        "http://127.0.0.1:8000/api/history/add/",
        { movie_id: movie.id },
        {
          headers: {
            Authorization: `Token ${token}`
          }
        }
      );

      navigate(`/movie/${movie.id}`);

    } catch (err) {
      console.error("History error", err);
    }
  };


  // ❤️ Watchlist
  const handleWatchlist = async (e) => {

    e.stopPropagation();

    if (added || loading) return;

    setLoading(true);

    try {

      const token = localStorage.getItem("token");

      await axios.post(
        "http://127.0.0.1:8000/api/watchlist/add/",
        { movie_id: movie.id },
        {
          headers: {
            Authorization: `Token ${token}`
          }
        }
      );

      setAdded(true);

      // Reset after 3 seconds
      setTimeout(() => {
        setAdded(false);
      }, 3000);

    } catch (err) {
      console.error("Watchlist error", err);

    } finally {
      setLoading(false);
    }
  };


  return (
    <div
      className="ott-card"
      onClick={() => navigate(`/movie/${movie.id}`)}
      style={{ cursor: "pointer" }}
    >

      <img
        src={movie.thumbnail}
        className="movie-poster"
        alt={movie.title}
      />


      <div className="p-2">

        <h6 className="movie-title">
          {movie.title}
        </h6>


        <div
          className="d-flex justify-content-between mt-2"
          onClick={(e) => e.stopPropagation()}
        >

          {/* Play */}
          <button
            className="btn btn-brand btn-sm"
            onClick={handlePlay}
          >
            <FaPlay /> Play
          </button>


          {/* Watchlist */}
          <button
            className={`btn btn-sm ${
              added ? "btn-success" : "btn-soft"
            }`}

            onClick={handleWatchlist}

            disabled={loading}
          >

            {added ? (
              <>
                <FaCheck /> Added
              </>
            ) : (
              <FaHeart />
            )}

          </button>

        </div>

      </div>
    </div>
  );
}
