import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchWatchlist();
  }, []);

  const fetchWatchlist = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://127.0.0.1:8000/api/watchlist/",
        {
          headers: {
            Authorization: `Token ${token}`
          }
        }
      );

      setWatchlist(response.data);
    } catch (error) {
      console.error("Failed to load watchlist", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (movieId) => {
    try {
      const token = localStorage.getItem("token");

      // Find the watchlist item
      const item = watchlist.find(w => w.movie.id === movieId);
      
      if (!item) return;

      await axios.delete(
        `http://127.0.0.1:8000/api/watchlist/${item.id}/`,
        {
          headers: {
            Authorization: `Token ${token}`
          }
        }
      );

      // Update UI
      setWatchlist(watchlist.filter(w => w.movie.id !== movieId));
    } catch (error) {
      console.error("Failed to remove from watchlist", error);
      alert("Failed to remove from watchlist");
    }
  };

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

  return (
    <>
      <Navbar />

      <div className="container">
        <h3>My Favorites</h3>

        {watchlist.length === 0 ? (
          <div className="empty-state">
            <p>Your watchlist is empty</p>
            <button
              className="btn btn-brand"
              onClick={() => navigate("/home")}
            >
              Browse Movies
            </button>
          </div>
        ) : (
          <div className="movie-row">
            {watchlist.map(item => (
              <MovieCard
                key={item.id}
                movie={item.movie}
                showDelete={true}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}