import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Admin from "./pages/Admin";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/"element={<LandingPage/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
