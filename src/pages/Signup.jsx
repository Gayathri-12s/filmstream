import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const register = async () => {

    setErrorMessage("");

    // Validation
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {

      await axios.post(
        "http://127.0.0.1:8000/api/signup/",
        {
          name,
          email,
          password,
        }
      );

      // ✅ Redirect to Login after successful signup
      navigate("/login");

    } catch (error) {

      setErrorMessage(
        error.response?.data?.message || "Signup failed"
      );
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h2>Join FilmStream</h2>

        {errorMessage && (
          <div className="alert alert-danger">
            {errorMessage}
          </div>
        )}

        <input
          type="text"
          className="form-control"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          className="form-control"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          className="form-control"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && register()}
        />

        <button
          className="btn btn-brand w-100"
          onClick={register}
          style={{ 
            marginTop: "8px",
            padding: "14px",
            fontSize: "16px"
          }}
        >
          Create Account
        </button>

        <p className="text-center auth-text" style={{ marginTop: "24px" }}>
          Already have an account?{" "}
          <Link to="/login" className="auth-link">
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
}