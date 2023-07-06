import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Admin from "./pages/Admin";
import Auth from "./pages/Login/Auth";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Auth />}></Route>
          <Route path="/signup" element={<Auth />}></Route>
          <Route path="/"element={<LandingPage/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
