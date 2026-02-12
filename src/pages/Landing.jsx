import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Landing() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchMovies = async () => {

      try {

        const response = await axios.get(
          "http://127.0.0.1:8000/api/movies/"
        );

        // Take only top 6 movies
        setMovies(response.data.slice(0, 6));

      } catch (error) {

        console.error("Landing movies error:", error);

      } finally {
        setLoading(false);
      }
    };

    fetchMovies();

  }, []);

  return (
    <div className="landing-page">

      {/* Top Navbar */}
      <div className="landing-nav">
        <h2 className="logo">FilmStream</h2>

        <Link to="/login" className="btn btn-brand">
          Login
        </Link>
      </div>

      {/* Hero Banner */}
      <div className="landing-hero">
        <div className="hero-content">

          <h1>Unlimited Movies, One Platform</h1>
          <p>Watch anywhere. Cancel anytime.</p>

          <Link
            to="/signup"
            className="btn btn-brand btn-lg mt-3"
          >
            Get Started
          </Link>

        </div>
      </div>

      {/* Trending Movies */}
      <div className="container mt-5">

        <h3 className="mb-4">
          🔥 Trending on FilmStream
        </h3>

        {loading ? (

          <p className="text-center">Loading...</p>

        ) : (

          <div className="row">

            {movies.map((movie) => (

              <div
                key={movie.id}
                className="col-6 col-md-2 mb-4"
              >

                <img
                  src={movie.thumbnail}
                  alt={movie.title}
                  className="img-fluid rounded landing-movie-card"
                />

                <p className="mt-2 small text-center">
                  {movie.title}
                </p>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}
