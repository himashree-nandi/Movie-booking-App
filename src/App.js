import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Auth from "./pages/Login/Auth";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Admin from "./pages/Admin/Admin";
import TheatrePage from "./pages/TheatrePage/TheatrePage";
import Client from "./pages/Client/Client";
import Bookings from "./pages/Bookings/Bookings";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Auth />} />
          <Route exact path="/signup" element={<Auth />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/client" element={<Client/>}/>
          <Route exact path="/movie/:movieId/details"element={<MovieDetails />}/>
          <Route exact path="/buyTickets/:movieId" element={<TheatrePage/>} />
          <Route exact path="/buyTickets/:movieId/:theatreId" element={<Bookings/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
