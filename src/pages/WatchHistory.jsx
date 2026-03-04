import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

export default function WatchHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://127.0.0.1:8000/api/history/",
        {
          headers: {
            Authorization: `Token ${token}`
          }
        }
      );

      setHistory(response.data);
    } catch (error) {
      console.error("Failed to load watch history", error);
    } finally {
      setLoading(false);
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
        <h3>Continue Watching</h3>

        {history.length === 0 ? (
          <div className="empty-state">
            <p>No watch history yet</p>
            <button
              className="btn btn-brand"
              onClick={() => navigate("/home")}
            >
              Start Watching
            </button>
          </div>
        ) : (
          <div className="movie-row">
            {history.map(item => (
              <MovieCard
                key={item.id}
                movie={item.movie}
                showDelete={false}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}