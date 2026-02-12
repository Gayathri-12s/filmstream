import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <Navbar />

      <div className="container mt-5" style={{ maxWidth: "500px" }}>
        <div className="profile-box">
          <h3 className="mb-4">My Profile</h3>

          <div className="d-grid gap-3">
            <Link to="/change-password" className="btn btn-outline-light">
              Change Password
            </Link>

            <Link to="/history" className="btn btn-outline-light">
              Watch History
            </Link>

            <button
              className="btn btn-danger"
              onClick={() => {
                localStorage.removeItem("user");
                window.location.href = "/login";
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
