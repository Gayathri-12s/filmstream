import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function WatchHistory() {

  const [history, setHistory] = useState([]);
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
    }
  };


  // Convert ISO date → readable format
  const formatDate = (dateString) => {

    const date = new Date(dateString);

    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  };


  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h3>Continue Watching</h3>

        {history.length === 0 ? (

          <p className="text-muted mt-3">
            No watch history yet
          </p>

        ) : (

          <div className="movie-row mt-3">

            {history.map(item => (

              <div
                key={item.id}
                className="ott-card"
                style={{ width: "180px", cursor: "pointer" }}

                onClick={() =>
                  navigate(`/movie/${item.movie.id}`)
                }
              >

                <img
                  src={item.movie.thumbnail}
                  className="movie-poster"
                  alt={item.movie.title}
                />

                <div className="p-2">

                  <p className="mb-1">
                    {item.movie.title}
                  </p>

                  <small className="text-muted">
                    Watched on {formatDate(item.watched_at)}
                  </small>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
    </>
  );
}
