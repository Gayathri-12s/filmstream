import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import MovieRow from "../components/MovieRow";
import HeroCarousel from "../components/HeroCarousel";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Get Movies
      const moviesRes = await axios.get(
        "http://127.0.0.1:8000/api/movies/"
      );

      setMovies(moviesRes.data);
    } catch (err) {
      console.error("Home load error", err);
    }
  };

  // Search Filter
  const filteredMovies = movies.filter(movie =>
    movie.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar onSearch={setSearchQuery} />

      {!searchQuery && <HeroCarousel movies={movies.slice(0, 5)} />}

      <div className="container">
        <MovieRow
          title={
            searchQuery
              ? `Search Results for "${searchQuery}"`
              : "Trending Now"
          }
          movies={filteredMovies}
        />
      </div>
    </>
  );
}