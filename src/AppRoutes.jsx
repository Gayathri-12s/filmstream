import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Watchlist from "./pages/Watchlist";
import Profile from "./pages/Profile";
import WatchHistory from "./pages/WatchHistory";
import ChangePassword from "./pages/ChangePassword";
import ProtectedRoute from "./components/ProtectedRoute";

export default function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>

      <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path="/movie/:id" element={<ProtectedRoute><MovieDetails/></ProtectedRoute>}/>
      <Route path="/watchlist" element={<ProtectedRoute><Watchlist/></ProtectedRoute>}/>
      <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
      <Route path="/history" element={<ProtectedRoute><WatchHistory/></ProtectedRoute>}/>
      <Route path="/change-password" element={<ProtectedRoute><ChangePassword/></ProtectedRoute>}/>
    </Routes>
  );
}
