import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="container" style={{ 
        maxWidth: "600px",
        marginTop: "60px"
      }}>
        
        <div className="profile-box">
          
          <h3 style={{ 
            marginTop: "0",
            marginBottom: "30px",
            fontSize: "32px",
            textAlign: "center"
          }}>
            My Profile
          </h3>

          <div className="d-grid gap-3">
            
            <Link 
              to="/change-password" 
              className="btn-outline-light"
            >
              Change Password
            </Link>

            <Link 
              to="/history" 
              className="btn-outline-light"
            >
              Watch History
            </Link>

            <Link 
              to="/watchlist" 
              className="btn-outline-light"
            >
              My Watchlist
            </Link>

            <button
              className="btn btn-danger"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
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