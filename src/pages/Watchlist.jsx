import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Watchlist() {

  const [watchlist, setWatchlist] = useState([]);
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
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h3>My Watchlist</h3>

        {watchlist.length === 0 ? (
          <p className="text-muted mt-3">Your watchlist is empty</p>
        ) : (

          <div className="movie-row mt-3">

            {watchlist.map(item => (

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

                <p className="text-center mt-2">
                  {item.movie.title}
                </p>

              </div>

            ))}

          </div>

        )}

      </div>
    </>
  );
}
