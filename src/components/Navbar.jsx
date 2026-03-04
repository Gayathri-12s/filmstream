import { NavLink, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaUserCircle,
  FaTimes
} from "react-icons/fa";

import { useState } from "react";

export default function Navbar({ onSearch }) {

  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();


  const handleSearch = (e) => {

    if (e.key === "Enter") {

      if (query.trim()) {
        onSearch(query);
        navigate("/home");
      }

      setShowSearch(false);
      setQuery("");
    }
  };


  return (
    <nav className="navbar-ott">

      {/* Left */}
      <div className="nav-left">
        <span
          className="logo"
          onClick={() => navigate("/home")}
        >
          FilmStream
        </span>
      </div>


      {/* Right */}
      <div className="nav-right">

        <NavLink to="/home">Home</NavLink>
        <NavLink to="/watchlist">Favorites</NavLink>


        {/* Search */}
        <div className="search-box">

          {showSearch ? (

            <div className="search-input-wrapper">

              <input
                type="text"
                className="search-input"
                placeholder="Search movies..."

                value={query}
                onChange={(e) => setQuery(e.target.value)}

                onKeyDown={handleSearch}
                autoFocus
              />

              <FaTimes
                className="search-close"
                onClick={() => {
                  setShowSearch(false);
                  setQuery("");
                }}
              />

            </div>

          ) : (

            <FaSearch
              className="search-icon"
              onClick={() => setShowSearch(true)}
            />

          )}

        </div>


        {/* Profile */}
        <FaUserCircle
          className="profile-icon"
          onClick={() => setOpen(!open)}
        />


        {open && (

          <div className="profile-dropdown">

            <p onClick={() => {
              navigate("/history");
              setOpen(false);
            }}>
              Watch History
            </p>

            <p onClick={() => {
              navigate("/change-password");
              setOpen(false);
            }}>
              Change Password
            </p>

            <p
              className="text-danger"

              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              Logout
            </p>

          </div>

        )}

      </div>
    </nav>
  );
}