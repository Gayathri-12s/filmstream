import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function ChangePassword() {

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");


  const handleChangePassword = async () => {

    setError("");
    setMessage("");

    if (!oldPassword || !newPassword || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {

      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://127.0.0.1:8000/api/change-password/",
        {
          old_password: oldPassword,
          new_password: newPassword,
          confirm_password: confirmPassword
        },
        {
          headers: {
            Authorization: `Token ${token}`
          }
        }
      );

      setMessage(response.data.message);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");

    } catch (err) {

      setError(
        err.response?.data?.error || "Password change failed"
      );
    }
  };


  return (
    <>
      <Navbar />

      <div className="container mt-5" style={{ maxWidth: "400px" }}>
        <div className="profile-box">

          <h4 className="mb-3">Change Password</h4>

          {/* Success */}
          {message && (
            <div className="alert alert-success">
              {message}
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="alert alert-danger">
              {error}
            </div>
          )}


          <input
            type="password"
            className="form-control mb-2"
            placeholder="Current Password"
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-2"
            placeholder="New Password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />


          <button
            className="btn btn-brand w-100"
            onClick={handleChangePassword}
          >
            Update Password
          </button>

        </div>
      </div>
    </>
  );
}

export default ChangePassword;
