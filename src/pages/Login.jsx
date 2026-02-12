import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const login = async () => {

    setErrorMessage("");

    // Validation
    if (!email || !password) {
      setErrorMessage("All fields are required");
      return;
    }

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        {
          email,
          password,
        }
      );

      // ✅ Save token
      localStorage.setItem("token", response.data.token);

      // ✅ Redirect to Home
      navigate("/home");

    } catch (error) {

      setErrorMessage(
        error.response?.data?.message || "Invalid credentials"
      );
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h2>Sign In</h2>

        {errorMessage && (
          <div className="alert alert-danger">
            {errorMessage}
          </div>
        )}

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-4"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn btn-brand w-100"
          onClick={login}
        >
          Login
        </button>

        <p className="text-center mt-3 auth-text">
          New to FilmStream?{" "}
          <Link to="/signup" className="auth-link">
            Create Account
          </Link>
        </p>

      </div>
    </div>
  );
}
