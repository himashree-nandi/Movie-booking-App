import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Admin from "./pages/Admin";
import Auth from "./pages/Login/Auth";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Auth />} />
          <Route exact path="/signup" element={<Auth />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route
            exact
            path="/movie/:movieId/details"
            element={<MovieDetails />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
