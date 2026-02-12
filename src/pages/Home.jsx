import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import MovieRow from "../components/MovieRow";
import HeroCarousel from "../components/HeroCarousel";

export default function Home() {

  const [movies, setMovies] = useState([]);
  const [watchlistIds, setWatchlistIds] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {

    try {

      const token = localStorage.getItem("token");


      // Get Movies
      const moviesRes = await axios.get(
        "http://127.0.0.1:8000/api/movies/"
      );


      // Get Watchlist
      const watchlistRes = await axios.get(
        "http://127.0.0.1:8000/api/watchlist/",
        {
          headers: {
            Authorization: `Token ${token}`
          }
        }
      );


      setMovies(moviesRes.data);


      const ids = watchlistRes.data.map(
        item => item.movie.id
      );

      setWatchlistIds(ids);


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


      <HeroCarousel
        movies={movies.slice(0, 5)}
      />


      <div className="container">


        <MovieRow
          title={
            searchQuery
              ? `Results for "${searchQuery}"`
              : "Trending"
          }

          movies={filteredMovies}

          watchlistIds={watchlistIds}

          refresh={fetchData}
        />

      </div>
    </>
  );
}
